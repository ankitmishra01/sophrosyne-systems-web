# Sophrosyne Systems — Deployment Guide

A complete, copy-pasteable guide for pushing this codebase to GitHub and deploying to Vercel.

---

## Prerequisites

Ensure the following are installed before proceeding:

```bash
node -v       # v18+ required (v20+ recommended)
npm -v        # v9+ recommended
git --version # any recent version
gh --version  # GitHub CLI — install from https://cli.github.com/
```

---

## Step 1: Install Dependencies

From the project root (`sophrosyne-systems-web/`):

```bash
npm install
```

Verify the dev server works before pushing:

```bash
npm run dev
# Open http://localhost:3000
# Test all 4 routes: /, /solutions, /pricing, /about
```

---

## Step 2: Initialize Git

```bash
# From project root
git init
git add .
git commit -m "feat: initial Sophrosyne Systems website"
```

The `.gitignore` in this repo already excludes:
- `.next/` — build output
- `node_modules/` — dependencies
- `.vercel/` — Vercel CLI config
- `.env*.local` — environment secrets

---

## Step 3: Create GitHub Repository

### Option A — GitHub CLI (recommended)

```bash
# Authenticate (one-time — opens browser)
gh auth login

# Create a public repo, set remote, and push in one command
gh repo create sophrosyne-systems-web --public --push --source .
```

### Option B — Manual Git Remote

1. Create a new repository at [github.com/new](https://github.com/new)
   - Name: `sophrosyne-systems-web`
   - Visibility: Public (or Private)
   - **Do not** initialise with README, .gitignore, or licence (we already have these)

2. Add the remote and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/sophrosyne-systems-web.git
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy to Vercel

### Option A — Vercel Dashboard (recommended for first deploy)

1. Go to [vercel.com/new](https://vercel.com/new) and sign in
2. Click **"Import Git Repository"**
3. Select your `sophrosyne-systems-web` repository
4. Vercel auto-detects **Next.js** — no configuration needed:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `.` (default)
   - **Build Command:** `next build` (auto)
   - **Output Directory:** `.next` (auto)
   - **Install Command:** `npm install` (auto)
5. Click **"Deploy"**

Your site will be live at `https://sophrosyne-systems-web.vercel.app` within ~2 minutes.

### Option B — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login (opens browser)
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

---

## Step 5: Continuous Deployment (CI/CD)

Once linked to Vercel, every `git push` triggers automatic builds:

| Branch | Deployment Type | URL Pattern |
|--------|----------------|-------------|
| `main` | Production | `sophrosyne-systems-web.vercel.app` |
| Any other branch / PR | Preview | `sophrosyne-systems-web-git-{branch}-{org}.vercel.app` |

### Workflow for ongoing development:

```bash
# Feature branch workflow
git checkout -b feature/new-section
# ... make changes ...
git add .
git commit -m "feat: add consortium dashboard section"
git push origin feature/new-section
# → Vercel automatically creates a preview URL for this branch

# Merge to main to promote to production
git checkout main
git merge feature/new-section
git push origin main
# → Vercel promotes the build to production automatically
```

---

## Environment Variables (if needed later)

If you add analytics, CMS, or email integrations:

```bash
# Via Vercel CLI
vercel env add MY_API_KEY production

# Or via Vercel Dashboard → Project → Settings → Environment Variables
```

Never commit `.env.local` files — they are already excluded by `.gitignore`.

---

## Build Verification

Before deploying, always verify the production build locally:

```bash
npm run build
# Should complete with 0 TypeScript errors

npm run start
# Test production build at http://localhost:3000
```

---

## Custom Domain

In the Vercel Dashboard → Project → Settings → Domains:

1. Click **"Add Domain"**
2. Enter `sophrosynesystems.com` (or your domain)
3. Add the DNS records Vercel provides to your domain registrar
4. SSL is provisioned automatically (Let's Encrypt)

---

## Project Structure Reference

```
sophrosyne-systems-web/
├── app/
│   ├── globals.css          ← Tailwind v4 tokens + base styles
│   ├── layout.tsx           ← Root layout with Navbar and Footer
│   ├── page.tsx             ← Homepage (/)
│   ├── solutions/page.tsx   ← Solutions (/solutions)
│   ├── pricing/page.tsx     ← Pricing (/pricing)
│   └── about/page.tsx       ← About (/about)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Accordion.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── ShowreelSection.tsx
│       ├── TrustBar.tsx
│       ├── WhySophrosyne.tsx
│       ├── JourneyTimeline.tsx
│       ├── SolutionCards.tsx
│       ├── RevenueModel.tsx
│       ├── PricingTiers.tsx
│       ├── TeamGrid.tsx
│       └── PhilosophyBlocks.tsx
├── lib/
│   └── data.ts              ← All static content
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```
