import Image from "next/image";

export function Logo({ className = "size-5" }: { className?: string }) {
  return (
    <Image
      src="/brand/mark.png"
      alt="Boardlytics"
      width={96}
      height={96}
      className={`${className} rounded-[22%] object-contain`}
      priority
    />
  );
}
