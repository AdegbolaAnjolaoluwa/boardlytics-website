import Image from "next/image";
import Link from "next/link";
import { nav } from "@/content/site";

export function TopBrand() {
  return (
    <div className="relative flex items-center justify-center px-4 py-4 sm:px-6">
      <Link href="/">
        <Image
          src="/brand/logo-horizontal.webp"
          alt="Boardlytics"
          width={668}
          height={161}
          className="h-12 w-auto animate-logo-in sm:h-14"
          priority
        />
      </Link>
      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-4 text-[14px] font-medium sm:right-6 sm:flex">
        <span className="cursor-default text-muted" aria-disabled="true">
          {nav.login.label}
        </span>
        <span
          className="cursor-default rounded-full bg-muted/40 px-4 py-2 text-white/70 shadow-sm"
          aria-disabled="true"
        >
          {nav.signup.label}
        </span>
      </div>
    </div>
  );
}
