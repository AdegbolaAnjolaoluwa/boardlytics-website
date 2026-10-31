import { hero } from "@/content/site";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { MeetingRoomMock } from "./MeetingRoomMock";
import ShapeGrid from "./effects/ShapeGrid";
import { Entrance } from "./ui/Entrance";
import FoldText from "./effects/FoldText";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bg">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <ShapeGrid
          shape="square"
          direction="diagonal"
          lineColor="#e2e8f2"
          hoverColor="#1461ff"
          hoverFillColor="#5ca1ff"
          fillOpacity={0.12}
          cellSize={48}
          speed={0.15}
          glow={0.25}
          radius={2}
          trail={0.8}
          fade={1}
          opacity={0.2}
          clickCascade={false}
          rainbow={false}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 min-[980px]:grid-cols-2 min-[980px]:py-20">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Entrance index={0}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Entrance>
          <h1 className="flex flex-col text-[44px] sm:text-[76px] font-semibold leading-[1.0] tracking-tighter text-fg-strong">
            <FoldText
              text={hero.headlineLine1}
              trigger="mount"
              splitBy="word"
              hinge="top"
              foldAngle={85}
              duration={0.55}
              stagger={0.07}
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
            <FoldText
              text={hero.headlineLine2}
              trigger="mount"
              splitBy="word"
              hinge="top"
              foldAngle={85}
              duration={0.55}
              stagger={0.07}
              fontSize="inherit"
              fontWeight="inherit"
              color="#1461ff"
              className="!leading-[1.0] !tracking-tighter"
            />
          </h1>
          <Entrance index={2}>
            <p className="max-w-[62ch] text-[18px] leading-[1.6] text-muted">{hero.lead}</p>
          </Entrance>

          <Entrance index={3}>
            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:items-start">
              <Button href="#waitlist" showArrow className="w-full justify-center sm:w-auto">
                {hero.ctaPrimary}
              </Button>
              <Button href="/board-meet" variant="outline-dark" className="w-full justify-center sm:w-auto">
                {hero.ctaSecondary}
              </Button>
            </div>
          </Entrance>

          <Entrance index={4}>
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[13px] text-muted sm:justify-start">
              {hero.highlights.map((h) => (
                <li key={h} className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-royal" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </Entrance>
        </div>

        <MeetingRoomMock />
      </div>
    </section>
  );
}
