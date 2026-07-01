CREATE TABLE IF NOT EXISTS "Message" (
  "id"              TEXT NOT NULL PRIMARY KEY,
  "title"           TEXT NOT NULL,
  "body"            TEXT NOT NULL,
  "relationshipTag" TEXT NOT NULL,
  "occasionTag"     TEXT NOT NULL,
  "tone"            TEXT NOT NULL,
  "keywords"        TEXT NOT NULL DEFAULT '[]',
  "length"          TEXT,
  "slug"            TEXT NOT NULL UNIQUE,
  "likes"           INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS "Favorite" (
  "id"              TEXT NOT NULL PRIMARY KEY,
  "messageId"       TEXT NOT NULL,
  "customizedText"  TEXT NOT NULL,
  "font"            TEXT NOT NULL,
  "background"      TEXT NOT NULL,
  "textColor"       TEXT NOT NULL,
  "savedAt"         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "title"           TEXT NOT NULL,
  "relationshipTag" TEXT NOT NULL,
  "occasionTag"     TEXT NOT NULL,
  FOREIGN KEY ("messageId") REFERENCES "Message"("id")
);

CREATE TABLE IF NOT EXISTS "Story" (
  "id"         TEXT NOT NULL PRIMARY KEY,
  "title"      TEXT NOT NULL,
  "nickname"   TEXT NOT NULL,
  "theme"      TEXT NOT NULL,
  "coverImage" TEXT NOT NULL,
  "content"    TEXT NOT NULL,
  "status"     TEXT NOT NULL DEFAULT 'Pending Review',
  "likes"      INTEGER NOT NULL DEFAULT 0,
  "createdAt"  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "StoryLike" (
  "id"        TEXT NOT NULL PRIMARY KEY,
  "storyId"   TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "Milestone" (
  "id"          TEXT NOT NULL PRIMARY KEY,
  "title"       TEXT NOT NULL,
  "date"        TEXT NOT NULL,
  "description" TEXT
);
