import { visionMission } from "@/content/site";
import { SectionHead } from "./ui/SectionHead";
import { Card } from "./ui/Card";

export function VisionMission() {
  return (
    <section className="bg-bg-soft py-16 sm:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 px-4 sm:px-6">
        <SectionHead
          eyebrow={visionMission.eyebrow}
          heading={visionMission.heading}
          lead={visionMission.lead}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {visionMission.cards.map((card) => (
            <Card key={card.label}>
              <p className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-royal">
                {card.label}
              </p>
              <h3 className="mb-3 text-[20px] font-semibold leading-snug text-fg-strong">{card.heading}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{card.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
