"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

// Same defensive contract as Reveal: content is visible by default, JS only arms a
// one-shot staggered entrance for items not already in view when the group mounts.
const StaggerContext = createContext<{ armed: boolean; visible: boolean } | null>(null);

export function RevealGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.9;
    if (alreadyInView) return;

    setArmed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <StaggerContext.Provider value={{ armed, visible }}>{children}</StaggerContext.Provider>
    </div>
  );
}

export function RevealItem({
  index = 0,
  children,
  className = "",
}: {
  index?: number;
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(StaggerContext);
  const armed = ctx?.armed ?? false;
  const visible = ctx?.visible ?? true;
  const delayMs = Math.min(index, 8) * 70;

  return (
    <div
      className={`${armed ? "transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]" : ""} ${
        armed && !visible ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
      style={armed ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}

