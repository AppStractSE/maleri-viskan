interface FooterLinkPartial {
  label: string;
  href: string;
  internal?: boolean;
  icon?: JSX.Element;
}

interface FooterLink {
  label: string;
  links: FooterLinkPartial[];
}

export const footerData: FooterLink[] = [
  {
    label: "Länkar",
    links: [
      {
        label: "Projekt",
        href: "/projekt",
        internal: true,
      },
      {
        label: "Kontakt",
        href: "/kontakt",
        internal: true,
      },
      {
        label: "Tjänster",
        href: "/tjanster",
        internal: true,
      },
    ],
  },
  {
    label: "Här finns vi",
    links: [
      {
        label: "Pruhultsvägen 37, 511 53 Kinna",
        href: "https://www.google.com/maps/place/M%C3%A5leri+Viskan/@57.506006,12.671134,17z/data=!3m1!4b1!4m6!3m5!1s0x46501b420e8f6d6f:0x6c921bc4eb4ac81b!8m2!3d57.5060031!4d12.6737089!16s%2Fg%2F11kr_z7sch?entry=ttu",
      },
      {
        label: "073-030 96 66",
        href: "tel:+46730309666",
      },
      {
        label: "info@maleriviskan.se",
        href: "mailto:info@maleriviskan.se",
      },
    ],
  },
];
