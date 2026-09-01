import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { parishes } from '@/features/parishes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date().toISOString();

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/events`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const parishRoutes: MetadataRoute.Sitemap = parishes.map((parish) => ({
    url: `${baseUrl}/parish/${parish.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...coreRoutes, ...parishRoutes];
}
