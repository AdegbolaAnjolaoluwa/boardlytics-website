import { why } from "@/content/site";
import { SectionHead } from "./ui/SectionHead";

export function Why() {
  return (
    <section id="why" className="bg-bg py-16 sm:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 px-4 sm:px-6">
        <SectionHead
          eyebrow={why.eyebrow}
          heading={why.heading.split("\n").map((line, i) => (
            <span key={line} className={i === 1 ? "text-royal" : undefined}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
          lead={why.lead}
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {why.columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-2 border-t border-line pt-5">
              <p className="text-[14px] text-muted/70 line-through decoration-muted/50">{col.oldWay}</p>
              <h3 className="text-[20px] font-semibold text-fg-strong">{col.heading}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{col.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
