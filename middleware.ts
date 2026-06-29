import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isAllowedEmail } from "@/lib/access";

// Refreshes the Supabase session cookie and guards the learning portal.
// Matcher is scoped to /login and /portal ONLY (see config below) so this never
// touches the marketing routes or the /aifluencystandard rewrite in next.config.ts.
export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Safety net: if an OAuth/email code lands on the homepage (e.g. Supabase fell back
  // to its Site URL because the callback wasn't in the Redirect-URLs allowlist), forward
  // it to the real callback so the session still gets exchanged. Early-return so the
  // public homepage never pays for a getUser() call.
  if (pathname === "/") {
    const code = searchParams.get("code");
    if (code) {
      const url = new URL("/auth/callback", request.url);
      url.searchParams.set("code", code);
      const n = searchParams.get("next");
      if (n) url.searchParams.set("next", n);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const allowed = isAllowedEmail(user?.email);

  // Portal — must be signed in AND on the allowlist.
  if (pathname.startsWith("/portal")) {
    if (!user) {
      const url = new URL("/login", request.url);
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    if (!allowed) return NextResponse.redirect(new URL("/login?denied=1", request.url));
  }

  // The AI Fluency Standard brief is proxied (next.config rewrite) from a separate project.
  // It lives ONLY behind the portal now: it's embedded in /portal/one-pager, and any direct
  // top-level visit is sent there. The iframe's document load + its sub-resources have a
  // non-"document" Sec-Fetch-Dest, so they pass through to the rewrite (which appends the
  // shared secret the brief checks).
  if (pathname.startsWith("/aifluencystandard")) {
    if (!user) {
      const url = new URL("/login", request.url);
      url.searchParams.set("next", "/portal/one-pager");
      return NextResponse.redirect(url);
    }
    if (!allowed) return NextResponse.redirect(new URL("/login?denied=1", request.url));
    if (request.headers.get("sec-fetch-dest") === "document") {
      return NextResponse.redirect(new URL("/portal/one-pager", request.url));
    }
  }

  // Signed in and allowed → skip the login page, honouring ?next=. A signed-in user
  // who is NOT allowed stays on /login so they see the "denied" notice and can sign out.
  if (user && allowed && pathname === "/login") {
    const rawNext = request.nextUrl.searchParams.get("next");
    const dest = rawNext && /^\/[^/]/.test(rawNext) ? rawNext : "/portal";
    return NextResponse.redirect(new URL(dest, request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/", "/login", "/portal/:path*", "/aifluencystandard", "/aifluencystandard/:path*"],
};
