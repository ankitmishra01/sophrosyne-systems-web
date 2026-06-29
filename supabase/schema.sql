-- Run this in the Supabase SQL Editor before seeding

CREATE TABLE us_universities (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  region TEXT NOT NULL,
  state TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'US',
  enrollment TEXT NOT NULL,
  maturity_stage INTEGER NOT NULL CHECK (maturity_stage BETWEEN 1 AND 5),
  ai_policy_published BOOLEAN NOT NULL DEFAULT FALSE,
  ai_curriculum_initiative BOOLEAN NOT NULL DEFAULT FALSE,
  financial_grade TEXT NOT NULL,
  official_domain TEXT NOT NULL,
  ai_policy_url TEXT,
  last_updated TEXT NOT NULL
);

CREATE TABLE canadian_universities (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  province TEXT NOT NULL,
  type TEXT NOT NULL,
  enrollment TEXT NOT NULL,
  founded INTEGER NOT NULL,
  score INTEGER NOT NULL,
  trajectory TEXT NOT NULL,
  research_score INTEGER NOT NULL DEFAULT 0,
  policy_score INTEGER NOT NULL DEFAULT 0,
  curriculum_score INTEGER NOT NULL DEFAULT 0,
  partnerships_score INTEGER NOT NULL DEFAULT 0,
  infrastructure_score INTEGER NOT NULL DEFAULT 0,
  key_signals TEXT[] NOT NULL DEFAULT '{}',
  financial_grade TEXT NOT NULL,
  official_domain TEXT NOT NULL,
  ai_policy_url TEXT,
  last_updated TEXT NOT NULL
);

-- Enable Row Level Security (allow public read)
ALTER TABLE us_universities ENABLE ROW LEVEL SECURITY;
ALTER TABLE canadian_universities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON us_universities FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON canadian_universities FOR SELECT USING (true);

CREATE TABLE university_analyses (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  analysis TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'CA',
  last_updated TEXT NOT NULL DEFAULT 'Q2 2026'
);

ALTER TABLE university_analyses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON university_analyses FOR SELECT USING (true);

-- ── Knowledge Centre: learner progress ──────────────────────────────────────
-- Run this section once in the Supabase SQL Editor if the table doesn't exist yet.

CREATE TABLE IF NOT EXISTS class_progress (
  user_id  UUID    NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  level    TEXT    NOT NULL,
  class_n  INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT class_progress_pkey PRIMARY KEY (user_id, level, class_n)
);

ALTER TABLE class_progress ENABLE ROW LEVEL SECURITY;

-- Learners may only read their own progress rows.
CREATE POLICY "class_progress: own rows select"
  ON class_progress FOR SELECT
  USING (auth.uid() = user_id);

-- Learners may only insert rows for themselves.
CREATE POLICY "class_progress: own rows insert"
  ON class_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Learners may only delete their own rows (used by the "undo complete" button).
CREATE POLICY "class_progress: own rows delete"
  ON class_progress FOR DELETE
  USING (auth.uid() = user_id);

-- No UPDATE policy — the client uses upsert (INSERT … ON CONFLICT DO NOTHING),
-- so an explicit UPDATE path is never needed and is intentionally blocked.
