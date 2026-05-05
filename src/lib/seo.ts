import type { Metadata } from 'next';

export const siteConfig = {
  name: "Christopher Garza",
  domain: "https://www.christophergarza.dev",
  description:
    "Senior Software Engineer, Frontend at the seam between marketing and engineering. Building the technical systems behind pricing, conversion, and analytics for enterprise products. React • TypeScript • Next.js • Node.js",
  jobTitle: "Senior Software Engineer, Frontend",
  author: {
    name: "Christopher Garza",
    image: "https://www.christophergarza.dev/profile_triumph_pic.jpg",
    sameAs: [
      "https://github.com/cgarza1992",
      "https://www.linkedin.com/in/christopher-garza-dev/",
    ],
  },
  locale: "en_US",
  defaultOgImage: "https://www.christophergarza.dev/og/default.png",
} as const;

export type SiteConfig = typeof siteConfig;

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  type = 'website',
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.domain}${path}`;
  const imageUrl = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${siteConfig.domain}${ogImage}`
    : siteConfig.defaultOgImage;

  return {
    metadataBase: new URL(siteConfig.domain),
    title: `${title} | Christopher Garza`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      ...(type === 'article' && modifiedTime ? { modifiedTime } : {}),
    },
  };
}
