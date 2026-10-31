import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  featured = false,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}) {
  const base =
    "flex h-full flex-col rounded-[14px] border p-7 transition-all duration-200 hover:-translate-y-1";
  const styles = featured
    ? "bg-navy border-navy text-white shadow-sm hover:border-royal hover:shadow-lg hover:shadow-royal/15"
    : "bg-bg border-line shadow-sm hover:border-royal hover:shadow-lg hover:shadow-royal/10";

  return <div className={`${base} ${styles} ${className}`}>{children}</div>;
}
