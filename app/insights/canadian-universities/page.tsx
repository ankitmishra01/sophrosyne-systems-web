import type { Metadata } from "next";
import CanadianIndex from "./CanadianIndex";
import { getCanadianUniversities } from "@/lib/db";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Canadian Universities AI Readiness Index — Sophrosyne Systems",
  description:
    "Every Canadian university scored across five AI readiness dimensions: research, policy, curriculum, partnerships, and infrastructure — plus a financial health grade. Free, no login required. Updated Q2 2026.",
};

export default async function CanadianUniversitiesPage() {
  const universities = await getCanadianUniversities();
  return <CanadianIndex universities={universities} />;
}
