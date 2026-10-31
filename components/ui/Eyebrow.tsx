export function Eyebrow({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`text-[12.5px] font-semibold uppercase tracking-[0.14em] text-royal ${className}`}>
      {children}
    </p>
  );
}
