import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadProps = {
  eyebrow?: string;
  heading: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHead({
  eyebrow,
  heading,
  lead,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadProps) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const headingColor = tone === "dark" ? "text-white" : "text-fg-strong";
  const leadColor = tone === "dark" ? "text-white/70" : "text-muted";

  return (
    <div className={`flex flex-col gap-4 max-w-[640px] ${alignClass} ${className}`}>
      {eyebrow && <Eyebrow className={tone === "dark" ? "text-medium" : undefined}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-[32px] sm:text-[50px] font-semibold leading-[1.05] tracking-tight text-balance ${headingColor}`}
      >
        {heading}
      </h2>
      {lead && <p className={`text-[18px] sm:text-[19px] leading-[1.6] max-w-[62ch] ${leadColor}`}>{lead}</p>}
    </div>
  );
}
