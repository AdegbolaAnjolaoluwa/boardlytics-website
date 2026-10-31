import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "outline" | "outline-dark";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  showArrow?: boolean;
};

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  children,
  className = "",
  disabled,
  showArrow = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-150 hover:-translate-y-px active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:pointer-events-none";
  const styles =
    variant === "primary"
      ? "bg-royal text-white shadow-sm hover:bg-royal/90 hover:shadow-md hover:shadow-royal/20"
      : variant === "outline-dark"
        ? "bg-transparent text-fg-strong border border-line hover:border-royal hover:bg-royal/5"
        : "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/5";

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-[3px]" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles} ${className}`}>
      {content}
    </button>
  );
}
