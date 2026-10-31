"use client";

import { usePathname } from "next/navigation";
import { Waitlist } from "./Waitlist";

// Waitlist lives in the shared layout (outside {children}), so it never
// remounts on client-side navigation. Keying it by pathname forces a fresh
// mount per route, so Waitlist's per-page heading/default-interest and its
// react-hook-form defaultValues (only read once on mount) stay correct.
export function WaitlistSection() {
  const pathname = usePathname();
  return <Waitlist key={pathname} />;
}
