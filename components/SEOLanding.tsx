"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RomanticMessage } from "@/types";
import { SEO_CATEGORIES, SEOCategory } from "@/data/categories";
import { PRESEEDED_MESSAGES } from "@/data/messages";
import { I18N_DATA } from "@/data/i18n";
import { 
  Heart, 
  Copy, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  BookOpen, 
  HelpCircle, 
  Search, 
  Check, 
  Edit,
  ArrowUpRight,
  BookMarked,
  Volume2,
  VolumeX,
  Globe
} from "lucide-react";

interface SEOLandingProps {
  categoryKey?: string; // If undefined, this acts as the main "Pillar Page"
  locale?: "en" | "es" | "pt";
}

export default function SEOLanding({ categoryKey, locale }: SEOLandingProps) {
  const router = useRouter();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [messages, setMessages] = useState<RomanticMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const activeLocale = locale || "en";
  const strings = I18N_DATA[activeLocale]?.ui || I18N_DATA["en"].ui;

  // Determine current content data
  const isPillar = !categoryKey;
  
  // Base English categories for routing configuration
  const categoryData = !isPillar && categoryKey ? SEO_CATEGORIES[categoryKey] : null;

  // Localized textual contents
  const localizedPillar = I18N_DATA[activeLocale]?.pillar || I18N_DATA["en"].pillar;
  const localizedCategory = !isPillar && categoryKey ? (I18N_DATA[activeLocale]?.categories[categoryKey] || I18N_DATA["en"].categories[categoryKey]) : null;

  const pageTitle = isPillar 
    ? localizedPillar.title 
    : localizedCategory?.title || "";

  const pageH1 = isPillar 
    ? localizedPillar.h1 
    : localizedCategory?.h1 || "";

  const pageIntro = isPillar 
    ? localizedPillar.introduction
    : localizedCategory?.introduction || "";

  const relatedKeywords = isPillar
    ? localizedPillar.relatedKeywords
    : localizedCategory?.relatedKeywords || [];

  const faqs = isPillar
    ? localizedPillar.faqs
    : localizedCategory?.faqs || [];

  // Load and filter messages
  useEffect(() => {
    async function loadMessages() {
      try {
        const res = await fetch("/api/messages");
        if (res.ok) {
          const data = await res.json();
          // Filter based on category parameters if cluster page
          if (!isPillar && categoryData) {
            const filtered = data.filter((msg: RomanticMessage) => {
              // Match relationship tag
              const relMatch = !categoryData.relationshipTag || msg.relationshipTag === categoryData.relationshipTag || msg.relationshipTag === "Universal";
              // Match occasion tag
              const occMatch = !categoryData.occasionTag || msg.occasionTag === categoryData.occasionTag;
              // Match any keywords or text matches
              const textMatch = categoryData.keywordsToMatch.some(kw => 
                msg.title.toLowerCase().includes(kw.toLowerCase()) || 
                msg.body.toLowerCase().includes(kw.toLowerCase()) ||
                msg.keywords.some(mk => mk.toLowerCase().includes(kw.toLowerCase()))
              );
              return (relMatch && occMatch) || textMatch;
            });
            // If filtered yields fewer than 5, supplement with preseeded
            setMessages(filtered.length >= 4 ? filtered : data);
          } else {
            setMessages(data);
          }
        } else {
          setMessages(PRESEEDED_MESSAGES);
        }
      } catch (e) {
        setMessages(PRESEEDED_MESSAGES);
      } finally {
        setIsLoading(false);
      }
    }
    loadMessages();
  }, [categoryKey, isPillar, categoryData]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleLike = async (id: string) => {
    if (likedIds[id]) return; // prevent duplicate likes in session
    setLikedIds(prev => ({ ...prev, [id]: true }));
    
    // Optimistic UI updates
    setMessages(prev => prev.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m));

    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "like", id })
      });
    } catch (e) {
      console.error("Failed to sync like with server database");
    }
  };

  // Speech Synthesis (Audio Playback)
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayAudio = (id: string, text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    if (playingId === id) {
      window.speechSynthesis.cancel();
      setPlayingId(null);
      return;
    }

    window.speechSynthesis.cancel(); // cancel current speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    
    const voices = window.speechSynthesis.getVoices();
    const sweetVoice = voices.find(v => v.name.includes("Google US English") || v.name.includes("Samantha") || v.name.includes("Natural"));
    if (sweetVoice) {
      utterance.voice = sweetVoice;
    }

    utterance.onend = () => {
      setPlayingId(null);
    };

    utterance.onerror = () => {
      setPlayingId(null);
    };

    setPlayingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleCustomize = (msg: RomanticMessage) => {
    // Deep link into the interactive app with preloaded text
    const query = encodeURIComponent(msg.body);
    const title = encodeURIComponent(msg.title);
    const rTag = encodeURIComponent(msg.relationshipTag);
    const oTag = encodeURIComponent(msg.occasionTag);
    const mId = encodeURIComponent(msg.id);
    router.push(`/app?preloadText=${query}&preloadTitle=${title}&preloadRTag=${rTag}&preloadOTag=${oTag}&preloadMId=${mId}`);
  };

  // Structured Data (JSON-LD) injection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageH1,
    "description": categoryData?.description || "An elegant anthology of romantic messages and custom letters.",
    "author": {
      "@type": "Organization",
      "name": "Heartfelt Atelier"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Heartfelt Atelier",
      "logo": {
        "@type": "ImageObject",
        "url": "https://picsum.photos/seed/romantic/200/200"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== "undefined" ? window.location.href : "https://touchingtexts.com"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2D2D] font-sans">
      {/* Inject Structured Data */}
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Elegant Header */}
      <header className="border-b border-[#E5E1DA] bg-white sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Heart className="w-6 h-6 text-[#8C3B3B] fill-[#8C3B3B] group-hover:scale-110 transition-transform" />
            <span className="font-serif font-bold text-lg tracking-tight text-[#8C3B3B]">
              Heartfelt Atelier
            </span>
          </Link>
          
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-[#555555]">
            <Link 
              href={activeLocale === "es" ? "/es/heart-touching-love-messages" : "/heart-touching-love-messages"} 
              className="hover:text-[#8C3B3B] transition-colors"
            >
              {activeLocale === "es" ? "Guía Principal" : "Pillar Guide"}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <Link
                href={isPillar ? "/heart-touching-love-messages" : `/love-messages/${categoryKey}`}
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full transition-all border ${activeLocale === 'en' ? 'border-[#8C3B3B] text-[#8C3B3B] bg-[#8C3B3B]/5' : 'border-[#E5E1DA] text-gray-400 hover:text-[#8C3B3B] hover:border-[#8C3B3B]'}`}
              >
                EN
              </Link>
              <Link
                href={isPillar ? "/es/heart-touching-love-messages" : `/es/love-messages/${categoryKey}`}
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full transition-all border ${activeLocale === 'es' ? 'border-[#8C3B3B] text-[#8C3B3B] bg-[#8C3B3B]/5' : 'border-[#E5E1DA] text-gray-400 hover:text-[#8C3B3B] hover:border-[#8C3B3B]'}`}
              >
                ES
              </Link>
              <Link
                href={isPillar ? "/pt/heart-touching-love-messages" : `/pt/love-messages/${categoryKey}`}
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full transition-all border ${activeLocale === 'pt' ? 'border-[#8C3B3B] text-[#8C3B3B] bg-[#8C3B3B]/5' : 'border-[#E5E1DA] text-gray-400 hover:text-[#8C3B3B] hover:border-[#8C3B3B]'}`}
              >
                PT
              </Link>
            </div>

            <Link href="/app" className="bg-[#8C3B3B] text-white px-4 py-2 rounded-full hover:bg-[#722F2F] transition-all flex items-center gap-2 shadow-xs hover:shadow-md">
              <Sparkles className="w-4 h-4" />
              <span>{activeLocale === "es" ? "Iniciar Aplicación" : "Launch App (AI Maker)"}</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Content (Left Column, spans 3 grid items on desktop) */}
          <section className="lg:col-span-3 space-y-10" id="main-content">
            
            {/* Title & SEO Introduction */}
            <article className="prose max-w-none">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4A373] font-semibold">
                {isPillar ? "Comprehensive Pillar Guide" : "Specialized Cluster Pillar"}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-[#8C3B3B] mt-2 mb-6 leading-tight">
                {pageH1}
              </h1>

              {/* Table of Contents Box */}
              <div className="bg-white border border-[#E5E1DA] rounded-2xl p-6 my-8 shadow-xs max-w-md">
                <h4 className="font-serif font-semibold text-lg text-[#8C3B3B] flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5" />
                  Table of Contents
                </h4>
                <ul className="space-y-2 text-sm text-[#555555] list-none pl-0">
                  <li>
                    <a href="#introduction" className="hover:text-[#8C3B3B] transition-colors flex items-center gap-1.5 font-medium">
                      <span className="text-[#D4A373]">1.</span> SEO Introduction & Narrative
                    </a>
                  </li>
                  <li>
                    <a href="#messages-list" className="hover:text-[#8C3B3B] transition-colors flex items-center gap-1.5 font-medium">
                      <span className="text-[#D4A373]">2.</span> Curated Romantic Messages
                    </a>
                  </li>
                  <li>
                    <a href="#related-searches" className="hover:text-[#8C3B3B] transition-colors flex items-center gap-1.5 font-medium">
                      <span className="text-[#D4A373]">3.</span> Related Search Keywords
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-[#8C3B3B] transition-colors flex items-center gap-1.5 font-medium">
                      <span className="text-[#D4A373]">4.</span> Frequently Asked Questions (FAQ)
                    </a>
                  </li>
                </ul>
              </div>

              {/* Unique Introduction */}
              <div id="introduction" className="text-lg leading-relaxed text-[#4A4A4A] space-y-4 font-serif bg-white/40 p-6 md:p-8 rounded-2xl border border-[#E5E1DA]">
                {pageIntro.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para.trim()}</p>
                ))}
              </div>
            </article>

            {/* Interactive Messages Hub */}
            <div id="messages-list" className="space-y-8 pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E1DA] pb-4">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#8C3B3B]">
                    Hand-Selected Heartfelt Messages
                  </h2>
                  <p className="text-xs text-gray-500 font-mono mt-1">
                    Showing {messages.length} unique romantic prose templates
                  </p>
                </div>
                <Link href="/app" className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4A373] hover:text-[#8C3B3B] flex items-center gap-1 group">
                  <span>Open Filterable Browser</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {isLoading ? (
                <div className="flex justify-center py-20">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C3B3B]"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {messages.map((rawMsg) => {
                    const localMsg = I18N_DATA[activeLocale]?.messages[rawMsg.id];
                    const msg = localMsg ? { ...rawMsg, title: localMsg.title, body: localMsg.body } : rawMsg;
                    return (
                      <div 
                        key={msg.id} 
                        className="bg-white border border-[#E5E1DA] rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group"
                      >
                        {/* Relationship/Occasion Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-[#FAF7F2] text-[#8C3B3B] text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border border-[#E5E1DA]">
                            {msg.relationshipTag}
                          </span>
                          <span className="bg-[#FAF7F2] text-[#D4A373] text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border border-[#E5E1DA]">
                            {msg.occasionTag}
                          </span>
                          <span className="bg-[#FAF7F2] text-gray-500 text-[10px] font-mono px-2.5 py-1 rounded-full border border-[#E5E1DA]">
                            {msg.tone}
                          </span>
                        </div>

                        <h3 className="font-serif font-bold text-xl text-[#2D2D2D] mb-3">
                          {msg.title}
                        </h3>
                        
                        <p className="font-serif italic text-lg leading-relaxed text-[#4A4A4A] bg-[#FAF7F2]/50 p-4 md:p-6 rounded-xl border border-[#E5E1DA]/60 mb-6">
                          &ldquo;{msg.body}&rdquo;
                        </p>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Likes counter */}
                        <button 
                          onClick={() => handleLike(msg.id)}
                          className={`flex items-center gap-2 text-xs font-mono font-semibold py-2 px-4 rounded-full border transition-all ${
                            likedIds[msg.id] 
                              ? "bg-[#8C3B3B] text-white border-[#8C3B3B]" 
                              : "bg-white text-gray-600 hover:text-[#8C3B3B] hover:border-[#8C3B3B] border-[#E5E1DA]"
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${likedIds[msg.id] ? "fill-white text-white" : ""}`} />
                          <span>{msg.likes} Likes</span>
                        </button>

                        <div className="flex items-center gap-2">
                          {/* Audio Playback button */}
                          <button
                            onClick={() => handlePlayAudio(msg.id, msg.body)}
                            className={`border p-2.5 rounded-full transition-colors flex items-center justify-center relative ${
                              playingId === msg.id 
                                ? "bg-[#8C3B3B] text-white border-[#8C3B3B]" 
                                : "bg-white border-[#E5E1DA] text-gray-600 hover:border-[#8C3B3B] hover:text-[#8C3B3B]"
                            }`}
                            title={playingId === msg.id ? "Stop Audio" : "Play Audio"}
                          >
                            {playingId === msg.id ? (
                              <VolumeX className="w-4 h-4 animate-pulse" />
                            ) : (
                              <Volume2 className="w-4 h-4" />
                            )}
                          </button>

                          {/* Copy button */}
                          <button
                            onClick={() => handleCopy(msg.id, msg.body)}
                            className="bg-white border border-[#E5E1DA] hover:border-[#8C3B3B] hover:text-[#8C3B3B] text-gray-600 p-2.5 rounded-full transition-colors flex items-center justify-center relative"
                            title="Copy Message"
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>

                          {/* Customize button */}
                          <button
                            onClick={() => handleCustomize(msg)}
                            className="bg-[#FAF7F2] hover:bg-[#8C3B3B] hover:text-white border border-[#E5E1DA] text-[#8C3B3B] px-4 py-2 rounded-full text-xs font-mono font-bold tracking-tight transition-all flex items-center gap-1.5"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            <span>Customize in App</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ); })}
                </div>
              )}
            </div>

            {/* Sibling Internal Articles Linker */}
            <div id="related-articles" className="bg-[#8C3B3B]/5 border border-[#8C3B3B]/10 rounded-2xl p-8 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#8C3B3B] flex items-center gap-2">
                <BookMarked className="w-6 h-6" />
                {activeLocale === "es" ? "Explorar Guías Hermanas Relacionadas" : "Explore Romantic Sibling Guides"}
              </h3>
              <p className="text-sm text-gray-600 max-w-xl">
                {activeLocale === "es" 
                  ? "¿Buscas una ocasión, estado de ánimo o conexión diferente? Explora nuestras otras antologías dedicadas:" 
                  : "Looking for a different occasion, mood, or connection? Browse our other high-intent dedicated anthologies to touch their heart:"}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
                {Object.values(SEO_CATEGORIES)
                  .filter((cat) => cat.slug !== categoryKey)
                  .map((cat) => {
                    const localCat = I18N_DATA[activeLocale]?.categories[cat.slug] || cat;
                    const catTitle = localCat.title.split(" — ")[0];
                    return (
                      <Link 
                        key={cat.slug} 
                        href={activeLocale === "es" ? `/es/love-messages/${cat.slug}` : `/love-messages/${cat.slug}`}
                        className="bg-white border border-[#E5E1DA] hover:border-[#8C3B3B] p-4 rounded-xl flex items-center justify-between group shadow-2xs hover:shadow-xs transition-all"
                      >
                        <span className="text-gray-700 font-serif group-hover:text-[#8C3B3B] transition-colors">
                          {catTitle}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#8C3B3B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </Link>
                    );
                  })}
                {!isPillar && (
                  <Link 
                    href={activeLocale === "es" ? "/es/heart-touching-love-messages" : "/heart-touching-love-messages"}
                    className="bg-white border border-[#8C3B3B] text-[#8C3B3B] p-4 rounded-xl flex items-center justify-between group shadow-2xs hover:shadow-xs transition-all md:col-span-2"
                  >
                    <span className="font-serif font-bold">
                      {activeLocale === "es" 
                        ? "← Volver a la Antología Principal: Guía de Mensajes de Amor" 
                        : "← Back to Ultimate Hub: 10,000+ Heart Touching Love Messages"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Related Searches block */}
            <div id="related-searches" className="space-y-4 pt-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                Related Search Insights
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedKeywords.map((kw, i) => (
                  <span 
                    key={i} 
                    className="bg-white border border-[#E5E1DA] text-gray-600 px-4 py-2 rounded-lg text-xs font-mono transition-colors hover:text-[#8C3B3B]"
                  >
                    🔍 {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Elegant FAQ block */}
            <div id="faq" className="border-t border-[#E5E1DA] pt-10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#8C3B3B] flex items-center gap-2">
                <HelpCircle className="w-6 h-6" />
                Frequently Asked Questions
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-[#E5E1DA] rounded-xl p-6">
                    <h4 className="font-serif font-bold text-lg text-[#2D2D2D] mb-2 flex items-start gap-1.5">
                      <span className="text-[#D4A373] font-mono">Q:</span>
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed pl-5">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA to App */}
            <div className="bg-white border border-[#E5E1DA] rounded-3xl p-8 md:p-12 text-center shadow-xs space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8C3B3B] via-[#D4A373] to-[#8C3B3B]"></div>
              
              <div className="max-w-xl mx-auto space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#8C3B3B]">
                  Unsatisfied with Pre-written Prose?
                </h3>
                <p className="text-sm text-gray-600">
                  Step inside our custom workspace. Leverage our premium server-side AI Maker powered by Gemini to craft an exceptionally personalized letter, then design it using the visual atelier.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                  <Link href="/app" className="bg-[#8C3B3B] text-white px-8 py-3.5 rounded-full hover:bg-[#722F2F] font-semibold tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 fill-white text-white" />
                    <span>Launch Interactive AI Maker</span>
                  </Link>
                  <Link href="/app?tab=stories" className="text-sm font-mono text-[#D4A373] hover:text-[#8C3B3B] font-bold tracking-wider flex items-center gap-1 group">
                    <span>Visit Community Story Sanctuary</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </section>

          {/* Sidebar (Right Column, spans 1 grid item) */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Quick App Link Card */}
            <div className="bg-white border border-[#E5E1DA] rounded-2xl p-6 shadow-xs space-y-4 sticky top-24">
              <div className="w-12 h-12 bg-[#8C3B3B]/10 rounded-full flex items-center justify-center text-[#8C3B3B]">
                <Sparkles className="w-6 h-6 fill-none" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#8C3B3B]">
                Custom Style Workshop
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Want to send a customized card? Deep-link any of these templates into our mobile app simulation. Change fonts, background layouts, solid states, and copy beautiful results immediately.
              </p>
              <Link 
                href="/app"
                className="w-full bg-[#8C3B3B] text-white py-2.5 px-4 rounded-xl hover:bg-[#722F2F] transition-all text-xs font-mono font-bold tracking-tight text-center block shadow-2xs hover:shadow-xs"
              >
                Launch Customizer App
              </Link>
            </div>

            {/* Author Profile */}
            <div className="border border-[#E5E1DA] rounded-2xl p-6 bg-[#FAF7F2]/40 space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#2D2D2D]">
                Literary Integrity
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                All letters are written by romantic poets and relationship experts. We stand for authentic emotional human interaction over sterile template patterns.
              </p>
            </div>
          </aside>

        </div>
      </main>

      {/* Elegant Footer */}
      <footer className="bg-white border-t border-[#E5E1DA] mt-24 py-12 text-center">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <p className="font-serif font-semibold text-[#8C3B3B]">
            Heartfelt Atelier — Touch Hearts with Elegance
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Touching Messages Romantic Platform. Crafted with absolute devotion for modern lovers.
          </p>
        </div>
      </footer>
    </div>
  );
}
