import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUSUniversities } from "@/lib/db";
import USUniversityProfile from "./USUniversityProfile";

export const revalidate = 3600;

export async function generateStaticParams() {
  const institutions = await getUSUniversities();
  return institutions.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const institutions = await getUSUniversities();
  const u = institutions.find((u) => u.slug === slug);
  if (!u) return {};
  const stageName = ["", "Explore", "Deploy", "Automate", "Integrate", "Reshape"][u.maturityStage];
  return {
    title: `${u.name} AI Readiness Profile — Sophrosyne Systems`,
    description: `${u.name} is at Stage ${u.maturityStage} (${stageName}) on the US AI Readiness Index. ${u.type} institution in ${u.state} with ${u.enrollment} enrollment.`,
  };
}

export default async function USUniversityProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const institutions = await getUSUniversities();
  const university = institutions.find((u) => u.slug === slug);
  if (!university) notFound();

  const peers = institutions
    .filter((u) =>
      u.slug !== slug &&
      u.region === university.region &&
      u.type === university.type &&
      Math.abs(u.maturityStage - university.maturityStage) <= 1
    )
    .slice(0, 3);

  const rank = [...institutions]
    .sort((a, b) => b.maturityStage - a.maturityStage || a.name.localeCompare(b.name))
    .findIndex((u) => u.slug === slug) + 1;

  return <USUniversityProfile university={university} peers={peers} rank={rank} total={institutions.length} />;
}
