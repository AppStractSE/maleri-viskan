import { services } from "@/data/services";
import { NextRequest, NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Honeypot. Real visitors never see or fill this field. */
  website?: string;
}

const allowedServices = new Set([...services.map((service) => service.name), "Annat"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const validate = (body: Partial<ContactPayload>) => {
  const data = {
    name: clean(body.name, 80),
    email: clean(body.email, 120),
    phone: clean(body.phone, 30),
    service: clean(body.service, 60),
    message: clean(body.message, 2000),
  };
  const digits = data.phone.replace(/\D/g, "");
  if (data.name.length < 2) return { error: "Ange ditt namn." };
  if (!emailPattern.test(data.email)) return { error: "Ange en giltig e-postadress." };
  if (digits.length < 8 || digits.length > 15) return { error: "Ange ett giltigt telefonnummer." };
  if (!allowedServices.has(data.service)) return { error: "Välj en tjänst." };
  if (data.message.length < 10) return { error: "Skriv ett meddelande på minst 10 tecken." };
  return { data };
};

const buildHtml = (data: Omit<ContactPayload, "website">) => {
  const row = (label: string, value: string) =>
    `<p style="margin:0 0 4px"><strong>${label}</strong></p><p style="margin:0 0 16px">${value}</p>`;
  const phoneHref = data.phone.replace(/[^\d+]/g, "");
  return `<div style="font-family:Arial,sans-serif;font-size:15px;color:#1c201e">${[
    row("Namn", escapeHtml(data.name)),
    row("E-post", `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`),
    row("Telefon", `<a href="tel:${escapeHtml(phoneHref)}">${escapeHtml(data.phone)}</a>`),
    row("Intresserad av", escapeHtml(data.service)),
    row("Meddelande", escapeHtml(data.message).replace(/\n/g, "<br>")),
  ].join("")}</div>`;
};

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Ogiltig förfrågan." }, { status: 400 });
  }

  // Bots that fill the honeypot get a normal-looking success response.
  if (body.website) return NextResponse.json({ success: true });

  const result = validate(body);
  if ("error" in result) {
    return NextResponse.json({ success: false, error: result.error }, { status: 422 });
  }
  const { data } = result;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("contact-form: API_KEY is not set");
    return NextResponse.json({ success: false, error: "Tjänsten är inte konfigurerad." }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.appstract.se/mail/sendcontactform", {
      method: "POST",
      headers: { "Content-Type": "application/json", Bearer: apiKey },
      body: JSON.stringify({
        Name: data.name,
        Email: data.email,
        Subject: `Bokningsförfrågan: ${data.service} - ${data.name}`,
        Message: `${data.message}\n\nTelefon: ${data.phone}`,
        MessageHtml: buildHtml(data),
      }),
    });
    if (!response.ok) throw new Error(`Mail API responded ${response.status}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact-form:", error);
    return NextResponse.json(
      { success: false, error: "Meddelandet kunde inte skickas. Försök igen eller ring oss." },
      { status: 502 },
    );
  }
}
