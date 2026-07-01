#!/usr/bin/env node
// Batch 4: +5 Birthday, +3 Valentine's Day — fill thin occasion pools
// Usage: node seed-d1-batch4.js [--remote]

const { execSync } = require('child_process');

const MESSAGES = [
  // ── BIRTHDAY ──────────────────────────────────────────────────────────────
  {
    id: "m74",
    title: "A Birthday Letter for the Man I Am Still Learning",
    body: "You have been in my life long enough that I should know everything about you. And yet. I am still discovering new things — the way you laugh when something genuinely surprises you, the face you make when you are trying not to say something, the silence you carry when you are working through something hard. I do not know everything about you yet, and that is one of my favorite things. You are still unfolding. Happy birthday to the man I am still, happily, figuring out.",
    relationshipTag: "For Him",
    occasionTag: "Birthday",
    tone: "Passionate",
    keywords: ["birthday paragraphs for him", "long birthday message for boyfriend", "touching birthday letter for him"],
    length: "Paragraph",
    slug: "birthday-letter-man-still-learning",
    likes: 61
  },
  {
    id: "m75",
    title: "What I Wish For You on Your Birthday",
    body: "I do not wish you a perfect day. Perfect days are not real and they are not you. I wish you a day that feels exactly like who you are — a little unpredictable, warmer than expected, better than planned. I wish you this year to be full of the things that make your eyes do that thing they do when something is genuinely good. Happy birthday. Go be exactly yourself today.",
    relationshipTag: "For Her",
    occasionTag: "Birthday",
    tone: "Sweet",
    keywords: ["birthday wishes for her", "birthday message for girlfriend", "heartfelt birthday wish for her"],
    length: "Short SMS",
    slug: "what-i-wish-for-you-birthday",
    likes: 47
  },
  {
    id: "m76",
    title: "Every Year I Know You Is My Favorite",
    body: "I have known you through different versions of myself — some I am proud of, some I am still making peace with. You were there through the hard years and the easy ones and the ones neither of us saw coming. Every birthday of yours I get to be part of feels like the universe showing off. Happy birthday. I love you more this year than last, which I keep thinking is impossible, and keep being wrong about.",
    relationshipTag: "Universal",
    occasionTag: "Birthday",
    tone: "Emotional",
    keywords: ["touching birthday messages", "emotional birthday message for partner", "birthday paragraph that makes her cry"],
    length: "Paragraph",
    slug: "every-year-i-know-you-favorite",
    likes: 79
  },
  {
    id: "m77",
    title: "The Least Romantic Birthday Message You Will Receive Today",
    body: "You are another year older, slightly more stubborn, and somehow still the exact person I want annoying me for the rest of my life. Happy birthday. I got you this message because you are genuinely impossible to shop for, and I love you more than you deserve — which is saying something, because you deserve a lot.",
    relationshipTag: "Universal",
    occasionTag: "Birthday",
    tone: "Sweet",
    keywords: ["funny birthday messages for boyfriend", "cute birthday message for partner", "sweet birthday message"],
    length: "Short SMS",
    slug: "least-romantic-birthday-message",
    likes: 112
  },
  {
    id: "m78",
    title: "Happy Birthday From Wherever I Am",
    body: "I cannot be there today and I hate that more than I can say. But wherever I am, whatever I am doing, a part of my attention is on you — hoping your coffee is good, hoping someone makes a fuss, hoping the day is as warm as you make everything else feel. Happy birthday, my love. You deserve the whole world celebrating you. Starting with me, from here.",
    relationshipTag: "For Her",
    occasionTag: "Birthday",
    tone: "Emotional",
    keywords: ["long distance birthday message for her", "birthday message from far away", "touching birthday message for girlfriend"],
    length: "Paragraph",
    slug: "happy-birthday-from-wherever-i-am",
    likes: 55
  },

  // ── VALENTINE'S DAY ───────────────────────────────────────────────────────
  {
    id: "m79",
    title: "Our First Valentine's Day",
    body: "I did not know, when this year started, that I would be spending Valentine's Day thinking about you this much. Here we are. I do not have the right words yet for what this is — it is still new enough that it surprises me sometimes. But I know this: I am glad it is you. Happy Valentine's Day. I hope you already knew that.",
    relationshipTag: "Universal",
    occasionTag: "Valentine's Day",
    tone: "Sweet",
    keywords: ["first valentines day together message", "new relationship valentines day", "valentines day message for new boyfriend"],
    length: "Short SMS",
    slug: "our-first-valentines-day",
    likes: 88
  },
  {
    id: "m80",
    title: "You Ruined My Cynicism Completely",
    body: "I used to roll my eyes at Valentine's Day. The forced romance, the overpriced flowers, the script everyone follows. Then you happened. And suddenly I understand every corny love song that has ever existed. You did that. You ruined my cynicism completely, and I am not even a little sorry. Happy Valentine's Day to the man who changed what this day means.",
    relationshipTag: "For Him",
    occasionTag: "Valentine's Day",
    tone: "Emotional",
    keywords: ["valentines day message for him", "touching valentines day paragraphs for him", "valentine paragraph for boyfriend"],
    length: "Paragraph",
    slug: "you-ruined-my-cynicism-completely",
    likes: 97
  },
  {
    id: "m81",
    title: "No Grand Gesture, Just This",
    body: "I am not going to pretend I am good at romance. You know me too well for that. But I want you to know — today and always — that I think about you more than I say. That I notice more than I show. That you are the reason February feels different from every other month. Happy Valentine's Day. You are my favorite thing that has ever happened to me.",
    relationshipTag: "For Her",
    occasionTag: "Valentine's Day",
    tone: "Sweet",
    keywords: ["valentines day message for her", "simple valentines day message for girlfriend", "short valentines day paragraph for her"],
    length: "Paragraph",
    slug: "no-grand-gesture-just-this",
    likes: 74
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
