import { betweenMeetings } from "@/content/site";

export function PhoneMock() {
  const { phone } = betweenMeetings;

  return (
    <div
      role="img"
      aria-label={`Director app showing ${phone.greeting}, with items: ${phone.items
        .map((i) => `${i.title}, ${i.subtitle}`)
        .join("; ")}.`}
      className="mx-auto w-[290px] rounded-[36px] border-[10px] border-navy bg-navy shadow-2xl"
    >
      <div className="overflow-hidden rounded-[26px] bg-bg">
        <div className="bg-navy px-5 pb-4 pt-6 text-white">
          <p className="text-[11px] text-white/50">Director app</p>
          <p className="mt-1 text-[16px] font-semibold">{phone.greeting}</p>
        </div>

        <div className="flex flex-col gap-2 p-3">
          {phone.items.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-line bg-bg-soft px-3 py-2.5"
            >
              <div>
                <p className="text-[12.5px] font-semibold text-fg-strong">{item.title}</p>
                <p className="text-[11px] text-muted">{item.subtitle}</p>
              </div>
              <span className="shrink-0 rounded-full bg-royal px-2.5 py-1 text-[10.5px] font-semibold text-white">
                {item.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
