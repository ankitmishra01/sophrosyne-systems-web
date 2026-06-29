"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Wraps every page in the marketing Navbar + Footer, EXCEPT the unlisted login
// and learning-portal routes, which render full-bleed with their own chrome.
const BARE_PREFIXES = ["/login", "/portal", "/auth"];

export default function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = BARE_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (bare) return <>{children}</>;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
