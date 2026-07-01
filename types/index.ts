export interface RomanticMessage {
  id: string;
  title: string;
  body: string;
  relationshipTag: "For Her" | "For Him" | "Universal";
  occasionTag:
    | "Good Morning"
    | "Good Night"
    | "Birthday"
    | "Just Because"
    | "Thinking of You"
    | "Congratulations"
    | "Get Well Soon"
    | "Long Distance"
    | "Apology"
    | "Reconciliation After an Argument"
    | "Valentine's Day"
    | "Anniversary"
    | "I Miss You"
    | "Instagram Captions";
  tone: "Romantic" | "Sweet" | "Emotional" | "Comforting" | "Passionate";
  keywords: string[];
  length?: "Short SMS" | "Paragraph" | "Long Letter";
  slug: string;
  likes: number;
}

export interface CustomStyle {
  font: "Elegant Serif" | "Minimal Sans" | "Retro Mono" | "Handwritten Script";
  background: "Cream Solid" | "Soft Blush Pink" | "Delicate Lavender" | "Rose Petals Backdrop" | "Fairy Lights Ambient" | "Starry Night Universe";
  textColor: "Charcoal" | "Crimson" | "Warm Gold" | "Deep Purple";
}

export interface SavedFavorite {
  id: string;
  messageId: string;
  customizedText: string;
  style: CustomStyle;
  savedAt: string;
  // Included fields to avoid join lookups on UI
  title: string;
  relationshipTag: string;
  occasionTag: string;
}

export interface RelationshipMilestone {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD format
  description?: string;
}

export interface StorySubmission {
  id: string;
  title: string;
  nickname: string;
  theme: string;
  coverImage: "Roses" | "Coffee Date" | "Starry Night";
  content: string;
  status: "Pending Review" | "Approved" | "Rejected";
  likes: number;
  createdAt: string;
}

export interface DatabaseState {
  messages: RomanticMessage[];
  favorites: SavedFavorite[];
  stories: StorySubmission[];
  milestones?: RelationshipMilestone[];
}
