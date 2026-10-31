import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/waitlist-schema";

// TODO (section 5.2 steps 2-4 of the build guide):
// - Rate limit a few submissions per IP per hour.
// - Add a honeypot field and/or Cloudflare Turnstile verification here.
// - Persist to the real data store (Express back end or managed Postgres/Supabase),
//   upserting on email so a repeat sign-up updates the existing record.
// - Send a confirmation email to the visitor and a notification to the team inbox
//   (Resend, Postmark or SendGrid).
// This stub validates the payload and logs it so the front end can be wired end to end.

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission.", issues: parsed.error.issues }, { status: 400 });
  }

  const entry = {
    ...parsed.data,
    submittedAt: new Date().toISOString(),
  };

  // Stub persistence: log to the server console only.
  // TODO: replace with a real data store write.
  console.log("[waitlist] new signup", entry);

  return NextResponse.json({ ok: true });
}
