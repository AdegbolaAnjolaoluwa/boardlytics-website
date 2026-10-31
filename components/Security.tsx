import { security } from "@/content/site";
import { SectionHead } from "./ui/SectionHead";
import { RevealGroup, RevealItem } from "./ui/RevealGroup";

export function Security() {
  return (
    <section id="security" className="bg-bg-soft py-24 sm:py-36">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 px-4 sm:px-6">
        <SectionHead eyebrow={security.eyebrow} heading={security.heading} lead={security.lead} />

        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {security.cells.map((cell, i) => (
            <RevealItem index={i} key={cell.heading}>
            <div className="group flex h-full flex-col gap-1.5 bg-bg p-5 transition-colors duration-200 hover:bg-bg-soft">
              <h3 className="text-[14.5px] font-semibold text-fg-strong transition-colors duration-200 group-hover:text-royal">
                {cell.heading}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-muted">{cell.body}</p>
            </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="rounded-[14px] border border-line bg-bg-soft p-6">
          <p className="mb-4 text-[15px] font-semibold text-fg-strong">{security.deployment.heading}</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {security.deployment.options.map((opt, i) => (
              <div
                key={opt}
                className={`rounded-lg border px-4 py-3 text-[13.5px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
                  i === 0
                    ? "border-royal/30 bg-royal/5 text-fg-strong font-medium"
                    : "border-line bg-bg text-fg hover:border-royal/40"
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
