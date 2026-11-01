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
        <Link href={nav.login.href} className="text-fg transition-colors hover:text-royal">
          {nav.login.label}
        </Link>
        <Link
          href={nav.signup.href}
          className="rounded-full bg-royal px-4 py-2 text-white shadow-sm transition-colors hover:bg-royal/90"
        >
          {nav.signup.label}
        </Link>
      </div>
    </div>
  );
}
