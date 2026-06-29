// Who may enter the Knowledge Centre.
//
// To grant access without redeploying, set these in the Vercel dashboard
// (they are read at runtime by middleware, no rebuild needed):
//
//   PORTAL_ALLOWED_EMAILS  — comma-separated extra emails, e.g. "a@uni.edu,b@partner.com"
//   PORTAL_ALLOWED_DOMAIN  — override the allowed domain (default: sophrosynesystems.org)

const BASE_EMAILS = [
  "lfrederk@uwo.ca",
  "lauretta@sophrosynesystems.org",
  "ankit@ankitmishra.ca",
];

const ALLOWED_DOMAIN =
  process.env.PORTAL_ALLOWED_DOMAIN?.trim().toLowerCase() || "sophrosynesystems.org";

const ALLOWED_EMAILS: Set<string> = (() => {
  const extra = (process.env.PORTAL_ALLOWED_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return new Set([...BASE_EMAILS, ...extra]);
})();

export function isAllowedEmail(email?: string | null): boolean {
  if (!email) return false;
  const e = email.trim().toLowerCase();
  return ALLOWED_EMAILS.has(e) || e.endsWith(`@${ALLOWED_DOMAIN}`);
}
