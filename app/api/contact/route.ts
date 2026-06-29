import { NextRequest, NextResponse } from "next/server";

// 3 submissions per IP per 10 minutes. Resets on cold start — sufficient to
// stop accidental double-submits and basic bots without needing external state.
const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured" },
      { status: 503 }
    );
  }

  const body = await req.json();
  const { institution, enrollment, role, challenge, product, email, message } = body;

  let res: Response;
  try {
    res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: `Sophrosyne enquiry — ${institution || "a university"}`,
        from_name: institution || "Sophrosyne enquiry",
        replyto: email,
        email: "lauretta@sophrosynesystems.org",
        Institution: institution || "—",
        Enrollment: enrollment || "—",
        Role: role || "—",
        Challenge: challenge || "—",
        "Product interest": product || "—",
        Message: message || "(no message)",
      }),
    });
  } catch (err) {
    console.error("Web3Forms fetch failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach email service — please try again." },
      { status: 502 }
    );
  }

  let json: { success?: boolean; message?: string } = {};
  try {
    json = await res.json();
  } catch {
    console.error("Web3Forms returned non-JSON, status:", res.status);
    return NextResponse.json(
      { ok: false, error: "Email service returned an unexpected response." },
      { status: 502 }
    );
  }

  if (!json.success) {
    console.error("Web3Forms error:", json);
    return NextResponse.json(
      { ok: false, error: json.message || "Delivery failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
