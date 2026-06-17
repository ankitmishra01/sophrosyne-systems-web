import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured" },
      { status: 503 }
    );
  }

  const body = await req.json();
  const { institution, enrollment, role, challenge, product, email, message } = body;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: `Sophrosyne enquiry — ${institution || "a university"}`,
      from_name: institution || "Sophrosyne enquiry",
      email,
      Institution: institution || "—",
      Enrollment: enrollment || "—",
      Role: role || "—",
      Challenge: challenge || "—",
      "Product interest": product || "—",
      Message: message || "(no message)",
    }),
  });

  const json = await res.json();

  if (!json.success) {
    console.error("Web3Forms error:", json);
    return NextResponse.json(
      { ok: false, error: json.message || "Delivery failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
