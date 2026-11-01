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
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hiddenAtFooter, setHiddenAtFooter] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    setIsMobile(query.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide the pill once the footer scrolls into view, so it never floats
  // over footer content or bio text near the end of a page.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setHiddenAtFooter(entry.isIntersecting), {
      rootMargin: "0px 0px -10% 0px",
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  // The waitlist CTA already appears as its own button throughout every page,
  // so on mobile we drop it from the pill.
  const items = isMobile
    ? nav.links
    : [...nav.links, nav.login, nav.signup];

  if (isMobile) {
    return (
      <div
        className={`boardlytics-mobile-logo-wrap ${hasScrolled && !hiddenAtFooter ? "is-visible" : ""}`}
        data-open={menuOpen ? "" : undefined}
      >
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
            <Link href={nav.login.href} onClick={() => setMenuOpen(false)}>{nav.login.label}</Link>
            <Link href={nav.signup.href} onClick={() => setMenuOpen(false)}>{nav.signup.label}</Link>
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
    <div
      className={`pill-nav-upward fixed inset-x-0 z-50 flex justify-center px-4 transition-opacity duration-300 ${
        hiddenAtFooter ? "pointer-events-none opacity-0" : "opacity-100"
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
        size="md"
        collapse="auto"
        highlightColor="#1461ff"
        ariaLabel="Primary"
      />
    </div>
  );
}
