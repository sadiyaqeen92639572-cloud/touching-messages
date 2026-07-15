import React from "react";
import Link from "next/link";
import { Heart, Sparkles, BookOpen, ArrowRight, Compass, MessageSquareCode } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2D2D] font-sans flex flex-col justify-between">
      
      {/* Top Banner Ornament */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8C3B3B] via-[#D4A373] to-[#8C3B3B] z-10"></div>

      {/* Elegant Header */}
      <header className="max-w-6xl mx-auto w-full px-6 py-8 flex justify-between items-center z-10 shrink-0">
        <div className="flex items-center gap-2 group">
          <Heart className="w-6 h-6 text-[#8C3B3B] fill-[#8C3B3B]" />
          <span className="font-serif font-bold text-lg tracking-tight text-[#8C3B3B]">
            Touching Texts
          </span>
        </div>
        <div className="flex gap-4 text-xs font-mono font-bold uppercase tracking-wider text-[#D4A373] hover:text-[#8C3B3B] transition-colors">
          <span>Current UTC Clock: 2026</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 py-12 text-center space-y-10 z-10">
        
        {/* Poetic Subheading */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4A373] font-bold">
            ✨ Editorial Romantic Hub & AI Workspace
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-[#8C3B3B] leading-tight max-w-3xl">
            Touch their heart with <br />
            <span className="italic">unvarnished, poetic grace</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Welcome to the digital sanctuary of love. Browse our SEO-first, human-curated message hubs, customize visual layouts in our workshop, or generate beautiful prose with our Gemini-powered AI Maker.
          </p>
        </div>

        {/* Dual CTA Gateways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl pt-4">
          
          {/* Gate 1: Interactive Suite */}
          <Link 
            href="/app"
            className="bg-white border border-[#E5E1DA] rounded-3xl p-8 hover:border-[#8C3B3B] hover:shadow-md transition-all text-left flex flex-col justify-between h-[230px] group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#8C3B3B]/10 group-hover:bg-[#8C3B3B] transition-colors" />
            
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#8C3B3B]/10 text-[#8C3B3B] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 fill-none" />
              </div>
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest bg-[#FAF7F2] py-1 px-2.5 rounded-full">
                Interactive Suite
              </span>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl text-[#8C3B3B] group-hover:text-[#722F2F] transition-colors flex items-center gap-1.5">
                <span>Launch Style Workshop</span>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mt-1">
                Design custom cards, use the AI Writer, and explore our Community Story Sanctuary inside our realistic mobile emulator.
              </p>
            </div>

            <div className="text-xs font-mono font-bold text-[#D4A373] group-hover:text-[#8C3B3B] flex items-center gap-1 mt-2">
              <span>Open Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Gate 2: SEO Pillar Anthology */}
          <Link 
            href="/heart-touching-love-messages"
            className="bg-white border border-[#E5E1DA] rounded-3xl p-8 hover:border-[#8C3B3B] hover:shadow-md transition-all text-left flex flex-col justify-between h-[230px] group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4A373]/10 group-hover:bg-[#D4A373] transition-colors" />

            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-[#D4A373]/10 text-[#D4A373] rounded-full flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest bg-[#FAF7F2] py-1 px-2.5 rounded-full">
                SEO content hub
              </span>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl text-[#2D2D2D] group-hover:text-[#8C3B3B] transition-colors flex items-center gap-1.5">
                <span>Explore Love Anthologies</span>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mt-1">
                Read our broad-authority SEO guides and specialized category cluster pages targeted for Google ranking and organic traffic.
              </p>
            </div>

            <div className="text-xs font-mono font-bold text-[#D4A373] group-hover:text-[#8C3B3B] flex items-center gap-1 mt-2">
              <span>Browse Anthologies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>

        {/* Informational SEO quick links footer ornament */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-gray-500 max-w-xl">
          <Link href="/love-messages/for-her" className="hover:text-[#8C3B3B]">For Her</Link>
          <span className="text-gray-300">•</span>
          <Link href="/love-messages/for-him" className="hover:text-[#8C3B3B]">For Him</Link>
          <span className="text-gray-300">•</span>
          <Link href="/love-messages/long-distance" className="hover:text-[#8C3B3B]">Long Distance</Link>
          <span className="text-gray-300">•</span>
          <Link href="/love-messages/apology" className="hover:text-[#8C3B3B]">Apology notes</Link>
          <span className="text-gray-300">•</span>
          <Link href="/love-messages/birthday" className="hover:text-[#8C3B3B]">Birthdays</Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E1DA] py-8 text-center shrink-0 z-10">
        <p className="text-[10px] font-mono text-gray-400">
          © {new Date().getFullYear()} Touching Texts. Replaces localStorage with SQLite-style server-side file persistence. Fully typed in TypeScript.
        </p>
        <p className="text-[10px] font-mono text-gray-400 mt-1">
          Touching Texts is part of Gesmine-Invest Limited, registered UK company number 14120136, registered office address at Hardy House, 269 Poynders Gardens, London, London, United Kingdom, SW4 8PQ.
        </p>
      </footer>

    </div>
  );
}
