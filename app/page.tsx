import { Hero } from "@/components/Hero";
import { Audience } from "@/components/Audience";
import { Why } from "@/components/Why";
import { VisionMission } from "@/components/VisionMission";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Audience />
      </Reveal>
      <Reveal>
        <Why />
      </Reveal>
      <Reveal>
        <VisionMission />
      </Reveal>
    </>
  );
}
