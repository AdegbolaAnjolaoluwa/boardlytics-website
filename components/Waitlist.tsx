"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { waitlist, waitlistByPath } from "@/content/site";
import { waitlistSchema, isFreeEmailDomain, type WaitlistInput } from "@/lib/waitlist-schema";
import { Button } from "./ui/Button";

export function Waitlist() {
  const pathname = usePathname();
  const override = waitlistByPath[pathname];
  const heading = override?.heading ?? waitlist.heading;

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      interests: waitlist.interests
        .filter((i) => (override?.defaultInterest ? i.id === override.defaultInterest : i.defaultChecked))
        .map((i) => i.id),
      country: "Nigeria",
    },
  });

  const emailValue = watch("workEmail");
  const freeEmailWarning = emailValue && isFreeEmailDomain(emailValue);

  // TODO: replace with the real Formspree form ID before launch
  // (create a form at https://formspree.io and swap YOUR_FORM_ID below).
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  const onSubmit = async (data: WaitlistInput) => {
    setStatus("idle");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          source: typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="bg-bg-soft py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-10 px-4 sm:px-6 min-[980px]:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-royal">{waitlist.eyebrow}</p>
          <h2 className="text-[32px] sm:text-[50px] font-semibold leading-[1.05] tracking-tight text-fg-strong">
            {heading}
          </h2>
          <p className="max-w-[55ch] text-[18px] leading-[1.6] text-muted">{waitlist.sub}</p>

          <ol className="flex flex-col gap-4">
            {waitlist.offer.map((item, i) => (
              <li key={item.title} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-royal text-[12px] font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[14.5px] font-semibold text-fg-strong">{item.title}</p>
                  <p className="text-[13.5px] text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-[18px] border border-line bg-bg p-6 shadow-sm sm:p-7">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <CheckCircle2 className="size-12 text-ok" strokeWidth={1.5} />
              <h3 className="text-[22px] font-semibold tracking-tight text-fg-strong">{waitlist.successTitle}</h3>
              <p className="max-w-[40ch] text-[14.5px] text-muted">{waitlist.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" error={errors.fullName?.message}>
                  <input {...register("fullName")} className="field-input" autoComplete="name" />
                </Field>
                <Field label="Work email" error={errors.workEmail?.message} hint={freeEmailWarning ? "This looks like a personal email address. A work email helps us verify your organisation." : undefined}>
                  <input {...register("workEmail")} type="email" className="field-input" autoComplete="email" />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Organisation" error={errors.organisation?.message}>
                  <input {...register("organisation")} className="field-input" autoComplete="organization" />
                </Field>
                <Field label="Your role" error={errors.role?.message}>
                  <select {...register("role")} className="field-input" defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    {waitlist.roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Organisation type">
                  <select {...register("organisationType")} className="field-input" defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    {waitlist.orgTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Country">
                  <select {...register("country")} className="field-input">
                    {waitlist.countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div>
                <p className="mb-1.5 text-[13px] font-medium text-fg-strong">Most interested in</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {waitlist.interests.map((interest) => (
                    <label key={interest.id} className="flex items-center gap-2 text-[13.5px] text-fg">
                      <input
                        type="checkbox"
                        value={interest.id}
                        defaultChecked={
                          override?.defaultInterest ? interest.id === override.defaultInterest : interest.defaultChecked
                        }
                        {...register("interests")}
                        className="size-4 rounded border-line text-royal focus:ring-2 focus:ring-medium"
                      />
                      {interest.label}
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-2.5 text-[12.5px] leading-snug text-muted">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-0.5 size-4 shrink-0 rounded border-line text-royal focus:ring-2 focus:ring-medium"
                />
                {waitlist.consentLabel}
              </label>
              {errors.consent && <p className="-mt-2 text-[12.5px] text-warn">{errors.consent.message}</p>}

              {status === "error" && <p className="text-[13px] text-warn">{waitlist.errorBody}</p>}

              <Button type="submit" disabled={isSubmitting} showArrow className="mt-1 w-full">
                {isSubmitting ? "Submitting…" : waitlist.submit}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-fg-strong">{label}</label>
      {children}
      {hint && !error && <p className="text-[12px] text-muted">{hint}</p>}
      {error && (
        <p role="alert" className="text-[12.5px] text-warn">
          {error}
        </p>
      )}
    </div>
  );
}
