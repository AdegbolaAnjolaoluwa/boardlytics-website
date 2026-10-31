import { betweenMeetings } from "@/content/site";
import { SectionHead } from "./ui/SectionHead";
import { PhoneMock } from "./PhoneMock";

export function BetweenMeetings() {
  return (
    <section id="governance" className="bg-bg py-24 sm:py-36">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 min-[980px]:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHead
              eyebrow={betweenMeetings.eyebrow}
              heading={betweenMeetings.heading}
              lead={betweenMeetings.lead}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {betweenMeetings.features.map((f) => (
                <div key={f.heading} className="group flex flex-col gap-1">
                  <h3 className="text-[15px] font-semibold text-fg-strong transition-colors duration-200 group-hover:text-royal">
                    {f.heading}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-muted">{f.body}</p>
                </div>
              ))}
            </div>
          </div>

          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
