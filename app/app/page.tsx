"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Heart, 
  Search, 
  Sparkles, 
  Bookmark, 
  BookOpen, 
  Home, 
  Copy, 
  Check, 
  Compass, 
  RotateCcw,
  Plus,
  ArrowRight,
  User,
  ShieldCheck,
  ShieldAlert,
  CornerDownLeft,
  BookMarked,
  Volume2,
  VolumeX,
  Download,
  Share2,
  Calendar,
  Bell,
  Settings,
  Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RomanticMessage, CustomStyle, SavedFavorite, StorySubmission, RelationshipMilestone } from "@/types";

function AppContainer() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Selected tab state
  const [activeTab, setActiveTab] = useState<"home" | "browse" | "stories" | "saved" | "ai_maker" | "settings">("home");

  // App-wide data state
  const [messages, setMessages] = useState<RomanticMessage[]>([]);
  const [favorites, setFavorites] = useState<SavedFavorite[]>([]);
  const [stories, setStories] = useState<StorySubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Style Workshop state
  const [editorText, setEditorText] = useState("");
  const [editorTitle, setEditorTitle] = useState("Custom Love Note");
  const [editorRTag, setEditorRTag] = useState<string>("Universal");
  const [editorOTag, setEditorOTag] = useState<string>("Just Because");
  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);

  const [customStyle, setCustomStyle] = useState<CustomStyle>({
    font: "Elegant Serif",
    background: "Cream Solid",
    textColor: "Charcoal"
  });

  // Toasts notifications state
  const [toast, setToast] = useState<string | null>(null);

  // Search & Browse state
  const [searchTerm, setSearchTerm] = useState("");
  const [browseCategory, setBrowseCategory] = useState<string>("All");
  const [browseTone, setBrowseTone] = useState<string>("All");

  // Story Sanctuary state
  const [adminMode, setAdminMode] = useState(false);
  const [storyTitle, setStoryTitle] = useState("");
  const [storyNickname, setStoryNickname] = useState("");
  const [storyTheme, setStoryTheme] = useState("");
  const [storyCover, setStoryCover] = useState<"Roses" | "Coffee Date" | "Starry Night">("Roses");
  const [storyContent, setStoryContent] = useState("");
  const [submittingStory, setSubmittingStory] = useState(false);

  // AI Maker state
  const [aiRelationship, setAiRelationship] = useState<"For Her" | "For Him" | "Universal">("Universal");
  const [aiTone, setAiTone] = useState<"Romantic" | "Sweet" | "Emotional" | "Comforting" | "Passionate">("Romantic");
  const [aiOccasion, setAiOccasion] = useState<string>("Just Because");
  const [aiLength, setAiLength] = useState<"Short SMS" | "Paragraph" | "Long Letter">("Paragraph");
  const [aiContext, setAiContext] = useState("");
  const [aiGenerating, setAiGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState("");
  const [streamProgress, setStreamProgress] = useState("");

  // Simulated Time in Status Bar
  const [timeStr, setTimeStr] = useState("12:00");

  useEffect(() => {
    // Current local clock simulation
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      setTimeStr(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Milestone Tracker state
  const [milestones, setMilestones] = useState<RelationshipMilestone[]>([]);
  const [newMilestoneTitle, setNewMilestoneTitle] = useState("");
  const [newMilestoneDate, setNewMilestoneDate] = useState("");
  const [newMilestoneDesc, setNewMilestoneDesc] = useState("");
  const [isAddingMilestone, setIsAddingMilestone] = useState(false);

  // Push Notifications state
  const [pushEnabled, setPushEnabled] = useState(false);
  const [pushToggleExplicit, setPushToggleExplicit] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("push_toggle_explicit") === "true";
    }
    return false;
  });
  const [shareCount, setShareCount] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const savedCount = localStorage.getItem("share_count");
      return savedCount ? parseInt(savedCount, 10) : 0;
    }
    return 0;
  });

  const incrementShareCount = () => {
    setShareCount(prev => {
      const next = prev + 1;
      if (typeof window !== "undefined") {
        localStorage.setItem("share_count", next.toString());
      }
      return next;
    });
  };

  const handleToggleExplicitPush = (enabled: boolean) => {
    setPushToggleExplicit(enabled);
    if (typeof window !== "undefined") {
      localStorage.setItem("push_toggle_explicit", enabled.toString());
    }
    if (enabled) {
      handleToggleNotifications();
    } else {
      showToast("🔔 Push notifications explicitly disabled.");
    }
  };

  // Speech Synthesis state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  // Message of the Day state
  const [motd, setMotd] = useState<RomanticMessage | null>(null);

  // Show Toast helper
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Fetch initial data securely within a clean, unmount-safe lifecycle hook
  useEffect(() => {
    let active = true;
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [msgRes, favRes, storyRes, mileRes] = await Promise.all([
          fetch("/api/messages"),
          fetch("/api/favorites"),
          fetch("/api/stories"),
          fetch("/api/milestones")
        ]);

        if (!active) return;

        if (msgRes.ok) {
          const msgsData = await msgRes.json();
          setMessages(msgsData);
          
          // Setup initial editor text from first message if none is preloaded
          setEditorText(prevText => {
            if (msgsData.length > 0 && !prevText) {
              setEditorTitle(msgsData[0].title);
              setEditorRTag(msgsData[0].relationshipTag);
              setEditorOTag(msgsData[0].occasionTag);
              setActiveMessageId(msgsData[0].id);
              return msgsData[0].body;
            }
            return prevText;
          });

          // Compute daily Message of the Day (seeded by day of the year)
          if (msgsData.length > 0) {
            const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
            const index = dayOfYear % msgsData.length;
            setMotd(msgsData[index]);
          }
        }
        if (favRes.ok) setFavorites(await favRes.json());
        if (storyRes.ok) setStories(await storyRes.json());
        if (mileRes.ok) setMilestones(await mileRes.json());

        // Check native notification status
        if (typeof window !== "undefined" && "Notification" in window) {
          setPushEnabled(Notification.permission === "granted");
        }
      } catch (e) {
        console.error("Failed to load initial data", e);
      } finally {
        if (active) setIsLoading(false);
      }
    };
    loadData();
    return () => {
      active = false;
    };
  }, []);

  // Handle deep-linking search query preloads
  useEffect(() => {
    const preloadText = searchParams.get("preloadText");
    const preloadTitle = searchParams.get("preloadTitle");
    const preloadRTag = searchParams.get("preloadRTag");
    const preloadOTag = searchParams.get("preloadOTag");
    const preloadMId = searchParams.get("preloadMId");

    if (preloadText) {
      const timer = setTimeout(() => {
        setEditorText(preloadText);
        setEditorTitle(preloadTitle || "Customized Love Note");
        setEditorRTag(preloadRTag || "Universal");
        setEditorOTag(preloadOTag || "Just Because");
        setActiveMessageId(preloadMId || null);
        setActiveTab("home");
        showToast("✨ Preloaded message into Style Workshop!");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  // Audio Playback
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayInAppAudio = (id: string, text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      showToast("Audio playback is not supported on this browser.");
      return;
    }

    if (playingAudioId === id) {
      window.speechSynthesis.cancel();
      setPlayingAudioId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    const voices = window.speechSynthesis.getVoices();
    const sweetVoice = voices.find(v => v.name.includes("Google US English") || v.name.includes("Samantha") || v.name.includes("Natural"));
    if (sweetVoice) {
      utterance.voice = sweetVoice;
    }

    utterance.onend = () => setPlayingAudioId(null);
    utterance.onerror = () => setPlayingAudioId(null);

    setPlayingAudioId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Push Notifications Toggle Simulation
  const handleToggleNotifications = async () => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      showToast("Notifications not supported on this browser.");
      return;
    }

    if (pushEnabled) {
      setPushEnabled(false);
      showToast("Daily message notifications disabled.");
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setPushEnabled(true);
        showToast("Daily notifications successfully enabled! 🔔");
        new Notification("Touching Texts", {
          body: "Welcome to your daily dose of love and devotion. Your first message of the day will arrive tomorrow!",
          icon: "/favicon.ico"
        });
      } else {
        setPushEnabled(false);
        showToast("Notification permission denied.");
      }
    } catch (err) {
      setPushEnabled(false);
      showToast("Could not enable notifications.");
    }
  };

  // Milestone Save & Remove
  const handleSaveMilestone = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMilestoneTitle || !newMilestoneDate) {
      showToast("Please enter a title and date.");
      return;
    }

    try {
      const res = await fetch("/api/milestones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newMilestoneTitle,
          date: newMilestoneDate,
          description: newMilestoneDesc
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMilestones(prev => [...prev, data.milestone]);
        setNewMilestoneTitle("");
        setNewMilestoneDate("");
        setNewMilestoneDesc("");
        setIsAddingMilestone(false);
        showToast("Milestone added successfully! 🎉");
      } else {
        showToast("Failed to add milestone.");
      }
    } catch (err) {
      showToast("Error adding milestone.");
    }
  };

  const handleDeleteMilestone = async (id: string) => {
    try {
      const res = await fetch(`/api/milestones/${id}`, {
        method: "DELETE"
      });

      if (res.ok) {
        setMilestones(prev => prev.filter(m => m.id !== id));
        showToast("Milestone removed.");
      } else {
        showToast("Failed to remove milestone.");
      }
    } catch (err) {
      showToast("Error deleting milestone.");
    }
  };

  // Image Export with HTML5 Canvas (Instagram story & square formats)
  const handleExportImage = (format: "square" | "story") => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 1080;
    const height = format === "square" ? 1080 : 1920;
    canvas.width = width;
    canvas.height = height;

    // Design-level configuration mapping
    let bgColor = "#FAF7F2";
    let textColor = "#2D2D2D";
    let bgDecoration: "roses" | "stars" | "none" = "none";

    switch (customStyle.background) {
      case "Cream Solid":
        bgColor = "#FAF7F2";
        break;
      case "Soft Blush Pink":
        bgColor = "#FFF0F2";
        break;
      case "Delicate Lavender":
        bgColor = "#F4F0FF";
        break;
      case "Rose Petals Backdrop":
        bgColor = "#FFF5F6";
        bgDecoration = "roses";
        break;
      case "Fairy Lights Ambient":
        bgColor = "#FFFDF0";
        break;
      case "Starry Night Universe":
        bgColor = "#1A1A2E";
        textColor = "#FAF7F2";
        bgDecoration = "stars";
        break;
    }

    switch (customStyle.textColor) {
      case "Charcoal":
        textColor = customStyle.background === "Starry Night Universe" ? "#FAF7F2" : "#2D2D2D";
        break;
      case "Crimson":
        textColor = "#8C3B3B";
        break;
      case "Warm Gold":
        textColor = "#D4A373";
        break;
      case "Deep Purple":
        textColor = "#5D3E8E";
        break;
    }

    // Paint Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    // Decorate background
    if (bgDecoration === "roses") {
      ctx.fillStyle = "rgba(140, 59, 59, 0.05)";
      ctx.font = "80px sans-serif";
      ctx.fillText("🌸", 80, 150);
      ctx.fillText("🌸", width - 160, height - 120);
      ctx.fillText("🌸", width - 180, 180);
      ctx.fillText("🌸", 120, height - 180);
    } else if (bgDecoration === "stars") {
      ctx.fillStyle = "rgba(254, 240, 138, 0.2)";
      ctx.font = "60px sans-serif";
      ctx.fillText("✨", 100, 150);
      ctx.fillText("✨", width - 180, height - 150);
      ctx.fillText("✨", width - 150, 200);
      ctx.fillText("✨", 150, height - 200);
    }

    // Outer framing border
    ctx.strokeStyle = customStyle.background === "Starry Night Universe" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
    ctx.lineWidth = 15;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Font Selection mapping
    let fontName = "Georgia";
    if (customStyle.font === "Minimal Sans") {
      fontName = "Helvetica, Arial, sans-serif";
    } else if (customStyle.font === "Retro Mono") {
      fontName = "'Courier New', Courier, monospace";
    } else if (customStyle.font === "Handwritten Script") {
      fontName = "'Brush Script MT', cursive, Georgia";
    }

    // Header branding text
    ctx.fillStyle = textColor;
    ctx.font = `600 24px ${fontName}`;
    ctx.letterSpacing = "6px";
    ctx.textAlign = "center";
    ctx.fillText("HEARTFELT ATELIER", width / 2, 120);

    ctx.font = `italic 18px ${fontName}`;
    ctx.fillText(`${editorOTag} • ${editorRTag}`, width / 2, 160);

    // Divider line
    ctx.beginPath();
    ctx.moveTo(width / 2 - 100, 200);
    ctx.lineTo(width / 2 + 100, 200);
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.2;
    ctx.stroke();
    ctx.globalAlpha = 1.0;

    // Body wrapped text rendering
    ctx.fillStyle = textColor;
    const bodyFontSize = format === "square" ? 38 : 44;
    ctx.font = `italic ${bodyFontSize}px ${fontName}`;
    ctx.textAlign = "center";

    const textToDraw = `“${editorText || "Type your heartfelt messages here..."}”`;
    const words = textToDraw.split(" ");
    let line = "";
    const lines = [];
    const maxWidth = width - 240;
    const lineHeight = bodyFontSize * 1.5;

    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + " ";
      let metrics = ctx.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        lines.push(line);
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    let startY = (height / 2) - ((lines.length - 1) * lineHeight / 2);
    if (startY < 280) startY = 280;

    for (let k = 0; k < lines.length; k++) {
      ctx.fillText(lines[k].trim(), width / 2, startY + (k * lineHeight));
    }

    // Card footer brand
    ctx.font = `bold 24px ${fontName}`;
    ctx.fillText(editorTitle, width / 2, height - 150);

    ctx.font = `18px ${fontName}`;
    ctx.globalAlpha = 0.6;
    ctx.fillText("✨ Created at Touching Texts", width / 2, height - 110);
    ctx.globalAlpha = 1.0;

    try {
      const dataUrl = canvas.toDataURL("image/png");
      if (navigator.share && navigator.canShare && format === "story") {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const file = new File([blob], "heartfelt_love_note.png", { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            try {
              await navigator.share({
                files: [file],
                title: editorTitle,
                text: "Crafted with love at Touching Texts"
              });
              showToast("Shared successfully! 🌸");
              return;
            } catch (err) {
              console.log("Web Share cancelled/failed, falling back to download.");
            }
          }
          triggerDownload(dataUrl);
        });
      } else {
        triggerDownload(dataUrl);
      }
    } catch (err) {
      showToast("Could not generate image.");
    }
  };

  const triggerDownload = (dataUrl: string) => {
    const link = document.createElement("a");
    link.download = `${editorTitle.toLowerCase().replace(/[^a-z0-9]/g, "_")}_note.png`;
    link.href = dataUrl;
    link.click();
    showToast("Downloaded shareable image! 🖼️");
  };

  // Handle Likes for Messages
  const handleLikeMessage = async (id: string) => {
    // Optimistic Update
    setMessages(prev => prev.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m));
    showToast("❤️ Love message liked!");

    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "like", id })
      });
    } catch (e) {
      console.error("Failed to sync like");
    }
  };

  // Handle Saving Customized Message to Favorites database
  const handleSaveToFavorites = async () => {
    if (!editorText.trim()) return;

    try {
      const payload = {
        messageId: activeMessageId || "custom_note_" + Date.now(),
        customizedText: editorText,
        style: customStyle,
        title: editorTitle,
        relationshipTag: editorRTag,
        occasionTag: editorOTag
      };

      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        setFavorites(prev => {
          // Replace or insert
          const idx = prev.findIndex(f => f.id === data.favorite.id);
          if (idx !== -1) {
            const updated = [...prev];
            updated[idx] = data.favorite;
            return updated;
          }
          return [...prev, data.favorite];
        });
        showToast("💾 Saved custom note to Favorites!");
      }
    } catch (e) {
      showToast("❌ Failed to save favorite");
    }
  };

  // Remove Favorite from DB
  const handleRemoveFavorite = async (id: string) => {
    // Optimistic
    setFavorites(prev => prev.filter(f => f.id !== id));
    showToast("📋 Removed from saved list");

    try {
      await fetch(`/api/favorites/${id}`, { method: "DELETE" });
    } catch (e) {
      console.error("Failed to delete favorite");
    }
  };

  // Submit Story to Sanctuary
  const handleSubmitStory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyTitle.trim() || !storyNickname.trim() || !storyContent.trim()) {
      showToast("⚠️ Please fill in all fields");
      return;
    }

    setSubmittingStory(true);
    try {
      const res = await fetch("/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: storyTitle,
          nickname: storyNickname,
          theme: storyTheme || "General Romance",
          coverImage: storyCover,
          content: storyContent
        })
      });

      if (res.ok) {
        const data = await res.json();
        setStories(prev => [...prev, data.story]);
        showToast("🌸 Story submitted for moderation!");
        // Clear form
        setStoryTitle("");
        setStoryNickname("");
        setStoryTheme("");
        setStoryContent("");
      }
    } catch (e) {
      showToast("❌ Failed to submit story");
    } finally {
      setSubmittingStory(false);
    }
  };

  // Liking Stories
  const handleLikeStory = async (id: string) => {
    setStories(prev => prev.map(s => s.id === id ? { ...s, likes: s.likes + 1 } : s));
    showToast("❤️ Shared love on story!");

    try {
      await fetch(`/app/api/stories/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "like" })
      });
    } catch (e) {
      console.error("Failed to sync like story");
    }
  };

  // Story Moderation (Approved or Rejected)
  const handleModerateStory = async (id: string, status: "Approved" | "Rejected") => {
    try {
      const res = await fetch(`/api/stories/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "status", status })
      });

      if (res.ok) {
        setStories(prev => {
          if (status === "Rejected") {
            return prev.filter(s => s.id !== id);
          }
          return prev.map(s => s.id === id ? { ...s, status } : s);
        });
        showToast(status === "Approved" ? "❤️ Story approved successfully!" : "📋 Story rejected & removed!");
      }
    } catch (e) {
      showToast("❌ Moderation action failed");
    }
  };

  // AI Maker Generator Handler
  const handleAIGenerate = async () => {
    setAiGenerating(true);
    setGeneratedText("");
    setStreamProgress("");

    // Simulate standard organic typed-reveal progress (progressive typing feel!)
    try {
      const res = await fetch("/api/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          relationship: aiRelationship,
          tone: aiTone,
          occasion: aiOccasion,
          length: aiLength,
          context: aiContext
        })
      });

      if (res.ok) {
        const data = await res.json();
        const fullText = data.text;
        
        // Progressive text reveal simulation
        let i = 0;
        const interval = setInterval(() => {
          if (i < fullText.length) {
            setStreamProgress(prev => prev + fullText.charAt(i));
            i++;
          } else {
            clearInterval(interval);
            setGeneratedText(fullText);
            setAiGenerating(false);
            showToast("✨ Unique romantic note generated!");
          }
        }, 15);
      } else {
        const data = await res.json();
        showToast(`❌ error: ${data.error || "Generation failed"}`);
        setAiGenerating(false);
      }
    } catch (e) {
      showToast("❌ AI writer server connection lost");
      setAiGenerating(false);
    }
  };

  // Push AI Output to editor
  const handlePushToEditor = () => {
    if (!generatedText) return;
    setEditorText(generatedText);
    setEditorTitle(`AI ${aiTone} Note`);
    setEditorRTag(aiRelationship);
    setEditorOTag(aiOccasion);
    setActiveMessageId(null); // Custom unique
    setActiveTab("home");
    showToast("✨ Custom message pushed to Style Workshop!");
  };

  // Smart Copy Customized Text
  const [copiedNoteId, setCopiedNoteId] = useState<string | null>(null);

  const handleSmartCopy = (text: string) => {
    const watermark = "\n\n✨ Customized with Touching Texts";
    navigator.clipboard.writeText(text + watermark);
    incrementShareCount();
    showToast("📋 Customized message copied!");
  };

  // Style CSS generators
  const getStyleClass = (style: CustomStyle) => {
    let fontClass = "font-serif";
    if (style.font === "Minimal Sans") fontClass = "font-sans font-medium tracking-tight";
    if (style.font === "Retro Mono") fontClass = "font-mono text-sm";
    if (style.font === "Handwritten Script") fontClass = "font-script text-2xl leading-relaxed";

    let bgClass = "bg-cream-solid";
    if (style.background === "Soft Blush Pink") bgClass = "bg-soft-blush-pink";
    if (style.background === "Delicate Lavender") bgClass = "bg-delicate-lavender";
    if (style.background === "Rose Petals Backdrop") bgClass = "bg-rose-petals";
    if (style.background === "Fairy Lights Ambient") bgClass = "bg-fairy-lights text-amber-100";
    if (style.background === "Starry Night Universe") bgClass = "bg-starry-night text-blue-100";

    let textClass = "text-[#2D2D2D]";
    if (style.textColor === "Crimson") textClass = "text-[#8C3B3B]";
    if (style.textColor === "Warm Gold") textClass = "text-[#D4A373]";
    if (style.textColor === "Deep Purple") textClass = "text-[#5B21B6]";

    // Override if starry night or fairy lights are active
    if (style.background === "Fairy Lights Ambient") {
      if (style.textColor === "Charcoal") textClass = "text-amber-50";
    }
    if (style.background === "Starry Night Universe") {
      if (style.textColor === "Charcoal") textClass = "text-blue-50";
    }

    return `${fontClass} ${bgClass} ${textClass}`;
  };

  // Browse filtering
  const filteredMessages = messages.filter(msg => {
    const matchSearch = msg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        msg.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        msg.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchCategory = browseCategory === "All" || msg.occasionTag === browseCategory;
    const matchTone = browseTone === "All" || msg.tone === browseTone;

    return matchSearch && matchCategory && matchTone;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2D2D] font-sans flex flex-col md:flex-row relative overflow-hidden">
      
      {/* LEFT PANEL: EDITORIAL DOCUMENTATION / DESKTOP SPLIT VIEW */}
      <div className="hidden md:flex md:w-[48%] lg:w-[52%] p-10 lg:p-12 flex-col border-r border-[#E5E1DA] overflow-y-auto h-screen z-10 bg-[#FAF7F2]">
        <nav className="mb-6 flex gap-2 text-xs font-medium uppercase tracking-widest text-[#D4A373]">
          <Link href="/" className="hover:text-[#8C3B3B] transition-colors">Home</Link>
          <span className="opacity-30">/</span>
          <span className="text-[#8C3B3B]">Atelier Workspace</span>
        </nav>
        
        <h1 className="text-4xl lg:text-5xl font-serif leading-[1.1] text-[#2D2D2D] mb-5">
          Touching Texts <br />
          <span className="text-[#8C3B3B] italic">Interactive Love Studio</span>
        </h1>
        
        <p className="text-sm lg:text-base text-[#2D2D2D]/70 leading-relaxed mb-6 max-w-xl">
          Melt your partner&apos;s heart with customized, elegant layouts, live typography palettes, and server-side Gemini 3.5 AI generation. Save favorites locally and submit memories to our Sanctuary.
        </p>

        <div className="flex gap-4 mb-8 shrink-0">
          <Link 
            href="/heart-touching-love-messages" 
            className="bg-[#8C3B3B] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:bg-[#722F2F] transition-all shadow-md text-center"
          >
            SEO Pillar Hub
          </Link>
          <button 
            onClick={() => {
              setActiveTab("ai_maker");
              showToast("✨ Switched to AI Writer!");
            }}
            className="border border-[#D4A373] text-[#D4A373] px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:bg-[#D4A373]/5 transition-all"
          >
            Launch AI Maker
          </button>
        </div>

        {/* Feature stats / TOC summary grid from the Natural Tones theme */}
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="border border-[#E5E1DA] p-5 rounded-2xl bg-white/50">
            <h3 className="font-serif text-[#8C3B3B] text-sm font-semibold mb-2">Workspace Modules</h3>
            <ul className="text-[11px] space-y-1.5 text-gray-500 font-mono">
              <li className="flex items-center gap-1">• Editor Style Workshop</li>
              <li className="flex items-center gap-1">• Live Browse Sanctuary</li>
              <li className="flex items-center gap-1">• Public Story Submissions</li>
              <li className="flex items-center gap-1">• Saved Favorites Chamber</li>
              <li className="flex items-center gap-1">• Gemini Generative Writer</li>
            </ul>
          </div>
          
          <div className="border border-[#E5E1DA] p-5 rounded-2xl bg-white/50 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-[#8C3B3B] text-sm font-semibold mb-1">Poetic Snippet</h3>
              <p className="text-[10px] text-gray-500 italic leading-relaxed">
                &ldquo;You are my home, my quiet harbor. To love you is to know the deepest, truest melody of existence.&rdquo;
              </p>
            </div>
            <p className="text-[9px] text-gray-400 mt-2 uppercase tracking-tighter font-mono font-bold">
              Featured in Schema Markup
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: IMMERSIVE DEVICE CENTER (bg-[#F2EDE4] / radial dots) */}
      <div className="flex-1 bg-white md:bg-[#F2EDE4] flex justify-center items-center relative h-screen overflow-hidden">
        {/* Radial dot patterns in background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none hidden md:block" 
          style={{ 
            backgroundImage: "radial-gradient(#8C3B3B 1.2px, transparent 1.2px)", 
            backgroundSize: "24px 24px" 
          }} 
        />

        {/* SMARTPHONE DEVICE FRAMER CONTAINER */}
        <div className="relative z-10 w-full md:max-w-[390px] h-screen md:h-[780px] bg-[#2D2D2D] md:rounded-[50px] shadow-2xl overflow-hidden flex flex-col md:border-[10px] md:border-[#2D2D2D] shadow-[0_50px_100px_-20px_rgba(45,45,45,0.4)]">
          
          {/* Notch container (Visible only on desktop frame mockup) */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2D2D2D] rounded-b-2xl z-50">
            {/* Simulated speaker */}
            <div className="w-12 h-1 bg-[#1a1a1a] mx-auto mt-1 rounded-full" />
            {/* Simulated camera lens */}
            <div className="absolute right-6 top-0.5 w-2 h-2 bg-[#0d0d0d] rounded-full border border-[#1a1a1a]" />
          </div>

          {/* Real-time Simulated Status Bar */}
          <div className="bg-[#FAF7F2] px-6 pt-3 pb-2 flex justify-between items-center text-xs text-gray-600 font-mono font-semibold select-none shrink-0 border-b border-[#E5E1DA]/40">
            <div className="flex items-center gap-2">
              <span>{timeStr}</span>
              <button 
                onClick={() => setActiveTab(activeTab === "settings" ? "home" : "settings")}
                className="hover:text-[#8C3B3B] transition-colors p-1 rounded-full hover:bg-gray-100/80 flex items-center justify-center"
                title="Atelier Settings"
              >
                <Settings className={`w-3.5 h-3.5 ${activeTab === "settings" ? "text-[#8C3B3B] rotate-45" : "text-gray-400"} transition-transform`} />
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-gray-400">LTE</span>
              <div className="w-5 h-2.5 border border-gray-600 rounded-xs p-0.5 flex items-center">
                <div className="h-full w-[80%] bg-gray-700 rounded-3xs" />
              </div>
            </div>
          </div>

          {/* Dynamic Toasts System inside the mockup */}
          <AnimatePresence>
            {toast && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="absolute top-12 left-4 right-4 bg-[#8C3B3B] text-[#FAF7F2] text-xs font-mono font-bold tracking-wide px-4 py-3 rounded-xl shadow-lg z-50 text-center flex items-center justify-center gap-2"
              >
                <Heart className="w-4.5 h-4.5 fill-white text-[#FAF7F2] animate-pulse" />
                <span>{toast}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CORE APPLICATION FRAME VIEWPORTS */}
          <div className="flex-1 bg-[#FAF7F2] overflow-y-auto px-4 pb-20 pt-2">
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 bg-[#FAF7F2]/90 flex flex-col items-center justify-center z-40">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#8C3B3B] mb-2"></div>
                <p className="font-serif italic text-[#8C3B3B]">Unfolding romantic papers...</p>
              </div>
            )}

          {/* TAB 1 — HOME & MESSAGE STYLE WORKSHOP */}
          {activeTab === "home" && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="space-y-4"
            >
              {/* Message of the Day (MOTD) Section */}
              {motd && (
                <div className="bg-[#8C3B3B]/5 border border-[#8C3B3B]/10 rounded-2xl p-4 md:p-5 space-y-3 relative overflow-hidden">
                  <div className="absolute -top-3 -right-3 text-[#8C3B3B]/5 font-serif text-6xl">🌸</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#D4A373] animate-pulse" />
                      <h3 className="font-serif font-bold text-[#8C3B3B] text-sm md:text-base">
                        Romantic Message of the Day
                      </h3>
                    </div>
                    {/* Push Notification Toggle */}
                    <button
                      onClick={handleToggleNotifications}
                      className={`flex items-center gap-1.5 text-[10px] font-mono font-bold py-1 px-2.5 rounded-full border transition-all ${
                        pushEnabled
                          ? "bg-[#8C3B3B] text-white border-[#8C3B3B]"
                          : "bg-white text-gray-600 border-[#E5E1DA] hover:border-[#8C3B3B]"
                      }`}
                      title="Request daily push notifications"
                    >
                      <Bell className={`w-3 h-3 ${pushEnabled ? "animate-bounce" : ""}`} />
                      <span>{pushEnabled ? "Daily Alerts On" : "Notify Me Daily"}</span>
                    </button>
                  </div>

                  <p className="font-serif italic text-sm leading-relaxed text-gray-700 bg-white/60 p-3 rounded-xl border border-[#E5E1DA]/40">
                    &ldquo;{motd.body}&rdquo;
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#D4A373] font-semibold">{motd.title}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(motd.body);
                          incrementShareCount();
                          showToast("📋 Copied message of the day!");
                        }}
                        className="bg-white border border-[#E5E1DA] text-gray-600 hover:text-[#8C3B3B] hover:border-[#8C3B3B] px-2 py-1 rounded-md transition-colors flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </button>
                      <button
                        onClick={() => handlePlayInAppAudio(motd.id, motd.body)}
                        className={`px-2 py-1 rounded-md border transition-colors flex items-center gap-1 ${
                          playingAudioId === motd.id
                            ? "bg-[#8C3B3B] text-white border-[#8C3B3B]"
                            : "bg-white border-[#E5E1DA] text-gray-600 hover:border-[#8C3B3B]"
                        }`}
                      >
                        {playingAudioId === motd.id ? (
                          <>
                            <VolumeX className="w-3 h-3" />
                            <span>Stop</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3 h-3" />
                            <span>Listen</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setEditorText(motd.body);
                          setEditorTitle(motd.title);
                          setEditorRTag(motd.relationshipTag);
                          setEditorOTag(motd.occasionTag);
                          setActiveMessageId(motd.id);
                          showToast("📋 Loaded MOTD into workshop!");
                        }}
                        className="bg-white border border-[#E5E1DA] text-[#8C3B3B] hover:bg-[#8C3B3B]/5 px-2 py-1 rounded-md transition-colors"
                      >
                        Customize
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Dynamic Retention Suggestions Section */}
              {messages.length > 0 && (
                <div className="bg-[#FAF7F2] border border-[#E5E1DA] rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#D4A373]" />
                      <h4 className="font-serif font-bold text-[#8C3B3B] text-xs uppercase tracking-wider">
                        {favorites.length > 0 ? "Tailored For You" : "Recommended Gems"}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">Based on Activity</span>
                  </div>
                  
                  {(() => {
                    let recommended: RomanticMessage[] = [];
                    if (favorites.length > 0) {
                      const favRelationships = favorites.map(f => f.relationshipTag);
                      const favoriteIds = new Set(favorites.map(f => f.messageId));
                      recommended = messages.filter(m => 
                        !favoriteIds.has(m.id) && 
                        favRelationships.includes(m.relationshipTag)
                      );
                    }
                    
                    if (recommended.length < 2) {
                      const favoriteIds = new Set(favorites.map(f => f.messageId));
                      const remaining = messages.filter(m => !favoriteIds.has(m.id));
                      const sorted = [...remaining].sort((a, b) => b.likes - a.likes);
                      recommended = [...recommended, ...sorted].slice(0, 2);
                    } else {
                      recommended = recommended.slice(0, 2);
                    }

                    return (
                      <div className="grid grid-cols-1 gap-2.5">
                        {recommended.map(m => (
                          <div key={m.id} className="bg-white border border-[#E5E1DA]/60 p-3 rounded-xl flex items-start justify-between gap-3 hover:border-[#8C3B3B]/40 transition-colors">
                            <div className="space-y-1 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="bg-[#FAF7F2] text-[#8C3B3B] text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-full border border-[#E5E1DA]">
                                  {m.relationshipTag}
                                </span>
                                <span className="text-[10px] font-mono text-gray-400 font-medium">
                                  {m.title}
                                </span>
                              </div>
                              <p className="font-serif italic text-xs text-gray-700 line-clamp-2">
                                &ldquo;{m.body}&rdquo;
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setEditorText(m.body);
                                setEditorTitle(m.title);
                                setEditorRTag(m.relationshipTag);
                                setEditorOTag(m.occasionTag);
                                setActiveMessageId(m.id);
                                showToast("✨ Suggestion loaded into workshop!");
                              }}
                              className="bg-[#8C3B3B]/5 hover:bg-[#8C3B3B] hover:text-white border border-[#8C3B3B]/20 text-[#8C3B3B] text-[10px] font-mono font-bold px-2 py-1.5 rounded-lg transition-all shrink-0 self-center animate-pulse"
                            >
                              Load
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}

              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#8C3B3B]">
                  Style Workshop
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Design and preview your custom romantic note
                </p>
              </div>

              {/* Dynamic Live Card Editor Canvas */}
              <div className={`rounded-3xl p-6 shadow-sm border border-[#E5E1DA] min-h-[220px] flex flex-col justify-between transition-all duration-300 relative ${getStyleClass(customStyle)}`}>
                {/* Visual backdrop ornaments for special backgrounds */}
                {customStyle.background === "Rose Petals Backdrop" && (
                  <div className="absolute top-2 right-2 text-[#8C3B3B]/10 font-serif text-3xl">🌸</div>
                )}
                {customStyle.background === "Starry Night Universe" && (
                  <div className="absolute top-3 right-3 text-yellow-200/20 font-serif text-lg">✨</div>
                )}

                <div className="relative z-10 flex justify-between items-start border-b border-black/5 pb-2 mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest opacity-80">
                    {editorOTag} • {editorRTag}
                  </span>
                  <span className="text-[10px] font-mono opacity-60">Atelier Canvas</span>
                </div>

                {/* Direct live textarea editor on the card */}
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  className="w-full bg-transparent border-none outline-none resize-none font-inherit text-inherit flex-1 min-h-[110px] italic leading-relaxed focus:ring-0"
                  placeholder="Type your heartfelt messages here directly on the card to watch it update in real time..."
                />

                <div className="relative z-10 flex justify-between items-center pt-3 border-t border-black/5 mt-3 text-[10px] font-mono opacity-80">
                  <span className="truncate max-w-[150px] font-bold">{editorTitle}</span>
                  <span>✨ Crafted with Devotion</span>
                </div>
              </div>

              {/* Visual custom workshop selectors */}
              <div className="bg-white border border-[#E5E1DA] rounded-2xl p-4 space-y-4 shadow-2xs">
                
                {/* 1. Typography Selection */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4A373]">
                    1. Typography Selector
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {[
                      { name: "Elegant Serif", label: "Serif Poetry" },
                      { name: "Minimal Sans", label: "Sans Modern" },
                      { name: "Retro Mono", label: "Mono SMS" },
                      { name: "Handwritten Script", label: "Cursive Script" }
                    ].map((f) => (
                      <button
                        key={f.name}
                        onClick={() => setCustomStyle(prev => ({ ...prev, font: f.name as any }))}
                        className={`py-2 px-3 rounded-xl border text-center transition-all ${
                          customStyle.font === f.name 
                            ? "border-[#8C3B3B] bg-[#8C3B3B]/5 text-[#8C3B3B] font-bold" 
                            : "border-gray-200 text-gray-600 hover:border-[#8C3B3B]"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Color Text Options */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4A373]">
                    2. Ink Color Palette
                  </label>
                  <div className="flex gap-2">
                    {[
                      { name: "Charcoal", hex: "#2D2D2D" },
                      { name: "Crimson", hex: "#8C3B3B" },
                      { name: "Warm Gold", hex: "#D4A373" },
                      { name: "Deep Purple", hex: "#5B21B6" }
                    ].map((col) => (
                      <button
                        key={col.name}
                        onClick={() => setCustomStyle(prev => ({ ...prev, textColor: col.name as any }))}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform hover:scale-110 ${
                          customStyle.textColor === col.name ? "border-black scale-105 shadow-sm" : "border-gray-200"
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      >
                        {customStyle.textColor === col.name && (
                          <div className="w-2 h-2 rounded-full bg-white shadow-xs" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Card Backdrops */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4A373]">
                    3. Visual Backdrop Workshop
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    {[
                      { name: "Cream Solid", label: "Classic Cream" },
                      { name: "Soft Blush Pink", label: "Warm Blush" },
                      { name: "Delicate Lavender", label: "Soft Lavender" },
                      { name: "Rose Petals Backdrop", label: "Rose Petals" },
                      { name: "Fairy Lights Ambient", label: "Fairy Lights 🌙" },
                      { name: "Starry Night Universe", label: "Starry Space ⭐" }
                    ].map((bg) => (
                      <button
                        key={bg.name}
                        onClick={() => setCustomStyle(prev => ({ ...prev, background: bg.name as any }))}
                        className={`py-2 px-2 rounded-xl border text-center truncate transition-all ${
                          customStyle.background === bg.name 
                            ? "border-[#8C3B3B] bg-[#8C3B3B]/5 text-[#8C3B3B] font-bold" 
                            : "border-gray-200 text-gray-600 hover:border-[#8C3B3B]"
                        }`}
                      >
                        {bg.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSmartCopy(editorText)}
                    className="flex-1 bg-[#8C3B3B] text-white py-3 px-4 rounded-xl font-mono text-xs font-bold tracking-tight hover:bg-[#722F2F] transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Smart Copy Card</span>
                  </button>
                  <button
                    onClick={handleSaveToFavorites}
                    className="bg-white border border-[#E5E1DA] hover:border-[#8C3B3B] text-gray-700 p-3 rounded-xl transition-all"
                    title="Save customized design"
                  >
                    <Bookmark className="w-5 h-5 text-[#8C3B3B]" />
                  </button>
                  <button
                    onClick={() => handlePlayInAppAudio("custom_workshop", editorText)}
                    className={`border p-3 rounded-xl transition-all ${
                      playingAudioId === "custom_workshop"
                        ? "bg-[#8C3B3B] text-white border-[#8C3B3B]"
                        : "bg-white border-[#E5E1DA] text-gray-700 hover:border-[#8C3B3B]"
                    }`}
                    title={playingAudioId === "custom_workshop" ? "Stop Audio" : "Listen to Card Audio"}
                  >
                    {playingAudioId === "custom_workshop" ? (
                      <VolumeX className="w-5 h-5 animate-pulse" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="flex gap-2 text-[11px] font-mono">
                  <button
                    onClick={() => handleExportImage("square")}
                    className="flex-1 bg-white border border-[#E5E1DA] hover:border-[#8C3B3B] hover:text-[#8C3B3B] py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-gray-700 font-bold"
                  >
                    <Download className="w-3.5 h-3.5 text-[#D4A373]" />
                    <span>Download Square (1:1)</span>
                  </button>
                  <button
                    onClick={() => handleExportImage("story")}
                    className="flex-1 bg-white border border-[#E5E1DA] hover:border-[#8C3B3B] hover:text-[#8C3B3B] py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-gray-700 font-bold"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#8C3B3B]" />
                    <span>Share Story (9:16)</span>
                  </button>
                </div>
              </div>

              {/* Feed of other preseeded message prompts to quickly load into workspace */}
              <div className="space-y-3 pt-2">
                <h3 className="font-serif font-bold text-sm text-[#8C3B3B]">
                  Quick Load Presets
                </h3>
                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {messages.slice(0, 6).map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setEditorText(m.body);
                        setEditorTitle(m.title);
                        setEditorRTag(m.relationshipTag);
                        setEditorOTag(m.occasionTag);
                        setActiveMessageId(m.id);
                        showToast("📋 Loaded preset message");
                      }}
                      className="w-full text-left bg-white border border-[#E5E1DA] hover:border-[#8C3B3B] rounded-xl p-3 transition-colors text-xs flex justify-between items-center gap-3"
                    >
                      <div className="truncate flex-1">
                        <span className="font-serif font-semibold text-[#8C3B3B]">{m.title}</span>
                        <p className="text-gray-500 truncate italic mt-0.5">&ldquo;{m.body}&rdquo;</p>
                      </div>
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Relationship Countdown & Milestone Widget */}
              <div className="bg-white border border-[#E5E1DA] rounded-2xl p-5 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#8C3B3B]" />
                    <h3 className="font-serif font-bold text-sm text-[#2D2D2D]">
                      Relationship Milestones & Countdowns
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsAddingMilestone(!isAddingMilestone)}
                    className="text-[#8C3B3B] hover:text-[#722F2F] font-mono text-xs font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{isAddingMilestone ? "Cancel" : "Add Milestone"}</span>
                  </button>
                </div>

                {isAddingMilestone && (
                  <form onSubmit={handleSaveMilestone} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E5E1DA] space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                      <div className="space-y-1">
                        <label className="text-[10px] text-gray-500 font-bold uppercase">Milestone Title</label>
                        <input
                          type="text"
                          required
                          value={newMilestoneTitle}
                          onChange={(e) => setNewMilestoneTitle(e.target.value)}
                          placeholder="e.g., Our First Anniversary"
                          className="w-full bg-white border border-[#E5E1DA] rounded-lg p-2 outline-none focus:border-[#8C3B3B]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-gray-500 font-bold uppercase">Date</label>
                        <input
                          type="date"
                          required
                          value={newMilestoneDate}
                          onChange={(e) => setNewMilestoneDate(e.target.value)}
                          className="w-full bg-white border border-[#E5E1DA] rounded-lg p-2 outline-none focus:border-[#8C3B3B]"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 text-xs font-mono">
                      <label className="text-[10px] text-gray-500 font-bold uppercase">Description (Optional)</label>
                      <input
                        type="text"
                        value={newMilestoneDesc}
                        onChange={(e) => setNewMilestoneDesc(e.target.value)}
                        placeholder="e.g., The day our life changed forever..."
                        className="w-full bg-white border border-[#E5E1DA] rounded-lg p-2 outline-none focus:border-[#8C3B3B]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#8C3B3B] text-white font-mono text-xs font-bold py-2 rounded-lg hover:bg-[#722F2F] transition-colors"
                    >
                      Save Milestone Tracker
                    </button>
                  </form>
                )}

                <div className="space-y-3">
                  {milestones.length === 0 ? (
                    <div className="text-center py-6 border border-dashed border-[#E5E1DA] rounded-xl bg-[#FAF7F2]/30">
                      <p className="font-serif italic text-xs text-gray-500">
                        No milestones registered yet. Track your anniversaries, first dates, or next meetups to start the countdown!
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2.5">
                      {milestones.map((m) => {
                        const targetDate = new Date(m.date);
                        const today = new Date();
                        targetDate.setHours(0,0,0,0);
                        today.setHours(0,0,0,0);

                        const timeDiff = targetDate.getTime() - today.getTime();
                        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        const isFuture = daysDiff > 0;
                        const isToday = daysDiff === 0;

                        return (
                          <div
                            key={m.id}
                            className="bg-[#FAF7F2]/50 border border-[#E5E1DA] rounded-xl p-3 flex justify-between items-center gap-3 shadow-3xs"
                          >
                            <div className="flex-1 space-y-0.5">
                              <h4 className="font-serif font-bold text-xs text-gray-800 flex items-center gap-1.5">
                                <span>{m.title}</span>
                                <span className="bg-[#E5E1DA] text-gray-600 text-[9px] font-mono font-medium px-2 py-0.5 rounded-full">
                                  {m.date}
                                </span>
                              </h4>
                              {m.description && (
                                <p className="text-[10px] text-gray-500 font-mono italic">{m.description}</p>
                              )}
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="text-right shrink-0">
                                {isToday ? (
                                  <span className="text-[#8C3B3B] font-serif font-extrabold text-sm animate-pulse block">
                                    🌸 Today is the Day!
                                  </span>
                                ) : isFuture ? (
                                  <div>
                                    <span className="text-[#8C3B3B] font-mono font-black text-sm block">
                                      {daysDiff} Days
                                    </span>
                                    <span className="text-[9px] font-mono uppercase text-gray-500 tracking-wider">
                                      Remaining
                                    </span>
                                  </div>
                                ) : (
                                  <div>
                                    <span className="text-[#D4A373] font-mono font-black text-sm block">
                                      {Math.abs(daysDiff)} Days
                                    </span>
                                    <span className="text-[9px] font-mono uppercase text-gray-500 tracking-wider">
                                      Of Pure Love
                                    </span>
                                  </div>
                                )}
                              </div>
                              <button
                                onClick={() => handleDeleteMilestone(m.id)}
                                className="text-gray-400 hover:text-[#8C3B3B] p-1.5 rounded-lg hover:bg-[#8C3B3B]/5 transition-colors"
                                title="Remove Tracker"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 2 — LIVE BROWSE & FILTER SEARCH */}
          {activeTab === "browse" && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="space-y-4"
            >
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#8C3B3B]">
                  Browse Sanctuary
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Live search across all romantic tags & tones
                </p>
              </div>

              {/* Dynamic Live Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for words, keywords, her, cry..."
                  className="w-full bg-white border border-[#E5E1DA] rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono outline-none focus:border-[#8C3B3B] transition-colors"
                />
              </div>

              {/* Category chip selectors */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  Filter Occasion
                </label>
                <div className="flex gap-1.5 overflow-x-auto pb-1.5 max-w-full scrollbar-none">
                  {["All", "Good Morning", "Good Night", "Birthday", "Just Because", "Thinking of You", "Long Distance", "Reconciliation After an Argument"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setBrowseCategory(cat)}
                      className={`text-[10px] font-mono font-bold px-3 py-1.5 rounded-full border shrink-0 transition-all ${
                        browseCategory === cat 
                          ? "bg-[#D4A373] text-white border-[#D4A373]" 
                          : "bg-white text-gray-600 border-[#E5E1DA] hover:border-[#D4A373]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tone chip selectors */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  Filter Tone
                </label>
                <div className="flex gap-1.5 overflow-x-auto pb-1.5 max-w-full scrollbar-none">
                  {["All", "Romantic", "Sweet", "Emotional", "Comforting", "Passionate"].map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setBrowseTone(tone)}
                      className={`text-[10px] font-mono font-bold px-3 py-1.5 rounded-full border shrink-0 transition-all ${
                        browseTone === tone 
                          ? "bg-[#8C3B3B] text-white border-[#8C3B3B]" 
                          : "bg-white text-gray-600 border-[#E5E1DA] hover:border-[#8C3B3B]"
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtered Messages list */}
              <div className="space-y-3 pt-2 max-h-[360px] overflow-y-auto pr-1">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-10 bg-white border border-[#E5E1DA] rounded-2xl p-4">
                    <p className="font-serif italic text-gray-400">No matching verses found...</p>
                    <button 
                      onClick={() => { setSearchTerm(""); setBrowseCategory("All"); setBrowseTone("All"); }}
                      className="mt-2 text-xs font-mono font-bold text-[#D4A373] hover:text-[#8C3B3B]"
                    >
                      Reset Filter Parameters
                    </button>
                  </div>
                ) : (
                  filteredMessages.map((m) => (
                    <div key={m.id} className="bg-white border border-[#E5E1DA] rounded-2xl p-4 space-y-3 relative shadow-2xs hover:border-[#8C3B3B] transition-colors">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[9px] font-mono font-bold text-[#8C3B3B] bg-[#8C3B3B]/5 py-0.5 px-2 rounded-full border border-[#8C3B3B]/10">
                          {m.relationshipTag}
                        </span>
                        <span className="text-[9px] font-mono font-semibold text-gray-400">
                          {m.occasionTag}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-[#2D2D2D]">{m.title}</h4>
                      <p className="font-serif italic text-xs text-gray-600 leading-relaxed bg-[#FAF7F2]/40 p-2.5 rounded-lg border border-[#E5E1DA]/30">
                        &ldquo;{m.body}&rdquo;
                      </p>
                      <div className="flex justify-between items-center pt-1.5">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => handleLikeMessage(m.id)}
                            className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500 hover:text-[#8C3B3B]"
                          >
                            <Heart className="w-3.5 h-3.5 fill-[#8C3B3B]/10 text-gray-400 hover:fill-[#8C3B3B] hover:text-[#8C3B3B]" />
                            <span>{m.likes} Likes</span>
                          </button>
                          
                          {/* Play audio button */}
                          <button
                            onClick={() => handlePlayInAppAudio(m.id, m.body)}
                            className="text-gray-400 hover:text-[#8C3B3B] p-1 rounded-lg"
                            title="Speak message aloud"
                          >
                            {playingAudioId === m.id ? (
                              <VolumeX className="w-3.5 h-3.5 animate-pulse text-[#8C3B3B]" />
                            ) : (
                              <Volume2 className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Quick Copy button */}
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(m.body);
                              incrementShareCount();
                              showToast("📋 Copied to clipboard!");
                            }}
                            className="text-gray-400 hover:text-[#8C3B3B] p-1 rounded-lg"
                            title="Copy text"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            setEditorText(m.body);
                            setEditorTitle(m.title);
                            setEditorRTag(m.relationshipTag);
                            setEditorOTag(m.occasionTag);
                            setActiveMessageId(m.id);
                            setActiveTab("home");
                            showToast("✨ Pushed to Style Workshop!");
                          }}
                          className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4A373] hover:text-[#8C3B3B] flex items-center gap-0.5"
                        >
                          <span>Style workshop</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </motion.div>
          )}

          {/* TAB 3 — STORY SANCTUARY COMMUNITY */}
          {activeTab === "stories" && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="space-y-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#8C3B3B]">
                    Story Sanctuary
                  </h2>
                  <p className="text-xs text-gray-500 font-mono mt-0.5">
                    Community love letters & romance records
                  </p>
                </div>

                {/* Simulated Admin Moderation Mode Toggle */}
                <button
                  onClick={() => { setAdminMode(!adminMode); showToast(`🛡️ Admin Moderation Mode: ${!adminMode ? "ENABLED" : "DISABLED"}`); }}
                  className={`p-1.5 rounded-full border transition-all ${
                    adminMode 
                      ? "bg-purple-600 border-purple-600 text-white" 
                      : "bg-white border-[#E5E1DA] text-gray-400"
                  }`}
                  title="Toggle Admin Moderation View"
                >
                  <ShieldCheck className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Add Story Accordion/Form */}
              <details className="group bg-white border border-[#E5E1DA] rounded-2xl overflow-hidden shadow-2xs">
                <summary className="list-none flex justify-between items-center p-4 cursor-pointer select-none font-serif font-bold text-xs text-[#8C3B3B]">
                  <span className="flex items-center gap-2">
                    <Plus className="w-4.5 h-4.5 text-[#D4A373] group-open:rotate-45 transition-transform" />
                    Submit Your Romantic Memory
                  </span>
                  <span className="text-[10px] font-mono font-bold text-gray-400">TAP TO OPEN</span>
                </summary>
                
                <form onSubmit={handleSubmitStory} className="p-4 border-t border-[#E5E1DA] space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Story Title (e.g. Lost in Paris)"
                      value={storyTitle}
                      onChange={(e) => setStoryTitle(e.target.value)}
                      className="w-full bg-white border border-[#E5E1DA] rounded-lg p-2.5 font-mono outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Nickname"
                      value={storyNickname}
                      onChange={(e) => setStoryNickname(e.target.value)}
                      className="w-full bg-white border border-[#E5E1DA] rounded-lg p-2.5 font-mono outline-none"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Theme (e.g. First Proposal)"
                      value={storyTheme}
                      onChange={(e) => setStoryTheme(e.target.value)}
                      className="w-full bg-white border border-[#E5E1DA] rounded-lg p-2.5 font-mono outline-none"
                    />
                    <select
                      value={storyCover}
                      onChange={(e) => setStoryCover(e.target.value as any)}
                      className="w-full bg-white border border-[#E5E1DA] rounded-lg p-2 font-mono outline-none text-gray-600"
                    >
                      <option value="Roses">Theme Backdrop: Roses 🌹</option>
                      <option value="Coffee Date">Theme Backdrop: Coffee ☕</option>
                      <option value="Starry Night">Theme Backdrop: Starry Space ⭐</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Describe your beautiful moment with vulnerability..."
                    value={storyContent}
                    onChange={(e) => setStoryContent(e.target.value)}
                    rows={4}
                    className="w-full bg-white border border-[#E5E1DA] rounded-lg p-2.5 font-serif italic outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={submittingStory}
                    className="w-full bg-[#8C3B3B] text-white py-2 rounded-xl font-mono text-xs font-bold tracking-tight hover:bg-[#722F2F] disabled:opacity-55"
                  >
                    {submittingStory ? "Whispering with server database..." : "Publish To Story Sanctuary"}
                  </button>
                </form>
              </details>

              {/* Feed of stories */}
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                {stories.length === 0 ? (
                  <p className="text-center font-serif italic text-gray-400 py-10">Story sanctuary is currently silent...</p>
                ) : (
                  stories
                    .filter(s => adminMode || s.status === "Approved")
                    .map((s) => (
                      <div 
                        key={s.id} 
                        className="bg-white border border-[#E5E1DA] rounded-2xl overflow-hidden shadow-2xs relative"
                      >
                        {/* Status tag in admin mode */}
                        {adminMode && (
                          <div className={`px-3 py-1 text-[9px] font-mono font-bold flex items-center justify-between ${
                            s.status === "Approved" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                          }`}>
                            <span>Moderation Status: {s.status}</span>
                            <span className="font-mono text-[8px] opacity-70">Story ID: {s.id}</span>
                          </div>
                        )}

                        {/* Story Visual Banner */}
                        <div className="h-20 bg-gradient-to-r from-[#8C3B3B]/10 to-[#D4A373]/20 relative flex items-center px-4">
                          <div className="absolute top-2 right-2 text-xl">
                            {s.coverImage === "Roses" && "🌹"}
                            {s.coverImage === "Coffee Date" && "☕"}
                            {s.coverImage === "Starry Night" && "🌌"}
                          </div>
                          <div>
                            <span className="text-[9px] font-mono uppercase tracking-widest text-[#D4A373] font-bold">
                              {s.theme}
                            </span>
                            <h4 className="font-serif font-bold text-sm text-[#2D2D2D]">
                              {s.title}
                            </h4>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3">
                          <p className="font-serif italic text-xs text-gray-600 leading-relaxed bg-[#FAF7F2]/40 p-3 rounded-xl border border-[#E5E1DA]/30">
                            &ldquo;{s.content}&rdquo;
                          </p>

                          <div className="flex justify-between items-center pt-1 text-[10px] font-mono">
                            <span className="text-gray-400 flex items-center gap-1">
                              <User className="w-3.5 h-3.5 text-[#D4A373]" />
                              By {s.nickname}
                            </span>

                            {/* Standard Like story if approved */}
                            {s.status === "Approved" && (
                              <button
                                onClick={() => handleLikeStory(s.id)}
                                className="flex items-center gap-1.5 text-gray-500 hover:text-[#8C3B3B] font-bold"
                              >
                                <Heart className="w-3.5 h-3.5 fill-[#8C3B3B]/10 text-[#8C3B3B] hover:fill-[#8C3B3B]" />
                                <span>{s.likes} Likes</span>
                              </button>
                            )}
                          </div>

                          {/* Moderation Controls (Visible only in Admin Mode) */}
                          {adminMode && s.status === "Pending Review" && (
                            <div className="flex gap-2 pt-2 border-t border-gray-100">
                              <button
                                onClick={() => handleModerateStory(s.id, "Approved")}
                                className="flex-1 bg-green-600 text-white py-1.5 rounded-lg font-mono text-[10px] font-bold tracking-wider hover:bg-green-700"
                              >
                                Approve Story
                              </button>
                              <button
                                onClick={() => handleModerateStory(s.id, "Rejected")}
                                className="flex-1 bg-rose-600 text-white py-1.5 rounded-lg font-mono text-[10px] font-bold tracking-wider hover:bg-rose-700"
                              >
                                Reject Story
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                )}
              </div>

            </motion.div>
          )}

          {/* TAB 4 — SAVED CUSTOM FAVORITES */}
          {activeTab === "saved" && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="space-y-4"
            >
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#8C3B3B]">
                  Saved Atelier
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Saved customized notes & visual presets
                </p>
              </div>

              {/* Favorites list */}
              <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
                {favorites.length === 0 ? (
                  <div className="text-center py-16 bg-white border border-[#E5E1DA] rounded-2xl p-6 space-y-2">
                    <Bookmark className="w-8 h-8 text-[#D4A373] mx-auto opacity-55" />
                    <p className="font-serif italic text-gray-500 text-xs">Atelier is currently empty...</p>
                    <p className="text-[10px] text-gray-400 font-mono">
                      Save your customized notes on Tab 1 to see them preserved here securely!
                    </p>
                  </div>
                ) : (
                  favorites.map((fav) => (
                    <div 
                      key={fav.id} 
                      className={`rounded-2xl p-5 shadow-xs border border-[#E5E1DA]/80 relative overflow-hidden transition-all duration-300 ${getStyleClass(fav.style)}`}
                    >
                      {/* Decorative backdrop elements */}
                      {fav.style.background === "Rose Petals Backdrop" && (
                        <div className="absolute top-1 right-2 text-[#8C3B3B]/10 font-serif text-xl">🌸</div>
                      )}

                      <div className="flex justify-between items-start border-b border-black/5 pb-2 mb-3 text-[9px] font-mono opacity-80">
                        <span className="uppercase font-bold tracking-wide">{fav.occasionTag}</span>
                        <span className="opacity-70">{fav.relationshipTag}</span>
                      </div>

                      <p className="italic leading-relaxed text-sm mb-4">
                        &ldquo;{fav.customizedText}&rdquo;
                      </p>

                      <div className="flex justify-between items-center pt-3 border-t border-black/5 text-[9px] font-mono opacity-80">
                        <span className="truncate max-w-[140px] font-bold">{fav.title}</span>
                        
                        <div className="flex gap-2 items-center">
                          <button
                            onClick={() => {
                              // Load into workspace to continue design
                              setEditorText(fav.customizedText);
                              setEditorTitle(fav.title);
                              setEditorRTag(fav.relationshipTag);
                              setEditorOTag(fav.occasionTag);
                              setActiveMessageId(fav.messageId);
                              setCustomStyle(fav.style);
                              setActiveTab("home");
                              showToast("✨ Loaded visual customized note into Workspace!");
                            }}
                            className="bg-black/5 px-2 py-1 rounded-md text-[8px] uppercase tracking-wider hover:bg-black/10 transition-colors"
                          >
                            Edit style
                          </button>
                          
                          <button
                            onClick={() => handleRemoveFavorite(fav.id)}
                            className="text-red-500 hover:text-red-700 font-bold"
                            title="Remove"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </motion.div>
          )}

          {/* TAB 5 — AI MAKER ASSISTANT */}
          {activeTab === "ai_maker" && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="space-y-4"
            >
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#8C3B3B]">
                  AI Writer
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Powered by server-side Gemini 3.5 Flash
                </p>
              </div>

              {/* Form Options */}
              <div className="bg-white border border-[#E5E1DA] rounded-2xl p-4 space-y-3.5 shadow-2xs text-xs">
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Relationship
                    </label>
                    <select
                      value={aiRelationship}
                      onChange={(e) => setAiRelationship(e.target.value as any)}
                      className="w-full bg-[#FAF7F2] border border-[#E5E1DA] rounded-lg p-2 font-mono outline-none text-gray-700"
                    >
                      <option value="Universal">Universal 🌸</option>
                      <option value="For Her">For Her 👸</option>
                      <option value="For Him">For Him 👑</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Tone Vibe
                    </label>
                    <select
                      value={aiTone}
                      onChange={(e) => setAiTone(e.target.value as any)}
                      className="w-full bg-[#FAF7F2] border border-[#E5E1DA] rounded-lg p-2 font-mono outline-none text-gray-700"
                    >
                      <option value="Romantic">Romantic</option>
                      <option value="Sweet">Sweet</option>
                      <option value="Emotional">Emotional 😢</option>
                      <option value="Comforting">Comforting</option>
                      <option value="Passionate">Passionate 🔥</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Occasion
                    </label>
                    <select
                      value={aiOccasion}
                      onChange={(e) => setAiOccasion(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E5E1DA] rounded-lg p-2 font-mono outline-none text-gray-700 text-xs"
                    >
                      <option value="Just Because">Just Because</option>
                      <option value="Good Morning">Good Morning</option>
                      <option value="Good Night">Good Night</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Thinking of You">Thinking of You</option>
                      <option value="Long Distance">Long Distance</option>
                      <option value="Reconciliation After an Argument">Apology / Healing</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Format Length
                    </label>
                    <select
                      value={aiLength}
                      onChange={(e) => setAiLength(e.target.value as any)}
                      className="w-full bg-[#FAF7F2] border border-[#E5E1DA] rounded-lg p-2 font-mono outline-none text-gray-700"
                    >
                      <option value="Short SMS">Short SMS</option>
                      <option value="Paragraph">Paragraph</option>
                      <option value="Long Letter">Long Letter</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                    Custom context (optional memory)
                  </label>
                  <input
                    type="text"
                    value={aiContext}
                    onChange={(e) => setAiContext(e.target.value)}
                    placeholder="e.g. mention rainy Seattle coffeeshop meeting"
                    className="w-full bg-[#FAF7F2] border border-[#E5E1DA] rounded-lg p-2.5 font-mono outline-none"
                  />
                </div>

                <button
                  onClick={handleAIGenerate}
                  disabled={aiGenerating}
                  className="w-full bg-[#8C3B3B] text-white py-3 rounded-xl font-mono text-xs font-bold tracking-tight hover:bg-[#722F2F] transition-colors flex items-center justify-center gap-2 disabled:opacity-55"
                >
                  <Sparkles className="w-4.5 h-4.5 fill-white text-white animate-pulse" />
                  <span>{aiGenerating ? "Simulating AI Thinking..." : "Generate Custom Prose"}</span>
                </button>
              </div>

              {/* Progressive typewriter output window */}
              {(aiGenerating || generatedText || streamProgress) && (
                <div className="bg-white border border-[#E5E1DA] rounded-2xl p-5 space-y-4 shadow-2xs relative">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#D4A373] border-b border-[#FAF7F2] pb-2">
                    <span className="font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      GEMINI GENERATIVE WORK
                    </span>
                    <span className="opacity-70">Model: gemini-3.5-flash</span>
                  </div>

                  {aiGenerating && !generatedText && (
                    <div className="text-center py-4 text-xs font-mono text-gray-400">
                      <span className="animate-pulse">✍️ Typing unique customized prose...</span>
                    </div>
                  )}

                  <p className="font-serif italic text-sm leading-relaxed text-[#2D2D2D] whitespace-pre-line">
                    {streamProgress}
                  </p>

                  {generatedText && (
                    <div className="flex gap-2 pt-3 border-t border-[#FAF7F2]">
                      <button
                        onClick={handlePushToEditor}
                        className="flex-1 bg-[#FAF7F2] hover:bg-[#8C3B3B] hover:text-white text-[#8C3B3B] border border-[#E5E1DA] py-2 px-3 rounded-xl font-mono text-[10px] font-bold tracking-wider transition-all flex items-center justify-center gap-1.5"
                      >
                        <CornerDownLeft className="w-4 h-4" />
                        <span>Send to Style workshop</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

            </motion.div>
          )}

          {/* TAB 6 — USER SETTINGS & ENGAGEMENT STATS */}
          {activeTab === "settings" && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="space-y-4"
            >
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#8C3B3B]">
                  Atelier Settings
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Manage notifications, tracking, and romantic metrics
                </p>
              </div>

              {/* Engagement Stats Card */}
              <div className="bg-white border border-[#E5E1DA] rounded-2xl p-4 space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 border-b border-[#FAF7F2] pb-2">
                  <Heart className="w-4 h-4 text-[#8C3B3B] fill-[#8C3B3B]" />
                  <h3 className="font-serif font-bold text-sm text-[#2D2D2D]">Romantic Statistics</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Love Messages Sent/Copied</span>
                    <span className="font-mono font-bold text-[#8C3B3B]">{shareCount}</span>
                  </div>
                  
                  {/* Progress bar and milestone title */}
                  <div className="space-y-1">
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#8C3B3B] h-full transition-all duration-500"
                        style={{ width: `${Math.min((shareCount / 15) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-gray-400">
                      <span>Romantic Title:</span>
                      <span className="text-[#D4A373] font-bold">
                        {shareCount === 0 ? "Silent Admirer" : 
                         shareCount <= 3 ? "Budding Poet" : 
                         shareCount <= 8 ? "Passionate Romantic" : "Grand Courtier of Love! 👑"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Push Notifications Options Card */}
              <div className="bg-white border border-[#E5E1DA] rounded-2xl p-4 space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 border-b border-[#FAF7F2] pb-2">
                  <Bell className="w-4 h-4 text-[#D4A373]" />
                  <h3 className="font-serif font-bold text-sm text-[#2D2D2D]">Push Notifications</h3>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Receive a daily hand-curated love message pushed directly to your device lock screen.
                </p>

                <div className="flex items-center justify-between bg-[#FAF7F2]/60 p-3 rounded-xl border border-[#E5E1DA]/40">
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-gray-700 block">Daily Reminders</span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {pushToggleExplicit ? "Status: Enabled" : "Status: Disabled"}
                    </span>
                  </div>
                  
                  {/* Explicit custom styled slide switch */}
                  <button
                    onClick={() => handleToggleExplicitPush(!pushToggleExplicit)}
                    className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none flex items-center ${
                      pushToggleExplicit ? "bg-[#8C3B3B]" : "bg-gray-200"
                    }`}
                  >
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      pushToggleExplicit ? "translate-x-5" : "translate-x-0"
                    }`} />
                  </button>
                </div>
              </div>



              <div className="text-center pt-2">
                <button
                  onClick={() => setActiveTab("home")}
                  className="bg-[#FAF7F2] text-[#8C3B3B] hover:bg-[#8C3B3B] hover:text-white border border-[#E5E1DA] text-xs font-mono font-bold py-2 px-5 rounded-full transition-all"
                >
                  Return to Editor
                </button>
              </div>

            </motion.div>
          )}

        </div>

        {/* BOTTOM REALISTIC PHONE APP NAVIGATION TAB BAR */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E1DA] px-4 py-2.5 flex justify-between items-center z-40 shadow-md select-none shrink-0">
          {[
            { id: "home", label: "Editor", icon: Home },
            { id: "browse", label: "Browse", icon: Compass },
            { id: "stories", label: "Stories", icon: BookOpen },
            { id: "saved", label: "Saved", icon: Bookmark },
            { id: "ai_maker", label: "AI Maker", icon: Sparkles }
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="flex flex-col items-center justify-center relative flex-1 transition-all py-1"
              >
                {/* Active animated indicator backdrop dot */}
                {isSelected && (
                  <motion.div 
                    layoutId="tab-backdrop"
                    className="absolute inset-0 bg-[#8C3B3B]/5 rounded-full mx-2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <IconComponent className={`w-5 h-5 transition-all ${
                  isSelected ? "text-[#8C3B3B] scale-110" : "text-gray-400 hover:text-gray-600"
                }`} />
                <span className={`text-[9px] font-mono mt-1 font-bold tracking-tight transition-colors ${
                  isSelected ? "text-[#8C3B3B]" : "text-gray-400"
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>

    </div>

  </div>
  );
}

export default function App() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center font-serif italic text-[#8C3B3B]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C3B3B] mb-2"></div>
        <span>Unfolding Atelier Suite...</span>
      </div>
    }>
      <AppContainer />
    </React.Suspense>
  );
}
