import { hero } from "@/content/site";
import { CountUp } from "./ui/CountUp";

export function MeetingRoomMock() {
  const { meeting } = hero;
  const total = meeting.resolution.forVotes + meeting.resolution.against + meeting.resolution.abstain;
  const pct = (n: number) => (total > 0 ? (n / total) * 100 : 0);
  const speaker = meeting.seats.find((s) => s.speaking) ?? meeting.seats[0];
  const others = meeting.seats.filter((s) => s !== speaker);

  return (
    <div
      role="img"
      aria-label={`Live board meeting screen: ${meeting.title}, ${meeting.resolution.text}, ${meeting.resolution.forVotes} for, ${meeting.resolution.against} against, ${meeting.resolution.abstain} abstain, ${meeting.resolution.result}. ${meeting.quorum}, ${meeting.quorumStatus}.`}
      className="w-full overflow-hidden rounded-[20px] border border-line bg-bg shadow-2xl"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-line bg-navy px-5 py-3.5">
        <span className="whitespace-nowrap text-[13px] font-semibold text-white">{meeting.title}</span>
        <div className="flex items-center gap-2 whitespace-nowrap text-[11px] text-white/70">
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-warn animate-pulse-dot" aria-hidden />
            {meeting.statusLeft}
          </span>
          <span className="tabular-nums">{meeting.timer}</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-6">
        {/* Speaker + attendees, single clean row */}
        <div className="flex items-center gap-4">
          <div className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-royal text-[14px] font-semibold text-white ring-4 ring-royal/15">
            {speaker.initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14px] font-semibold text-fg-strong">
              {speaker.role} speaking
            </p>
            <div className="mt-1.5 flex -space-x-2">
              {others.map((seat) => (
                <span
                  key={seat.initials}
                  className="flex size-6 items-center justify-center rounded-full border-2 border-bg bg-muted/50 text-[9px] font-semibold text-white"
                  title={seat.role}
                >
                  {seat.initials}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Resolution: the single focal card */}
        <div className="rounded-[14px] border border-line bg-bg-soft p-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-muted">
              {meeting.resolution.label}
            </span>
            <span className="rounded-full bg-ok/10 px-2.5 py-1 text-[10px] font-semibold text-ok">
              {meeting.resolution.result}
            </span>
          </div>
          <p className="mt-2 text-[14px] leading-snug text-fg-strong">{meeting.resolution.text}</p>

          <div className="mt-4 flex flex-col gap-2 text-[12px] text-fg">
            <VoteBar label="For" value={meeting.resolution.forVotes} pct={pct(meeting.resolution.forVotes)} color="bg-ok" />
            <VoteBar label="Against" value={meeting.resolution.against} pct={pct(meeting.resolution.against)} color="bg-warn" />
            <VoteBar label="Abstain" value={meeting.resolution.abstain} pct={pct(meeting.resolution.abstain)} color="bg-line" />
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[11px]">
            <span className="text-muted">{meeting.quorum}</span>
            <span className="font-semibold text-ok">{meeting.quorumStatus}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VoteBar({ label, value, pct, color }: { label: string; value: number; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0">{label}</span>
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
        <span
          className={`block h-full rounded-full ${color} animate-grow-bar`}
          style={{ width: `${pct}%` }}
        />
      </span>
      <span className="w-4 shrink-0 text-right font-semibold text-fg-strong">
        <CountUp value={value} />
      </span>
    </div>
  );
}
