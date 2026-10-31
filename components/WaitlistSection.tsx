"use client";

import { usePathname } from "next/navigation";
import { Waitlist } from "./Waitlist";

// Only the homepage and About get the waitlist CTA — it was starting to feel
// repetitive showing up on every single page.
const PAGES_WITH_WAITLIST = ["/", "/about"];

// Waitlist lives in the shared layout (outside {children}), so it never
// remounts on client-side navigation. Keying it by pathname forces a fresh
// mount per route, so Waitlist's per-page heading/default-interest and its
// react-hook-form defaultValues (only read once on mount) stay correct.
export function WaitlistSection() {
  const pathname = usePathname();
  if (!PAGES_WITH_WAITLIST.includes(pathname)) return null;
  return <Waitlist key={pathname} />;
}
