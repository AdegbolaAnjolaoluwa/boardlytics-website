import { z } from "zod";

export const waitlistSchema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name."),
  workEmail: z.string().trim().min(1, "Enter your work email.").email("Enter a valid email address."),
  organisation: z.string().trim().min(1, "Enter your organisation."),
  role: z.enum([
    "Company secretary",
    "Chair or director",
    "CEO or executive",
    "Legal or compliance",
    "Technology or partnerships",
    "Other",
  ], { message: "Choose your role." }),
  organisationType: z.string().trim().optional(),
  country: z.string().trim().optional(),
  interests: z.array(z.string()).default([]),
  consent: z.literal(true, {
    message: "You must agree to be contacted about early access.",
  }),
  // Not shown to the visitor; recorded alongside the submission.
  source: z.string().trim().optional(),
  utm: z.record(z.string(), z.string()).optional(),
});

export type WaitlistInput = z.input<typeof waitlistSchema>;

const FREE_EMAIL_DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"];

export function isFreeEmailDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return !!domain && FREE_EMAIL_DOMAINS.includes(domain);
}
