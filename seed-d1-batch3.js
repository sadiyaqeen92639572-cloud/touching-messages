#!/usr/bin/env node
// Batch 3: husband (x2), wife (x2), reconciliation (x2) — fills textMatch gaps
// Usage: node seed-d1-batch3.js [--remote]

const { execSync } = require('child_process');

const MESSAGES = [
  {
    id: "m68",
    title: "To My Husband, On an Ordinary Day",
    body: "No occasion. No anniversary, no milestone. Just a Tuesday where I caught myself looking at you from across the room and thinking: this is it. This is the man I chose. The man who makes coffee without being asked, who remembers my mother's birthday, who is still — somehow — the person I most want to tell things to. Being your wife is not always easy and never boring. It is the best thing about my life.",
    relationshipTag: "For Him",
    occasionTag: "Just Because",
    tone: "Romantic",
    keywords: ["touching messages for husband", "love messages for my husband", "touching paragraphs for husband"],
    length: "Paragraph",
    slug: "to-my-husband-ordinary-day",
    likes: 58
  },
  {
    id: "m69",
    title: "What Marriage Really Looks Like",
    body: "Marriage is not the wedding. It is you taking my side in an argument even when I am wrong and whispering 'try to be less wrong next time.' It is the way you know when I need quiet and when I need talking. It is years of small daily decisions to keep choosing this, us, our life. I love you, my husband. More than I said on the day I said I do.",
    relationshipTag: "For Him",
    occasionTag: "Just Because",
    tone: "Emotional",
    keywords: ["love paragraphs for husband", "romantic messages for husband", "husband love messages"],
    length: "Paragraph",
    slug: "what-marriage-really-looks-like",
    likes: 71
  },
  {
    id: "m70",
    title: "To My Wife, Quietly",
    body: "I never say this enough, and that is on me. But I want you to know — the life you have built for us, the care you pour into everything without announcing it, the way you still reach for my hand in the dark — I see all of it. I do not take any of it for granted. I love you, my wife. More than I know how to show most days. But today I am trying.",
    relationshipTag: "For Her",
    occasionTag: "Just Because",
    tone: "Emotional",
    keywords: ["love messages for my wife", "touching messages for wife", "romantic paragraphs for wife"],
    length: "Paragraph",
    slug: "to-my-wife-quietly",
    likes: 64
  },
  {
    id: "m71",
    title: "The Woman I Get to Come Home To",
    body: "Somewhere between the first date nerves and the mortgage and the years that blur together, I fell more in love with you than I thought was possible. I did not know, when I called you my girlfriend and then my fiancée and then my wife, that the word would keep getting heavier with meaning. My wife. It still sounds like a privilege every time I say it.",
    relationshipTag: "For Her",
    occasionTag: "Just Because",
    tone: "Romantic",
    keywords: ["love messages for wife", "beautiful messages for wife", "touching words for wife"],
    length: "Paragraph",
    slug: "woman-i-get-to-come-home-to",
    likes: 83
  },
  {
    id: "m72",
    title: "What I Want to Say When the Fight Is Over",
    body: "I do not want to be right more than I want to be close to you. That is the thing I keep forgetting in the middle of arguments and remembering the second they are over. I am sorry — not for having feelings, but for the way I handled them. Come here. Let us stop this.",
    relationshipTag: "For Him",
    occasionTag: "Reconciliation After an Argument",
    tone: "Comforting",
    keywords: ["making up messages for him", "reconciliation after fight messages", "after argument love messages for him"],
    length: "Short SMS",
    slug: "what-i-want-to-say-fight-is-over",
    likes: 47
  },
  {
    id: "m73",
    title: "After the Argument, Here Is What Stays",
    body: "The words fade. The volume comes down. And what is left, every single time, is you — still here, still mine, still worth every difficult conversation. I am sorry for my part. Not a blanket sorry — a specific one: I should have listened more and talked less. I love you. Let us reset.",
    relationshipTag: "For Her",
    occasionTag: "Reconciliation After an Argument",
    tone: "Emotional",
    keywords: ["reconciliation messages for her", "making up love messages for girlfriend", "after argument messages for her"],
    length: "Short SMS",
    slug: "after-argument-what-stays",
    likes: 39
  }
];

const remote = process.argv.includes('--remote');
const flag = remote ? '--remote' : '--local';

function esc(s) { return String(s).replace(/'/g, "''"); }

let ok = 0, fail = 0;
for (const m of MESSAGES) {
  const sql = `INSERT OR IGNORE INTO Message (id,title,body,relationshipTag,occasionTag,tone,keywords,length,slug,likes) VALUES ('${esc(m.id)}','${esc(m.title)}','${esc(m.body)}','${esc(m.relationshipTag)}','${esc(m.occasionTag)}','${esc(m.tone)}','${esc(JSON.stringify(m.keywords))}','${esc(m.length||'')}','${esc(m.slug)}',${m.likes});`;
  try {
    execSync(`npx wrangler d1 execute touching-messages-db ${flag} --command "${sql.replace(/"/g, '\\"')}"`, { cwd: '/media/brice/TradingData/touching-messages', stdio: 'pipe' });
    process.stdout.write(`✓ ${m.id} — ${m.title}\n`);
    ok++;
  } catch (e) {
    console.error(`❌ ${m.id}: ${e.stderr?.toString().substring(0, 200) || e.message.substring(0, 200)}`);
    fail++;
  }
}
console.log(`\n${ok} inserted, ${fail} failed`);
