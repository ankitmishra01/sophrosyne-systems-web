# AI Fluency Portal — setup steps

The unlisted login (`/login`) and learning portal (`/portal`) are live. Two things need to be
done in your **Supabase** and **Azure** dashboards to finish wiring auth + progress. No code
changes required.

---

## 1. Create the progress table (Supabase → SQL Editor)

Until this runs, the portal still loads but "Mark complete" shows a gentle "couldn't save" notice.

```sql
create table if not exists public.class_progress (
  user_id      uuid not null references auth.users(id) on delete cascade,
  level        text not null,            -- A1..C2
  class_n      int  not null,            -- 1..6
  completed_at timestamptz not null default now(),
  primary key (user_id, level, class_n)
);

alter table public.class_progress enable row level security;

create policy "own progress - select" on public.class_progress
  for select using (auth.uid() = user_id);
create policy "own progress - insert" on public.class_progress
  for insert with check (auth.uid() = user_id);
create policy "own progress - update" on public.class_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own progress - delete" on public.class_progress
  for delete using (auth.uid() = user_id);
```

---

## 2. Auth URL configuration (Supabase → Authentication → URL Configuration)

Required so email-confirmation and Microsoft redirects come back to the site:

- **Site URL:** `https://sophrosynesystems.org`
- **Redirect URLs** (add both):
  - `https://sophrosynesystems.org/auth/callback`
  - `http://localhost:3000/auth/callback`  *(for local dev)*

**Email sign-up:** under Authentication → Providers → Email, "Confirm email" controls whether new
accounts must click a link before they can sign in. Leave on for security (the login page already
shows a "check your email" state), or turn off for instant access.

> Note: Supabase rejects test/reserved email domains (`@example.com`, `.test`). Sign up with a
> real address. (Nothing was created during QA — those attempts were rejected by validation.)

---

## 3. Social sign-in — Microsoft (Azure) + Google

Both buttons are wired through Supabase providers and stay inert until enabled.

**Microsoft (Azure):**
1. **Supabase → Authentication → Providers → Azure** — copy the **Callback URL** shown there
   (`https://<your-ref>.supabase.co/auth/v1/callback`).
2. **Azure Portal → Microsoft Entra ID → App registrations → New registration.**
   - Name: `Sophrosyne AI Fluency Portal`
   - Supported account types: *Accounts in any organizational directory and personal Microsoft
     accounts*, or single-tenant for your org only.
   - Redirect URI: **Web** → paste the Supabase Callback URL. Register.
3. Copy the **Application (client) ID**.
4. **Certificates & secrets → New client secret** → copy the secret **Value**.
5. **Supabase → Providers → Azure**: enable, paste Client ID + Secret. If single-tenant, set
   Azure Tenant URL to `https://login.microsoftonline.com/<tenant-id>`. Save.

**Google:**
1. **Supabase → Authentication → Providers → Google** — copy its Callback URL (same as above).
2. **Google Cloud Console → APIs & Services → Credentials → Create OAuth client ID** (Web app).
   - Authorized redirect URI: paste the Supabase Google Callback URL.
   - (Configure the OAuth consent screen if prompted.)
3. Copy the **Client ID** and **Client secret**.
4. **Supabase → Providers → Google**: enable, paste Client ID + Secret. Save.

Both buttons then complete the round-trip to `/portal` (or back to the brief if that's where the
user started).

---

## 3b. Roadmap status table (for the interactive Product Roadmap)

The Knowledge Centre's Product Roadmap lets allowlisted users change each item's status
(Shipped / Building / Planned), saved **shared for everyone**. Until this table exists the roadmap
still renders (authored defaults); status changes just show a "couldn't save" notice.

```sql
create table if not exists public.roadmap_status (
  item_id    text primary key,
  status     text not null check (status in ('shipped','building','planned')),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);
alter table public.roadmap_status enable row level security;

create policy "roadmap read"  on public.roadmap_status for select to authenticated using (true);
create policy "roadmap write" on public.roadmap_status for all to authenticated
  using  ( (auth.jwt()->>'email') ilike '%@sophrosynesystems.org'
           or (auth.jwt()->>'email') in ('lfrederk@uwo.ca','lauretta@sophrosynesystems.org','ankit@ankitmishra.ca') )
  with check ( (auth.jwt()->>'email') ilike '%@sophrosynesystems.org'
           or (auth.jwt()->>'email') in ('lfrederk@uwo.ca','lauretta@sophrosynesystems.org','ankit@ankitmishra.ca') );
```

---

## 4. Who can get in (allowlist)

Access to the portal **and** the brief is restricted in code — `lib/access.ts`:

- The named accounts: `lfrederk@uwo.ca`, `lauretta@sophrosynesystems.org`, `ankit@ankitmishra.ca`
- **Anyone on `@sophrosynesystems.org`** (so new staff accounts work automatically).

A signed-in account that isn't on the list is bounced to `/login` with a "not authorised" notice
and a "sign out & use another account" link. To add more outside emails later, edit the
`ALLOWED_EMAILS` set in `lib/access.ts` and redeploy. (The check is enforced both in middleware
and on the portal pages, regardless of which provider they signed in with.)

---

## What's already done (in code, deployed)

- `/login` — split-panel login: **Google + Microsoft + email/password** (+ create-account
  toggle), unlisted, honours `?next=` so it can return you to the brief.
- `/portal` + `/portal/[level]` — pathway overview and per-level class pages (6 classes each).
- **The brief at `/aifluencystandard` is now behind the login** (its old shared-password gate is
  gone). Main-site `middleware.ts` enforces login + allowlist; a shared `?k=` secret
  (`AIFLUENCY_PROXY_KEY`, set on both Vercel projects) lets the brief refuse direct *.vercel.app
  access. The brief's `proxy.ts` checks that secret.
- Supabase SSR clients, `/auth/callback` handler, `Chrome` wrapper that hides marketing nav on
  portal/login, and curriculum in `lib/curriculum.ts` (A1→C2, 36 classes).
