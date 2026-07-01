import React from "react";
import SEOLanding from "@/components/SEOLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heart Touching Love Messages — The Ultimate Romantic Anthology",
  description:
    "An extensive, 2000+ word poetic guide featuring the most emotional, heartfelt, and touching love messages ever composed. Melt your partner's heart today.",
  alternates: {
    canonical: "https://touchingtexts.com/heart-touching-love-messages",
    languages: {
      "en": "https://touchingtexts.com/heart-touching-love-messages",
      "es": "https://touchingtexts.com/es/heart-touching-love-messages",
      "pt": "https://touchingtexts.com/pt/heart-touching-love-messages",
      "x-default": "https://touchingtexts.com/heart-touching-love-messages",
    }
  },
};

export default function PillarPage() {
  return <SEOLanding />;
}
