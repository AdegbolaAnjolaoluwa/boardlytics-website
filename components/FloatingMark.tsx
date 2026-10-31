"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Shows a small fixed brand mark once the page has scrolled past the main
// logo in TopBrand, so there's always a way back to the homepage without
// the two logos overlapping near the top of the page.
export function FloatingMark() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/"
      aria-label="Boardlytics home"
      className={`fixed left-4 top-4 z-40 transition-opacity duration-200 sm:left-6 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <Image
        src="/brand/mark.png"
        alt=""
        width={96}
        height={96}
        className="size-9 rounded-[22%] object-contain shadow-md"
      />
    </Link>
  );
}
