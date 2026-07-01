# Touching Texts — Heart Touching Love Messages

**Live site:** [touchingtexts.com](https://touchingtexts.com/)

A Next.js App Router site with 93 curated, human-written love messages across 14 occasion categories. Built on Cloudflare Pages + D1 (SQLite).

## Stack

- **Next.js 15** App Router + TypeScript + Tailwind
- **Cloudflare Pages** — edge runtime (`@cloudflare/next-on-pages`)
- **Cloudflare D1** — SQLite database via Prisma + `@prisma/adapter-d1`
- **Gemini API** — AI message writer feature

## Message Categories

Anniversary · Apology · Birthday · Congratulations · Get Well Soon · Good Morning · Good Night · I Miss You · Instagram Captions · Just Because · Long Distance · Reconciliation · Thinking of You · Valentine's Day

Each category has For Her / For Him / Universal variants.

## Free Companion Tools

- **[Heart Touching Love Message Finder](https://sadiyaqeen92639572-cloud.github.io/love-message-guide/)** — interactive 3-step tool: choose who you are writing for, pick the occasion (birthday, anniversary, apology, long distance…), select your tone → get a personalised message blueprint with opening strategy, core emotion to hit, ideal length, and the most common mistake to avoid. Powered by [Touching Texts](https://touchingtexts.com/).

## Run Locally

**Prerequisites:** Node.js, Wrangler CLI

```bash
npm install
npx wrangler d1 execute touching-messages-db --local --file=prisma/schema.sql
npm run dev
```

## Deploy

```bash
npm run build
npx wrangler pages deploy .vercel/output/static --project-name touching-messages
```

## D1 Database

```bash
# Seed messages
node seed-d1.js --remote
node seed-d1-batch2.js --remote

# Query
npx wrangler d1 execute touching-messages-db --remote --command "SELECT COUNT(*) FROM Message;"
```
