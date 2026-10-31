import { howItWorks, hero } from "@/content/site";
import { SectionHead } from "./ui/SectionHead";
import { Button } from "./ui/Button";

export function HowItWorks() {
  return (
    <section id="how" className="bg-bg py-24 sm:py-36">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-16 px-4 sm:px-6">
        <SectionHead eyebrow={howItWorks.eyebrow} heading={howItWorks.heading} />

        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent sm:block"
          />
          {howItWorks.columns.map((col, i) => (
            <div key={col.label} className="group relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-bg text-[13px] font-semibold text-royal transition-all duration-200 group-hover:border-royal group-hover:bg-royal group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-royal">{col.label}</p>
                  <h3 className="text-[18px] font-semibold text-fg-strong">{col.heading}</h3>
                </div>
              </div>
              <ul className="ml-[52px] flex flex-col gap-2.5 border-l border-line pl-4">
                {col.items.map((item) => (
                  <li key={item} className="text-[14px] leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 rounded-[18px] border border-line bg-bg-soft px-6 py-10 text-center sm:py-12">
          <p className="max-w-[48ch] text-[20px] font-semibold text-fg-strong sm:text-[24px]">
            {hero.headlineLine1} {hero.headlineLine2}
          </p>
          <Button href="/#waitlist" showArrow>
            {hero.ctaPrimary}
          </Button>
        </div>
      </div>
    </section>
  );
}
