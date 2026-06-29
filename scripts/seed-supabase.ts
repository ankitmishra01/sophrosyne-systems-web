import { createClient } from "@supabase/supabase-js";
import { INSTITUTION_INDEX, CANADIAN_UNIVERSITIES } from "../lib/data";
import { UNIVERSITY_ANALYSES } from "../lib/analyses";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment");
  process.exit(1);
}

const supabase = createClient(url, key);

async function seed() {
  console.log("Seeding US universities...");
  const usRows = INSTITUTION_INDEX.map((u) => ({
    slug: u.slug,
    name: u.name,
    type: u.type,
    region: u.region,
    state: u.state,
    country: u.country,
    enrollment: u.enrollment,
    maturity_stage: u.maturityStage,
    ai_policy_published: u.aiPolicyPublished,
    ai_curriculum_initiative: u.aiCurriculumInitiative,
    financial_grade: u.financialGrade,
    official_domain: u.officialDomain,
    ai_policy_url: u.aiPolicyUrl ?? null,
    last_updated: u.lastUpdated,
  }));

  const { error: usErr } = await supabase
    .from("us_universities")
    .upsert(usRows, { onConflict: "slug" });
  if (usErr) {
    console.error("US seed error:", usErr.message);
    process.exit(1);
  }
  console.log(`Seeded ${usRows.length} US universities`);

  console.log("Seeding Canadian universities...");
  const caRows = CANADIAN_UNIVERSITIES.map((u) => ({
    slug: u.slug,
    name: u.name,
    short_name: u.shortName,
    province: u.province,
    type: u.type,
    enrollment: u.enrollment,
    founded: u.founded,
    score: u.score,
    trajectory: u.trajectory,
    research_score: u.dimensions.research,
    policy_score: u.dimensions.policy,
    curriculum_score: u.dimensions.curriculum,
    partnerships_score: u.dimensions.partnerships,
    infrastructure_score: u.dimensions.infrastructure,
    key_signals: u.keySignals,
    financial_grade: u.financialGrade,
    official_domain: u.officialDomain,
    ai_policy_url: u.aiPolicyUrl ?? null,
    last_updated: u.lastUpdated,
  }));

  const { error: caErr } = await supabase
    .from("canadian_universities")
    .upsert(caRows, { onConflict: "slug" });
  if (caErr) {
    console.error("Canadian seed error:", caErr.message);
    process.exit(1);
  }
  console.log(`Seeded ${caRows.length} Canadian universities`);

  console.log("Seeding university analyses...");
  const usSlugs = new Set(INSTITUTION_INDEX.map((u) => u.slug));
  const analysisRows = Object.entries(UNIVERSITY_ANALYSES).map(([slug, analysis]) => ({
    slug,
    analysis,
    country: usSlugs.has(slug) ? "US" : "CA",
    last_updated: "Q2 2026",
  }));
  const { error: anErr } = await supabase
    .from("university_analyses")
    .upsert(analysisRows, { onConflict: "slug" });
  if (anErr) {
    console.error("Analyses seed error:", anErr.message);
    process.exit(1);
  }
  console.log(`Seeded ${analysisRows.length} analyses`);

  console.log("Done.");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
