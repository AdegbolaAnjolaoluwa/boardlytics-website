import { Check, Video, ShieldCheck } from "lucide-react";
import { platform } from "@/content/site";
import { SectionHead } from "./ui/SectionHead";
import { Card } from "./ui/Card";
import { RevealGroup, RevealItem } from "./ui/RevealGroup";

export function Platform() {
  return (
    <section id="products" className="bg-bg-soft py-24 sm:py-36">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 px-4 sm:px-6">
        <SectionHead eyebrow={platform.eyebrow} heading={platform.heading} lead={platform.lead} />

        <RevealGroup className="grid grid-cols-1 items-stretch gap-6 min-[980px]:grid-cols-2">
          {platform.cards.map((card, i) => (
            <RevealItem index={i} key={card.id} className="h-full">
            <Card featured={card.featured}>
              <div className="flex items-start justify-between">
                <span
                  className={`flex size-9 items-center justify-center rounded-lg ${
                    card.featured ? "bg-royal" : "bg-light"
                  }`}
                >
                  {card.featured ? (
                    <Video className="size-4.5 text-white" strokeWidth={1.8} />
                  ) : (
                    <ShieldCheck className="size-4.5 text-royal" strokeWidth={1.8} />
                  )}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    card.featured ? "bg-white/15 text-white" : "bg-light text-royal"
                  }`}
                >
                  {card.label}
                </span>
              </div>

              <h3 className={`mt-4 text-[20px] font-semibold ${card.featured ? "text-white" : "text-fg-strong"}`}>
                {card.name}
              </h3>
              <p className={`mt-1 text-[14px] leading-relaxed ${card.featured ? "text-white/70" : "text-muted"}`}>
                {card.line}
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {card.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-[13.5px] ${
                      card.featured ? "text-white/85" : "text-fg"
                    }`}
                  >
                    <Check className={`mt-0.5 size-3.5 shrink-0 ${card.featured ? "text-medium" : "text-royal"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="text-[14px] text-muted">{platform.worksWithPortal}</p>
      </div>
    </section>
  );
}
