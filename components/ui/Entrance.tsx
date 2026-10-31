"use client";

import { useEffect, useState, type ReactNode } from "react";

// For above-the-fold content only: visible immediately, then JS arms a brief
// staggered entrance on mount. No IntersectionObserver needed — this content
// is already in view. Reduced-motion visitors see no animation.
export function Entrance({
  index = 0,
  children,
  className = "",
}: {
  index?: number;
  children: ReactNode;
  className?: string;
}) {
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);
    const t = setTimeout(() => setShown(true), 30 + index * 90);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className={`${armed ? "transition-all duration-500 ease-out" : ""} ${
        armed && !shown ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
