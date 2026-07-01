import React from "react";
import { notFound } from "next/navigation";
import SEOLanding from "@/components/SEOLanding";
import { SEO_CATEGORIES } from "@/data/categories";
import { I18N_DATA } from "@/data/i18n";
import { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SEO_CATEGORIES).map((key) => ({
    category: key,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = SEO_CATEGORIES[category];
  
  if (!categoryData) {
    return {
      title: "Category Not Found — Heartfelt Atelier",
    };
  }

  const esExists = !!I18N_DATA.es.categories[category];
  const ptExists = !!I18N_DATA.pt.categories[category];

  return {
    title: categoryData.title,
    description: categoryData.description,
    alternates: {
      canonical: `https://touching-messages.com/love-messages/${category}`,
      languages: {
        "en": `https://touching-messages.com/love-messages/${category}`,
        ...(esExists && { "es": `https://touching-messages.com/es/love-messages/${category}` }),
        ...(ptExists && { "pt": `https://touching-messages.com/pt/love-messages/${category}` }),
        "x-default": `https://touching-messages.com/love-messages/${category}`,
      }
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = SEO_CATEGORIES[category];

  if (!categoryData) {
    notFound();
  }

  return <SEOLanding categoryKey={category} />;
}
