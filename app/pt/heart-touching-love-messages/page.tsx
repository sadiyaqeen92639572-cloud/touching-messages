import React from "react";
import SEOLanding from "@/components/SEOLanding";
import { Metadata } from "next";
import { I18N_DATA } from "@/data/i18n";

export const metadata: Metadata = {
  title: I18N_DATA.pt.pillar.title,
  description: I18N_DATA.pt.pillar.description,
  alternates: {
    canonical: "https://touching-messages.com/pt/heart-touching-love-messages",
    languages: {
      "en": "https://touching-messages.com/heart-touching-love-messages",
      "es": "https://touching-messages.com/es/heart-touching-love-messages",
      "pt": "https://touching-messages.com/pt/heart-touching-love-messages",
      "x-default": "https://touching-messages.com/heart-touching-love-messages",
    }
  },
};

export default function PortuguesePillarPage() {
  return <SEOLanding locale="pt" />;
}
