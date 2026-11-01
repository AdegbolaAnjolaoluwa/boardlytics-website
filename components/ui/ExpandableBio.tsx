"use client";

import { useState } from "react";

export function ExpandableBio({ paragraphs }: { paragraphs: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const [lead, ...rest] = paragraphs;

  return (
    <div className="mt-2 flex flex-col gap-3 text-[15px] leading-relaxed text-fg">
      <p>{lead}</p>
      {rest.length > 0 && (
        <>
          {expanded && rest.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="w-fit text-[13.5px] font-semibold text-royal hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </>
      )}
    </div>
  );
}
