import { Platform } from "@/components/Platform";
import { BetweenMeetings } from "@/components/BetweenMeetings";
import { Reveal } from "@/components/ui/Reveal";

export default function PlatformPage() {
  return (
    <>
      <Reveal>
        <Platform />
      </Reveal>
      <Reveal>
        <BetweenMeetings />
      </Reveal>
    </>
  );
}
