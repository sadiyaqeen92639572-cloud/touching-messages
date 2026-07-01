import { prisma } from '../lib/prisma';
import fs from 'fs';
import path from 'path';

async function main() {
  const dbPath = path.join(process.cwd(), 'data', 'db_state.json');
  if (!fs.existsSync(dbPath)) {
    console.log('No db_state.json found, skipping migration.');
    return;
  }
  
  const state = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  
  if (state.messages && state.messages.length > 0) {
    for (const m of state.messages) {
      await prisma.message.upsert({
        where: { id: m.id },
        update: {},
        create: {
          id: m.id,
          title: m.title,
          body: m.body,
          relationshipTag: m.relationshipTag,
          occasionTag: m.occasionTag,
          tone: m.tone,
          keywords: m.keywords,
          length: m.length || null,
          slug: m.slug,
          likes: m.likes || 0,
        },
      });
    }
    console.log('Migrated messages');
  }

  if (state.stories && state.stories.length > 0) {
    for (const s of state.stories) {
      await prisma.story.upsert({
        where: { id: s.id },
        update: {},
        create: {
          id: s.id,
          title: s.title,
          nickname: s.nickname,
          theme: s.theme,
          coverImage: s.coverImage,
          content: s.content,
          status: s.status,
          likes: s.likes || 0,
          createdAt: s.createdAt ? new Date(s.createdAt) : new Date(),
        },
      });
    }
    console.log('Migrated stories');
  }

  if (state.favorites && state.favorites.length > 0) {
    for (const f of state.favorites) {
      await prisma.favorite.upsert({
        where: { id: f.id },
        update: {},
        create: {
          id: f.id,
          messageId: f.messageId,
          customizedText: f.customizedText,
          font: f.style.font,
          background: f.style.background,
          textColor: f.style.textColor,
          savedAt: f.savedAt ? new Date(f.savedAt) : new Date(),
          title: f.title,
          relationshipTag: f.relationshipTag,
          occasionTag: f.occasionTag,
        },
      });
    }
    console.log('Migrated favorites');
  }

  if (state.milestones && state.milestones.length > 0) {
    for (const m of state.milestones) {
      await prisma.milestone.upsert({
        where: { id: m.id },
        update: {},
        create: {
          id: m.id,
          title: m.title,
          date: m.date,
          description: m.description || null,
        },
      });
    }
    console.log('Migrated milestones');
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
