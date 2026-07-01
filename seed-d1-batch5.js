#!/usr/bin/env node
// Batch 5: +4 Congratulations, +4 Get Well Soon, +4 Thinking of You
// Usage: node seed-d1-batch5.js [--remote]

const { execSync } = require('child_process');

const MESSAGES = [
  // ── CONGRATULATIONS ───────────────────────────────────────────────────────
  {
    id: "m82",
    title: "This One Was Years in the Making",
    body: "You did not just pass an exam or finish a program. You showed up, over and over, when it was hard and when you were tired and when you genuinely did not know if you could. And you got here. I am so proud of you — not just for what you achieved, but for who you had to become to achieve it. Congratulations. The hard part is over. The good part starts now.",
    relationshipTag: "Universal",
    occasionTag: "Congratulations",
    tone: "Emotional",
    keywords: ["graduation congratulations message", "congratulations on finishing school", "proud of you graduation message"],
    length: "Paragraph",
    slug: "this-one-was-years-in-making",
    likes: 84
  },
  {
    id: "m83",
    title: "She Got the Job She Deserved",
    body: "I knew before you did. I have watched you in that field — the way you think through problems, the way you handle pressure, the way you make everyone around you better without even trying. They did not do you a favor hiring you. They got lucky. Congratulations on the new role. Go show them what I already know.",
    relationshipTag: "For Her",
    occasionTag: "Congratulations",
    tone: "Sweet",
    keywords: ["congratulations new job message for her", "proud of girlfriend new job", "congratulations on promotion for her"],
    length: "Short SMS",
    slug: "she-got-the-job-she-deserved",
    likes: 61
  },
  {
    id: "m84",
    title: "All Those Nights Were Worth It",
    body: "I remember the nights you stayed up. The moments you said maybe this was not going to happen. The times you kept going anyway, on nothing but stubbornness and quiet faith. I watched all of it. And today I get to watch you arrive at something you built slowly, against the odds, with your own hands. I have never been more proud of anyone in my life. Congratulations.",
    relationshipTag: "For Him",
    occasionTag: "Congratulations",
    tone: "Passionate",
    keywords: ["congratulations message for him", "proud of boyfriend achievement", "congratulations after long struggle message"],
    length: "Paragraph",
    slug: "all-those-nights-were-worth-it",
    likes: 77
  },
  {
    id: "m85",
    title: "You Did the Thing",
    body: "Not every achievement makes headlines. Some of them are just you, doing the hard thing you said you would do, finishing what you started, showing up for yourself when no one would have blamed you for stopping. That counts. That matters. I am proud of you. Congratulations — now let yourself actually celebrate it.",
    relationshipTag: "Universal",
    occasionTag: "Congratulations",
    tone: "Sweet",
    keywords: ["congratulations message for partner", "small win congratulations message", "proud of you love message"],
    length: "Short SMS",
    slug: "you-did-the-thing",
    likes: 53
  },

  // ── GET WELL SOON ─────────────────────────────────────────────────────────
  {
    id: "m86",
    title: "I Hate Watching You Feel Terrible",
    body: "I know you hate being sick. I know you are impatient with your own body right now, and that you want to be better already, and that resting does not come naturally to you. But please rest anyway. Let yourself be slow for a few days. Your body is doing quiet work and it needs you to get out of its way. I love you. Feel better soon.",
    relationshipTag: "For Him",
    occasionTag: "Get Well Soon",
    tone: "Emotional",
    keywords: ["get well soon messages for him", "feel better message for boyfriend", "touching get well soon message for him"],
    length: "Paragraph",
    slug: "i-hate-watching-you-feel-terrible",
    likes: 38
  },
  {
    id: "m87",
    title: "Official Medical Advice From Someone Who Loves You",
    body: "Step one: drink water. Step two: stop pretending you are fine. Step three: rest without guilt, without your phone, without making a to-do list in your head. Step four: let people take care of you for once. You spend so much time taking care of everyone else. It is your turn. Get well soon. I need my favorite person back at full power.",
    relationshipTag: "Universal",
    occasionTag: "Get Well Soon",
    tone: "Sweet",
    keywords: ["funny get well soon message", "cute get well soon message for partner", "get well soon love message"],
    length: "Paragraph",
    slug: "official-medical-advice-from-someone-who-loves-you",
    likes: 119
  },
  {
    id: "m88",
    title: "Take All the Time You Need",
    body: "Healing is not a race. I know it feels like one — like you are falling behind, like everyone else is moving and you are standing still. You are not standing still. You are doing something harder than most people realize. Rest. Recover. Take the time your body is asking for. I will be here when you come back, and there is absolutely no rush.",
    relationshipTag: "Universal",
    occasionTag: "Get Well Soon",
    tone: "Comforting",
    keywords: ["comforting get well soon message", "get well soon long recovery message", "healing message for sick partner"],
    length: "Paragraph",
    slug: "take-all-the-time-you-need",
    likes: 66
  },
  {
    id: "m89",
    title: "Even Sick, You Are the First Person I Want to Talk To",
    body: "You sound terrible on the phone and you keep apologizing for it and that is the most you thing I have ever heard. Do not apologize. Just rest. I want to be there, and since I cannot, I am sending you this instead: hot tea thoughts, blanket energy, and the very specific love of someone who would absolutely give you their last throat lozenge. Feel better. I miss you healthy.",
    relationshipTag: "For Her",
    occasionTag: "Get Well Soon",
    tone: "Romantic",
    keywords: ["get well soon message for her", "feel better message for girlfriend", "long distance get well soon message"],
    length: "Paragraph",
    slug: "even-sick-first-person-want-to-talk-to",
    likes: 91
  },

  // ── THINKING OF YOU ───────────────────────────────────────────────────────
  {
    id: "m90",
    title: "You Show Up in My Day Without Warning",
    body: "I was in the middle of something completely unrelated to you when I heard a song, or saw a color, or remembered something stupid and funny we said to each other once — and suddenly there you were, taking up all the space in my head. It happens a lot. More than you probably know. You are thought of. Constantly. By someone who means it.",
    relationshipTag: "For Him",
    occasionTag: "Thinking of You",
    tone: "Emotional",
    keywords: ["thinking of you messages for him", "sweet thinking of you message for boyfriend", "i am thinking of you love message"],
    length: "Paragraph",
    slug: "you-show-up-in-my-day-without-warning",
    likes: 58
  },
  {
    id: "m91",
    title: "The Small Things That Belong to You Now",
    body: "Someone ordered your coffee drink at the place we always go. A song came on that we listened to once in the car. The light this afternoon looked exactly like it did the first time I realized I was in trouble over you. It is embarrassing, honestly, how many ordinary things belong to you now. But I would not give them back. Thinking of you, like always.",
    relationshipTag: "Universal",
    occasionTag: "Thinking of You",
    tone: "Romantic",
    keywords: ["romantic thinking of you message", "thinking of you love paragraphs", "sweet thinking of you message for partner"],
    length: "Paragraph",
    slug: "small-things-that-belong-to-you-now",
    likes: 103
  },
  {
    id: "m92",
    title: "You Interrupted My Afternoon",
    body: "You walked into my head with absolutely no warning — just sat down and made yourself comfortable. Typical. I hope wherever you are right now, something good is happening. I hope you are laughing about something. I hope someone is being kind to you. Thinking of you, my love. As usual.",
    relationshipTag: "For Her",
    occasionTag: "Thinking of You",
    tone: "Sweet",
    keywords: ["thinking of you message for her", "cute thinking of you text for girlfriend", "sweet midday message for her"],
    length: "Short SMS",
    slug: "you-interrupted-my-afternoon",
    likes: 76
  },
  {
    id: "m93",
    title: "Even When We Do Not Talk",
    body: "We have both been busy. The days blur and the calls get shorter and sometimes a whole week goes by and I realize I never said what I meant to say. So here it is: I think about you. Not just when something reminds me — always. You are background music in my head on the days we do not speak. Silence from me is never distance.",
    relationshipTag: "Universal",
    occasionTag: "Thinking of You",
    tone: "Emotional",
    keywords: ["thinking of you messages", "missing you thinking of you message", "long distance thinking of you message"],
    length: "Paragraph",
    slug: "even-when-we-do-not-talk",
    likes: 87
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
