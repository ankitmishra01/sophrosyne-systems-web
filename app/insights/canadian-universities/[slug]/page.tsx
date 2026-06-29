import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCanadianUniversities } from "@/lib/db";
import UniversityProfile from "./UniversityProfile";

export const revalidate = 3600;

export async function generateStaticParams() {
  const universities = await getCanadianUniversities();
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const universities = await getCanadianUniversities();
  const u = universities.find((u) => u.slug === slug);
  if (!u) return {};
  return {
    title: `${u.shortName} AI Readiness Profile — Sophrosyne Systems`,
    description: `${u.name} scores ${u.score}/100 on AI readiness across research, policy, curriculum, partnerships, and infrastructure. Trajectory: ${u.trajectory}.`,
  };
}

export default async function UniversityProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const universities = await getCanadianUniversities();
  const university = universities.find((u) => u.slug === slug);
  if (!university) notFound();

  const peers = universities
    .filter((u) => u.slug !== slug && u.type === university.type && Math.abs(u.score - university.score) <= 18)
    .sort((a, b) => Math.abs(a.score - university.score) - Math.abs(b.score - university.score))
    .slice(0, 3);

  const rank = [...universities].sort((a, b) => b.score - a.score).findIndex((u) => u.slug === slug) + 1;

  return <UniversityProfile university={university} peers={peers} rank={rank} total={universities.length} />;
}
