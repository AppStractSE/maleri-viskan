import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
  /** Optional element shown to the right of the heading on large screens (e.g. a link). */
  aside?: ReactNode;
  tone?: "dark" | "light";
}

const SectionHeading = ({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  align = "left",
  className = "",
  aside,
  tone = "dark",
}: Props) => {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${centered ? "items-center text-center lg:flex-col lg:items-center" : ""} ${className}`}
    >
      <div className={`max-w-3xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && (
          <p className={`eyebrow mb-4 ${tone === "light" ? "text-brand-400" : ""}`}>{eyebrow}</p>
        )}
        <Tag
          className={`text-display text-4xl leading-[1.05] text-balance sm:text-5xl ${tone === "light" ? "text-chalk" : "text-ink"}`}
        >
          {title}
        </Tag>
        {lead && (
          <p
            className={`mt-5 text-lg leading-relaxed text-pretty ${tone === "light" ? "text-chalk/75" : "text-muted"}`}
          >
            {lead}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  );
};

export default SectionHeading;
