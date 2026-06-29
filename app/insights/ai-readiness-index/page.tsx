import type { Metadata } from "next";
import AIReadinessIndex from "./AIReadinessIndex";
import { getUSUniversities } from "@/lib/db";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "US AI Readiness Index — Sophrosyne Systems",
  description:
    "A free, searchable database of the top 100 U.S. universities and their AI implementation maturity across 5 stages from Explore to Reshape. No login required. Updated quarterly.",
};

export default async function AIReadinessIndexPage() {
  const institutions = await getUSUniversities();
  return <AIReadinessIndex institutions={institutions} />;
}
