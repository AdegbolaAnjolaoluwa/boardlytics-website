"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useForm, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { waitlist, waitlistByPath } from "@/content/site";
import { waitlistSchema, isFreeEmailDomain, type WaitlistInput } from "@/lib/waitlist-schema";
import { Button } from "./ui/Button";

const STEPS: { title: string; fields: Path<WaitlistInput>[] }[] = [
  { title: "Who you are", fields: ["fullName", "workEmail"] },
  { title: "Your organisation", fields: ["organisation", "role"] },
  { title: "A bit more", fields: ["organisationType", "country"] },
  { title: "Last step", fields: ["interests", "consent"] },
];

export function Waitlist() {
  const pathname = usePathname();
  const override = waitlistByPath[pathname];
  const heading = override?.heading ?? waitlist.heading;

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isMobile, setIsMobile] = useState(false);
  const [step, setStep] = useState(0);
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    setIsMobile(query.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
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

  const isLastStep = step === STEPS.length - 1;

  const goNext = async () => {
    const valid = await trigger(STEPS[step].fields);
    if (!valid) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  // Focus the first field of the new step, and scroll the card into view so
  // the step change is obvious even if the user has scrolled past the form.
  useEffect(() => {
    if (!isMobile) return;
    const card = formCardRef.current;
    if (!card) return;
    const firstField = card.querySelector<HTMLElement>(
      "input:not([type=checkbox]), select, [type=checkbox]"
    );
    firstField?.focus({ preventScroll: true });
  }, [step, isMobile]);

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

        <div ref={formCardRef} className="rounded-[18px] border border-line bg-bg p-6 shadow-sm sm:p-7">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <CheckCircle2 className="size-12 text-ok" strokeWidth={1.5} />
              <h3 className="text-[22px] font-semibold tracking-tight text-fg-strong">{waitlist.successTitle}</h3>
              <p className="max-w-[40ch] text-[14.5px] text-muted">{waitlist.successBody}</p>
            </div>
          ) : isMobile ? (
            <form
              onSubmit={(e) => {
                if (!isLastStep) {
                  e.preventDefault();
                  goNext();
                  return;
                }
                handleSubmit(onSubmit)(e);
              }}
              noValidate
              className="flex flex-col gap-5"
            >
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[12px] font-medium text-muted">
                    Step {step + 1} of {STEPS.length}
                  </p>
                  <p className="text-[13px] font-semibold text-fg-strong" aria-live="polite">
                    {STEPS[step].title}
                  </p>
                </div>
                <div className="flex gap-1.5" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={STEPS.length}>
                  {STEPS.map((s, i) => (
                    <span
                      key={s.title}
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
                        i <= step ? "bg-royal" : "bg-line"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {step === 0 && (
                <div className="flex flex-col gap-4">
                  <Field label="Full name" error={errors.fullName?.message}>
                    <input {...register("fullName")} className="field-input" autoComplete="name" />
                  </Field>
                  <Field
                    label="Work email"
                    error={errors.workEmail?.message}
                    hint={
                      freeEmailWarning
                        ? "This looks like a personal email address. A work email helps us verify your organisation."
                        : undefined
                    }
                  >
                    <input {...register("workEmail")} type="email" className="field-input" autoComplete="email" />
                  </Field>
                </div>
              )}

              {step === 1 && (
                <div className="flex flex-col gap-4">
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
              )}

              {step === 2 && (
                <div className="flex flex-col gap-4">
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
              )}

              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="mb-1.5 text-[13px] font-medium text-fg-strong">Most interested in</p>
                    <div className="flex flex-col gap-2">
                      {waitlist.interests.map((interest) => (
                        <label key={interest.id} className="flex items-center gap-2 text-[13.5px] text-fg">
                          <input
                            type="checkbox"
                            value={interest.id}
                            defaultChecked={
                              override?.defaultInterest
                                ? interest.id === override.defaultInterest
                                : interest.defaultChecked
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
                </div>
              )}

              <div className="flex items-center gap-3">
                {step > 0 && (
                  <Button type="button" variant="outline-dark" onClick={goBack} className="flex-1 justify-center">
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  showArrow={isLastStep}
                  className="flex-[2] justify-center"
                >
                  {isLastStep ? (isSubmitting ? "Submitting…" : waitlist.submit) : "Next"}
                </Button>
              </div>
            </form>
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
