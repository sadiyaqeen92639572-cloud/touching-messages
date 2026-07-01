import { MetadataRoute } from 'next';
import { SEO_CATEGORIES } from '@/data/categories';
import { I18N_DATA } from '@/data/i18n';

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://touchingtexts.com';

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/app`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Pillar pages
  ['en', 'es', 'pt'].forEach((lang) => {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    sitemapEntries.push({
      url: `${baseUrl}${prefix}/heart-touching-love-messages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // EN category pages — use SEO_CATEGORIES (18 categories)
  Object.keys(SEO_CATEGORIES).forEach((category) => {
    sitemapEntries.push({
      url: `${baseUrl}/love-messages/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  // ES category pages — only categories that exist in I18N_DATA.es
  Object.keys(I18N_DATA.es.categories).forEach((category) => {
    sitemapEntries.push({
      url: `${baseUrl}/es/love-messages/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  // PT category pages — only categories that exist in I18N_DATA.pt
  Object.keys(I18N_DATA.pt.categories).forEach((category) => {
    sitemapEntries.push({
      url: `${baseUrl}/pt/love-messages/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
