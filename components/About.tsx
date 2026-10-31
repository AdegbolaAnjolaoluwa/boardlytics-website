import Image from "next/image";
import { about } from "@/content/site";
import { SectionHead } from "./ui/SectionHead";

export function About() {
  return (
    <section id="about" className="bg-bg py-24 sm:py-36">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 px-4 sm:px-6">
        <SectionHead eyebrow={about.eyebrow} heading={about.heading} lead={about.lead} />

        <div className="flex flex-col gap-10">
          {about.people.map((person) => (
            <div
              key={person.name}
              className="grid grid-cols-1 items-start gap-8 rounded-[18px] border border-line bg-bg-soft p-6 sm:p-8 min-[760px]:max-w-[880px] min-[760px]:grid-cols-[220px_1fr]"
            >
              <div className="overflow-hidden rounded-[14px] border border-line">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={400}
                  height={500}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-royal">{person.role}</p>
                <h3 className="text-[24px] font-semibold tracking-tight text-fg-strong">{person.name}</h3>
                <p className="text-[12.5px] text-muted">{person.credentials}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-fg">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
