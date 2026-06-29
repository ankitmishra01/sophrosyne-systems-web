import { createClient } from "@supabase/supabase-js";
import { INSTITUTION_INDEX, CANADIAN_UNIVERSITIES } from "./data";
import type { InstitutionEntry, CanadianUniversityEntry } from "./data";

function getSupabase() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export async function getUSUniversities(): Promise<InstitutionEntry[]> {
  const sb = getSupabase();
  if (!sb) return INSTITUTION_INDEX;
  const { data, error } = await sb.from("us_universities").select("*").order("name");
  if (error || !data?.length) return INSTITUTION_INDEX;
  return data.map(rowToUSEntry);
}

export async function getCanadianUniversities(): Promise<CanadianUniversityEntry[]> {
  const sb = getSupabase();
  if (!sb) return CANADIAN_UNIVERSITIES;
  const { data, error } = await sb
    .from("canadian_universities")
    .select("*")
    .order("score", { ascending: false });
  if (error || !data?.length) return CANADIAN_UNIVERSITIES;
  return data.map(rowToCAEntry);
}

function rowToUSEntry(row: Record<string, unknown>): InstitutionEntry {
  return {
    slug: row.slug as string,
    name: row.name as string,
    type: row.type as InstitutionEntry["type"],
    region: row.region as InstitutionEntry["region"],
    state: row.state as string,
    country: row.country as "US" | "CA",
    enrollment: row.enrollment as InstitutionEntry["enrollment"],
    maturityStage: row.maturity_stage as 1 | 2 | 3 | 4 | 5,
    aiPolicyPublished: row.ai_policy_published as boolean,
    aiCurriculumInitiative: row.ai_curriculum_initiative as boolean,
    financialGrade: row.financial_grade as InstitutionEntry["financialGrade"],
    officialDomain: row.official_domain as string,
    aiPolicyUrl: (row.ai_policy_url as string) ?? undefined,
    lastUpdated: row.last_updated as string,
  };
}

function rowToCAEntry(row: Record<string, unknown>): CanadianUniversityEntry {
  return {
    slug: row.slug as string,
    name: row.name as string,
    shortName: row.short_name as string,
    province: row.province as CanadianUniversityEntry["province"],
    type: row.type as CanadianUniversityEntry["type"],
    enrollment: row.enrollment as CanadianUniversityEntry["enrollment"],
    founded: row.founded as number,
    score: row.score as number,
    trajectory: row.trajectory as CanadianUniversityEntry["trajectory"],
    dimensions: {
      research: row.research_score as number,
      policy: row.policy_score as number,
      curriculum: row.curriculum_score as number,
      partnerships: row.partnerships_score as number,
      infrastructure: row.infrastructure_score as number,
    },
    keySignals: row.key_signals as string[],
    financialGrade: row.financial_grade as CanadianUniversityEntry["financialGrade"],
    officialDomain: row.official_domain as string,
    aiPolicyUrl: (row.ai_policy_url as string) ?? undefined,
    lastUpdated: row.last_updated as string,
  };
}
