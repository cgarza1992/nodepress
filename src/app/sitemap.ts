import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.domain,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.domain}/case-studies/wpe-plans`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.domain}/case-studies/auctane-cro`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
