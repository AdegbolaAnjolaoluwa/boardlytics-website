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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    setIsMobile(query.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // The waitlist CTA already appears as its own button throughout every page,
  // so on mobile we drop it from the pill.
  const items = isMobile ? nav.links : [...nav.links, { label: nav.ctaDesktop, href: "/#waitlist" }];

  if (isMobile) {
    return (
      <div className="boardlytics-mobile-logo-wrap" data-open={menuOpen ? "" : undefined}>
        {menuOpen && (
          <nav className="boardlytics-mobile-links" aria-label="Primary navigation">
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            {nav.links.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/#waitlist" onClick={() => setMenuOpen(false)}>{nav.ctaDesktop}</Link>
          </nav>
        )}
        <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} className="boardlytics-mobile-logo" onClick={() => setMenuOpen((open) => !open)}>
          <Logo className="size-10" />
          <span className="boardlytics-mobile-menu-glyph" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="pill-nav-upward fixed inset-x-0 z-50 flex justify-center px-4" style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}>
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
        size="md"
        collapse="auto"
        highlightColor="#1461ff"
        ariaLabel="Primary"
      />
    </div>
  );
}
