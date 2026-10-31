import { BoardMeetRows } from "@/components/BoardMeetRows";
import { AiControls } from "@/components/AiControls";
import { Reveal } from "@/components/ui/Reveal";

export default function BoardMeetPage() {
  return (
    <>
      <Reveal>
        <BoardMeetRows />
      </Reveal>
      <Reveal>
        <AiControls />
      </Reveal>
    </>
  );
}
