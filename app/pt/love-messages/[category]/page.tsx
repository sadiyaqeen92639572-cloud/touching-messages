import React from "react";
import { notFound } from "next/navigation";
import SEOLanding from "@/components/SEOLanding";
import { I18N_DATA } from "@/data/i18n";
import { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(I18N_DATA.pt.categories).map((key) => ({
    category: key,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = I18N_DATA.pt.categories[category] || I18N_DATA.en.categories[category];
  
  if (!categoryData) {
    return {
      title: "Categoria Não Encontrada — Heartfelt Atelier",
    };
  }

  return {
    title: categoryData.title,
    description: categoryData.description,
    alternates: {
      canonical: `https://touchingtexts.com/pt/love-messages/${category}`,
      languages: {
        "en": `https://touchingtexts.com/love-messages/${category}`,
        "es": `https://touchingtexts.com/es/love-messages/${category}`,
        "pt": `https://touchingtexts.com/pt/love-messages/${category}`,
        "x-default": `https://touchingtexts.com/love-messages/${category}`,
      }
    },
  };
}

export default async function PortugueseCategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = I18N_DATA.pt.categories[category] || I18N_DATA.en.categories[category];

  if (!categoryData) {
    notFound();
  }

  return <SEOLanding categoryKey={category} locale="pt" />;
}
