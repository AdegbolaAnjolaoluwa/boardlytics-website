import Image from "next/image";
import Link from "next/link";

export function TopBrand() {
  return (
    <div className="flex justify-center px-4 py-4 sm:px-6">
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
    </div>
  );
}
