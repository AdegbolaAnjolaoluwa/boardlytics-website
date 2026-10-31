import { builtFor } from "@/content/site";

export function Audience() {
  return (
    <section className="border-b border-line bg-bg-soft py-6">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-3 gap-y-2 px-4 sm:px-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          {builtFor.label}
        </span>
        <span className="hidden text-muted sm:inline" aria-hidden>
          |
        </span>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-muted">
          {builtFor.items.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {item}
              {i < builtFor.items.length - 1 && <span aria-hidden>·</span>}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
