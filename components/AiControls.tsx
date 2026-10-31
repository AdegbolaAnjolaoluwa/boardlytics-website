import { aiControls } from "@/content/site";
import { SectionHead } from "./ui/SectionHead";
import { RevealGroup, RevealItem } from "./ui/RevealGroup";

export function AiControls() {
  return (
    <section id="ai" className="bg-bg-soft py-24 sm:py-36">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 px-4 sm:px-6">
        <SectionHead eyebrow={aiControls.eyebrow} heading={aiControls.heading} lead={aiControls.lead} />

        <p className="text-[15px] text-fg">{aiControls.optionalLine}</p>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiControls.points.map((p, i) => (
            <RevealItem index={i} key={p.heading}>
            <div
              className="group flex flex-col gap-2 border-t-2 border-navy pt-4 transition-colors duration-200 hover:border-royal"
            >
              <h3 className="text-[15px] font-semibold text-fg-strong transition-colors duration-200 group-hover:text-royal">
                {p.heading}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted">{p.body}</p>
            </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
