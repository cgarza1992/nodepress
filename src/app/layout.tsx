import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({
  title: "Senior Software Engineer, Frontend",
  description: siteConfig.description,
  path: "/",
  type: "website",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.domain,
  image: siteConfig.author.image,
  email: "cpg@christophergarza.dev",
  jobTitle: siteConfig.jobTitle,
  description:
    "Senior Software Engineer, Frontend at the seam between marketing and engineering. Building the technical systems behind pricing, conversion, and analytics for enterprise products.",
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Conversion Rate Optimization",
    "A/B Testing",
    "Component Architecture",
    "Analytics Infrastructure",
    "Segment",
  ],
  sameAs: [...siteConfig.author.sameAs],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <JsonLd data={personSchema} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
