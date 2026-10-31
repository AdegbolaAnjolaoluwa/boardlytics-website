"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PillNav from "./effects/PillNav";
import { Logo } from "./ui/Logo";
import { nav } from "@/content/site";

export function BottomNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    setIsMobile(query.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Hide the pill once the footer (with its own CTA/links) scrolls into view,
  // so it doesn't float over the dark footer band.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      rootMargin: "0px 0px -10% 0px",
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  // The waitlist CTA already appears as its own button throughout every page,
  // so on mobile we drop it from the pill, and use shorter labels, to leave
  // room for the nav links themselves to render as pills instead of
  // collapsing into a hamburger.
  const items = isMobile
    ? nav.links.map((link) => ({ label: link.shortLabel, href: link.href }))
    : [...nav.links, { label: nav.ctaDesktop, href: "/#waitlist" }];

  return (
    <div
      className={`pill-nav-upward fixed inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <PillNav
        logo={<Logo className="size-5" />}
        logoAlt={nav.logoText}
        logoHref="/"
        items={items}
        activeHref={pathname}
        linkComponent={Link}
        theme="light"
        layout="joined"
        itemStyle="pill"
        hoverEffect="fill"
        indicator="dot"
        surface="glass"
        size={isMobile ? "sm" : "md"}
        collapse={isMobile ? "never" : "auto"}
        highlightColor="#1461ff"
        ariaLabel="Primary"
      />
    </div>
  );
}
