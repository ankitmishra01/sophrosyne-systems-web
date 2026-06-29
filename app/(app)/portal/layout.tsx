import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isAllowedEmail } from "@/lib/access";
import PortalSidebar from "@/components/portal/PortalSidebar";

// Knowledge-centre shell: one auth + allowlist gate for every /portal/* page,
// plus the persistent sidebar. Individual pages still re-check where they need user.id.
export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  if (!isAllowedEmail(user.email)) redirect("/login?denied=1");

  return (
    <div className="portal-shell">
      <PortalSidebar email={user.email ?? ""} />
      <main className="portal-main">{children}</main>
    </div>
  );
}
