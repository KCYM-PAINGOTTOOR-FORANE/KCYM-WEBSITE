import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f9fa',
    theme_color: '#ba0013',
    orientation: 'portrait-primary',
    categories: ['lifestyle', 'community', 'religion'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
