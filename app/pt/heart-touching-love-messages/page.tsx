import React from "react";
import SEOLanding from "@/components/SEOLanding";
import { Metadata } from "next";
import { I18N_DATA } from "@/data/i18n";

export const metadata: Metadata = {
  title: I18N_DATA.pt.pillar.title,
  description: I18N_DATA.pt.pillar.description,
  alternates: {
    canonical: "https://touchingtexts.com/pt/heart-touching-love-messages",
    languages: {
      "en": "https://touchingtexts.com/heart-touching-love-messages",
      "es": "https://touchingtexts.com/es/heart-touching-love-messages",
      "pt": "https://touchingtexts.com/pt/heart-touching-love-messages",
      "x-default": "https://touchingtexts.com/heart-touching-love-messages",
    }
  },
};

export default function PortuguesePillarPage() {
  return <SEOLanding locale="pt" />;
}
