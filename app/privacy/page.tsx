import type { Metadata } from "next";
import Link from "next/link";
import { privacy } from "@/content/site";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Privacy notice | Boardlytics",
  description: privacy.lead,
};

export default function PrivacyPage() {
  return (
    <div className="bg-bg py-18 sm:py-26">
      <div className="mx-auto flex max-w-[760px] flex-col gap-10 px-4 sm:px-6">
        <Link href="/" className="text-[13.5px] font-medium text-royal hover:underline">
          ← Back to Boardlytics
        </Link>

        <SectionHead eyebrow={privacy.eyebrow} heading={privacy.heading} lead={privacy.lead} />

        <p className="text-[13px] text-muted">{privacy.updated}</p>

        <div className="flex flex-col gap-8 border-t border-line pt-8">
          {privacy.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-2">
              <h2 className="text-[20px] font-semibold text-fg-strong">{section.heading}</h2>
              <p className="max-w-[65ch] text-[15.5px] leading-[1.6] text-fg">{section.body}</p>
              {"contact" in section && section.contact && (
                <p className="text-[15.5px] text-fg">
                  Email:{" "}
                  <a href={`mailto:${section.contact}`} className="font-medium text-royal hover:underline">
                    {section.contact}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
