import { Check } from "lucide-react";
import { boardMeetRows, hero } from "@/content/site";
import { Eyebrow } from "./ui/Eyebrow";
import { RevealGroup, RevealItem } from "./ui/RevealGroup";

export function BoardMeetRows() {
  return (
    <section id="board-meet" className="bg-bg py-24 sm:py-36">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1">
            <Eyebrow className="!text-[11.5px]">{boardMeetRows.eyebrow}</Eyebrow>
          </span>
          <h2 className="max-w-[16ch] text-[34px] font-semibold leading-[1.08] tracking-tight text-fg-strong sm:text-[44px]">
            {boardMeetRows.heading}
          </h2>
          <p className="max-w-[60ch] text-[16px] leading-relaxed text-muted">{boardMeetRows.lead}</p>
        </div>

        <RevealGroup className="flex flex-col gap-16">
          {boardMeetRows.rows.map((row, i) => {
            const reverse = i % 2 === 1;
            return (
              <RevealItem index={i} key={row.heading}>
                <div
                  className={`grid grid-cols-1 items-center gap-10 min-[980px]:grid-cols-[0.9fr_1.1fr] ${
                    reverse ? "min-[980px]:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[22px] font-semibold tracking-tight text-fg-strong">{row.heading}</h3>
                    <p className="text-[16px] leading-relaxed text-muted">{row.body}</p>
                    <StepList bullets={row.bullets} />
                  </div>
                  <RowPanel kind={row.panel} />
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

function StepList({ bullets }: { bullets: string[] }) {
  return (
    <ol className="mt-1 flex flex-col">
      {bullets.map((b, i) => {
        const done = i === 0;
        const active = i === 1;
        return (
          <li
            key={b}
            className={`flex items-start gap-3 border-l-2 py-1.5 pl-3 text-[14px] ${
              active ? "border-royal" : "border-line"
            }`}
          >
            <span
              className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full ${
                done ? "bg-royal text-white" : active ? "border-2 border-royal" : "border border-line"
              }`}
              aria-hidden
            >
              {done && <Check className="size-2.5" strokeWidth={3} />}
            </span>
            <span className={active ? "font-semibold text-fg-strong" : done ? "text-fg" : "text-muted"}>{b}</span>
          </li>
        );
      })}
    </ol>
  );
}

function RowPanel({ kind }: { kind: string }) {
  const base = "overflow-hidden rounded-[14px] border border-line bg-bg-soft shadow-sm";
  const header = (title: string, tag: string) => (
    <div className="flex items-center justify-between border-b border-line px-5 py-3">
      <p className="text-[13px] font-semibold text-fg-strong">{title}</p>
      <span className="text-[11px] text-muted">{tag}</span>
    </div>
  );

  if (kind === "transcript") {
    return (
      <div className={base}>
        {header("Transcript", "Live")}
        <div className="flex flex-col gap-3 p-5">
          {hero.meeting.transcript.map((line) => (
            <div key={line.time} className="text-[13px]">
              <div className="flex items-center gap-2 text-muted">
                <span className="tabular-nums">{line.time}</span>
                <span className="font-semibold text-fg-strong">{line.speaker}</span>
              </div>
              <p className="text-fg">{line.line}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "copilot") {
    return (
      <div className={base}>
        {header("Copilot", "Members only")}
        <div className="p-5">
          <p className="mb-3 rounded-lg bg-line/40 px-3 py-2 text-[13px] text-fg">
            I joined late. What have we decided so far?
          </p>
          <div className="rounded-lg border border-line bg-bg p-3 text-[13px] text-fg">
            <p className="font-semibold text-fg-strong">Two items are settled.</p>
            <p className="mt-1 text-muted">
              Item 2: minutes of the last meeting approved. Item 3: the CEO&rsquo;s report was noted. Item 4, the
              audited accounts, has been moved and seconded and is now being voted on.
            </p>
            <p className="mt-1 text-[11px] text-muted">Sources: 14:08:31, 14:16:02, 14:21:40</p>
          </div>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-royal px-3 py-1.5 text-[12px] font-semibold text-white">
              Approve attendance
            </span>
            <span className="rounded-full border border-line px-3 py-1.5 text-[12px] font-semibold text-muted">
              Not now
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "vote") {
    const r = hero.meeting.resolution;
    return (
      <div className={base}>
        {header("Resolution 2 · Ordinary", "Majority required")}
        <div className="p-5">
          <p className="mb-3 text-[13px] text-fg">{r.text}</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <VoteStat label="For" value={r.forVotes} />
            <VoteStat label="Against" value={r.against} />
            <VoteStat label="Abstain" value={r.abstain} />
          </div>
          <p className="mt-3 text-[11px] text-muted">{r.recusal}</p>
          <div className="mt-2 flex items-center justify-between rounded-md bg-ok/10 px-3 py-2">
            <span className="text-[12px] text-fg">{hero.meeting.quorum}</span>
            <span className="text-[12px] font-semibold text-ok">{r.result}</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "minutes") {
    return (
      <div className={base}>
        {header("Draft minutes", "Awaiting approval")}
        <div className="p-5">
          <p className="text-[13px] font-semibold text-fg-strong">Item 4 &middot; Audited financial statements</p>
          <p className="mt-1 text-[13px] text-muted">
            The board considered the audited statements and the auditors&rsquo; unqualified opinion.
          </p>
          <div className="mt-3 flex flex-col gap-1.5 text-[12px]">
            <div className="flex items-center justify-between rounded-md bg-ok/10 px-2.5 py-1.5">
              <span className="text-ok">Resolution &middot; Approved, 5 for, 1 against</span>
              <span className="tabular-nums text-muted">14:21:40</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-line/40 px-2.5 py-1.5">
              <span className="text-fg">Action &middot; File statements with the regulator &middot; CFO &middot; 30 Nov</span>
              <span className="tabular-nums text-muted">14:24:12</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // advisor
  return (
    <div className={base}>
      {header("AI advisor · seat", "Speaks on request")}
      <div className="p-5">
        <div className="flex items-center gap-2 rounded-lg border border-line bg-bg px-3 py-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-light text-[11px] font-semibold text-royal">
            AI
          </span>
          <span className="text-[12px] font-semibold text-fg-strong">AI advisor</span>
        </div>
        <p className="mt-3 rounded-lg bg-line/40 px-3 py-2 text-[13px] text-fg">
          Chair: does this resolution follow the quorum rule in our articles?
        </p>
        <div className="mt-2 rounded-lg border border-line bg-bg p-3 text-[13px] text-fg">
          <p className="text-muted">
            Yes. Six of seven directors are present, above the two-thirds quorum set in Article 14.
          </p>
          <p className="mt-1 text-[11px] text-muted">Sources: Articles of association, Article 14</p>
        </div>
      </div>
    </div>
  );
}

function VoteStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-line bg-bg py-2">
      <p className="text-[18px] font-bold tabular-nums text-fg-strong">{value}</p>
      <p className="text-[10px] text-muted">{label}</p>
    </div>
  );
}
