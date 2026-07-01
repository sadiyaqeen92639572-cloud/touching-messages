#!/usr/bin/env node
// Rewrites 13 weak messages: removes AI clichés, restores human voice
// Usage: node fix-messages.js [--remote]

const { execSync } = require('child_process');

const UPDATES = [
  {
    id: "m1",
    title: "The Person You Were Before Me",
    body: "There is a version of you that existed before I came along, and I think about her sometimes. She had no idea. She was going about her life, completely unaware that I was out there, equally unaware, and that we were somehow on a collision course. I do not believe in much. But I believe in us. I love you. For no reason other than that it is the most true thing I know.",
    likes: 42
  },
  {
    id: "m4",
    title: "What You Do Without Knowing",
    body: "There are nights I come home carrying something heavy and invisible — something I could not name even if I tried. And then you look up from whatever you are doing and just see me. You do not ask what is wrong. You just make room. I do not know how you do that. I just know I cannot imagine doing life without it. Thank you for that. For all of it.",
    likes: 33
  },
  {
    id: "m5",
    title: "I Said Things I Did Not Mean",
    body: "I said things I did not mean, and I think you know that. But I also said them out loud, and now they live in the air between us, and I hate that. I am sorry. Not just for the argument — for the way I spoke. You deserved softer words. You always do. I will do better.",
    likes: 27
  },
  {
    id: "m7",
    title: "Goodnight From Someone Who Thinks About You Too Much",
    body: "I hope your day was kinder than it needed to be. And if it was not — I hope sleep finds you quickly tonight and takes you somewhere warm. You deserve rest. You deserve softness. Goodnight. I love you a little more than I did yesterday, which I did not think was possible.",
    likes: 44
  },
  {
    id: "m8",
    title: "Happy Birthday to the Person Who Knows My Worst Moods",
    body: "Happy birthday to the person who knows my coffee order, my worst moods, my silences — and still chooses to be here. Not every birthday gift can be wrapped. This one is just honesty: I am so glad you were born. The world needed you, and so did I. Enjoy every second of today. You have earned it.",
    likes: 29
  },
  {
    id: "m10",
    title: "What Long Distance Teaches You",
    body: "Long distance teaches you things about love that being together never could. Like how much one voice can carry. Like how a two-minute call before bed can be the best part of a week. Like how much I love you — more specifically, more fiercely — the longer we are apart. I miss you. I will keep missing you until I do not have to anymore.",
    likes: 19
  },
  {
    id: "m13",
    title: "Valentine from the Depths of My Soul",
    body: "On this day dedicated to love, I choose you a thousand times over. You are not just my Valentine — you are my every day. You are the warmth in February's cold, the flutter in my stomach after all these years, and the reason I still believe in beautiful things. Happy Valentine's Day, my forever love.",
    likes: 93
  },
  {
    id: "m17",
    title: "Do You Remember the First Conversation",
    body: "Do you remember the very first conversation we had? Neither of us knew then. But looking back, everything that happened since feels inevitable — like the story was always going this way, and we were just catching up to it. Happy anniversary. I love what we built. I love that we are still building.",
    likes: 67
  },
  {
    id: "m21",
    title: "Another Day Done",
    body: "Another day is behind us. Whatever it brought — the good and the slow and the frustrating — it brought me back here, to this moment, thinking of you. That part never gets old. Sleep well tonight. I will be here in the morning, still yours.",
    likes: 58
  },
  {
    id: "m22",
    title: "Happy Birthday — Without the Poetry",
    body: "Happy birthday. I just want to say this clearly, without trying to be poetic about it: you matter more to me than I usually find words for. Today is your day. Eat the cake. Let people fuss over you. Be a little selfish. You deserve all of it, and then some.",
    likes: 41
  },
  {
    id: "m29",
    title: "The Last Thing I Feel Before Sleep",
    body: "When I close my eyes at night, the last thing I feel is the particular relief of knowing you exist in the world. Not just in my world — in the world. That you are out there, somewhere, breathing. That is enough. That is more than enough. Goodnight. See you on the other side of sleep.",
    likes: 51
  },
  {
    id: "m44",
    title: "Anniversary Words for the Man I Choose Daily",
    body: "Every morning I wake up and I choose you again. Not out of habit, not out of obligation — out of something quieter and more certain than either of those. Happy anniversary. I would choose you again with full information — knowing the fights, the hard seasons, the nights neither of us had the right words. Still you. Always you.",
    likes: 71
  },
  {
    id: "m47",
    title: "More Than Sorry",
    body: "I know I owe you more than sorry. Sorry is the easy part. What is harder is sitting with the weight of knowing I let you down — and deciding to be the person who does not do that again. That is what I am actually offering you. Not just the word. The after.",
    likes: 44
  }
];

const remote = process.argv.includes('--remote');
const flag = remote ? '--remote' : '--local';

function esc(s) { return String(s).replace(/'/g, "''"); }

let ok = 0, fail = 0;
for (const u of UPDATES) {
  const sql = `UPDATE Message SET title='${esc(u.title)}', body='${esc(u.body)}', likes=${u.likes} WHERE id='${u.id}';`;
  try {
    execSync(`npx wrangler d1 execute touching-messages-db ${flag} --command "${sql.replace(/"/g, '\\"')}"`, { cwd: process.cwd(), stdio: 'pipe' });
    process.stdout.write(`✓ ${u.id}\n`);
    ok++;
  } catch (e) {
    console.error(`❌ ${u.id}: ${e.stderr?.toString().substring(0, 200) || e.message.substring(0, 200)}`);
    fail++;
  }
}
console.log(`\n${ok} updated, ${fail} failed`);
