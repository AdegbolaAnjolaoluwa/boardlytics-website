"use client";

import { useEffect, useRef } from "react";

// Once the page has been scrolled to the very bottom (where the footer's
// sticky "Boardlytics" band comes to rest), stop further DOWNWARD scroll so
// that band stays the last thing the visitor sees. Scrolling back up always
// still works.
export function ScrollLockAtBottom() {
  const touchStartY = useRef(0);

  useEffect(() => {
    const atBottom = () => {
      const doc = document.documentElement;
      return window.scrollY + window.innerHeight >= doc.scrollHeight - 1;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > 0 && atBottom()) event.preventDefault();
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? 0;
      const movingUp = currentY < touchStartY.current; // finger moving up the screen = scrolling down the page
      if (movingUp && atBottom()) event.preventDefault();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const downKeys = ["ArrowDown", "PageDown", "End", " "];
      if (downKeys.includes(event.key) && atBottom()) event.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
