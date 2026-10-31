import { Logo } from "./ui/Logo";
import { footer, nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50">Contact us</p>
            <a href={`mailto:${footer.contactEmail}`} className="text-[14px] text-medium hover:underline">
              {footer.contactEmail}
            </a>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50">{column.heading}</p>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[14px] text-white/75 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
                {"comingSoon" in column &&
                  column.comingSoon?.map((link) => (
                    <li key={link.label}>
                      <span className="cursor-default text-[14px] text-white/35" aria-disabled="true">
                        {link.label}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2 text-white">
            <Logo className="size-5" />
            <span className="text-[14px] font-bold">{nav.logoText}</span>
          </div>
          <p className="max-w-[640px] text-[12px] leading-relaxed text-white/50">{footer.disclaimer}</p>
        </div>

        <p className="mt-6 text-[12px] text-white/40">{footer.company}</p>
      </div>

      <div className="sticky bottom-0 overflow-hidden bg-navy" style={{ height: "9vw" }}>
        <p
          className="absolute left-0 top-0 whitespace-nowrap pl-4 font-semibold leading-[1] tracking-tight text-white/[0.08] sm:pl-6"
          style={{ fontSize: "16vw" }}
        >
          {footer.cta.heading}
        </p>
      </div>
    </footer>
  );
}
