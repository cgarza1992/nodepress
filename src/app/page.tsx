'use client';

import {
  Navigation,
  Hero,
  AuctaneWork,
  WPEngineWork,
  OpenSourceProjects,
  SkillsSection,
  AboutSection,
  ContactSection,
  Footer,
} from '@/components';

export default function Home() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend & Tools",
      items: ["Node.js", "PHP", "APIs", "Git/GitHub", "CircleCI", "REST"],
    },
    {
      category: "Specializations",
      items: ["Performance Optimization", "A/B Testing", "Team Leadership", "Technical Documentation", "UI/UX", "Mentorship"],
    },
  ];

  const auctaneMetrics = [
    { value: "185%", label: "Revenue Growth" },
    { value: "10", label: "Consolidated Brands" },
    { value: "$134M+", label: "ARR Managed" },
  ];

  const auctanePricingProjects = [
    {
      name: "ShipStation Pricing",
      url: "https://www.shipstation.com/pricing/",
      description: "Interactive plan comparison with multicurrency support. Built responsive pricing tiers and dynamic plan selector logic used across the platform.",
    },
    {
      name: "ShipEngine Pricing",
      url: "https://www.shipengine.com/pricing/?ref=shipstation_nav&utm_medium=crossbrand&utm_source=shipstation&utm_campaign=nav",
      description: "Advanced pricing page with feature-tier comparisons and currency localization. Architected reusable plan components across Auctane brands.",
    },
  ];

  const wpEnginePricingProjects = [
    {
      name: "WP Engine Plans",
      url: "https://wpengine.com/plans/",
      description: "WordPress hosting plan comparison page. Clean, simple layout showcasing plan differences and key features for different customer segments.",
    },
    {
      name: "WP Engine eCommerce Pricing",
      url: "https://wpengine.com/ecommerce-platform-pricing/",
      description: "eCommerce platform pricing page. Designed and optimized pricing strategy with integrations to CRM and data pipeline systems for personalized customer experiences.",
    },
  ];

  const wpEnginePlatformProducts = [
    {
      name: "StudioPress",
      url: "https://www.studiopress.com/",
      description: "Premium WordPress themes and Genesis framework. Worked on design systems and theme integration.",
    },
    {
      name: "Flywheel",
      url: "https://getflywheel.com/",
      description: "WordPress hosting and design tool. Built and maintained critical platform features.",
    },
    {
      name: "LocalWP",
      url: "https://localwp.com/",
      description: "Local WordPress development environment. Contributed to desktop app and web platform development.",
    },
  ];

  const githubProjects = [
    {
      name: "NodePress CMS",
      url: "https://github.com/cgarza1992/nodepress",
      description: "Self-hosted CMS built to replace WordPress. Swaps MySQL for PostgreSQL with real relational integrity, eliminates PHP-to-React block duplication. Built with Next.js, Prisma, TypeScript.",
    },
    {
      name: "FastSpring Demo",
      url: "https://github.com/cgarza1992/fastspring_demo",
      description: "Next.js demo app showcasing FastSpring's embedded checkout and SBL. Simulates SaaS pricing flow with localized pricing, webhook processing, and live event logging.",
    },
    {
      name: "Partner Directory",
      url: "https://github.com/cgarza1992/partner-directory",
      description: "Business/partner directory application built with modern JavaScript stack for organizing and displaying partner information.",
    },
    {
      name: "Script Queries",
      url: "https://github.com/cgarza1992/script-queries",
      description: "PHP scripts for WordPress database management. Exports posts to CSV, validates URLs in bulk, and filters data based on custom criteria.",
    },
  ];

  const aboutHighlights = [
    "Led enterprise-scale consolidation of 10 shipping & logistics brands at Auctane",
    "Drove 185% revenue growth through UI/UX optimization and strategic pricing initiatives",
    "Architected scalable systems serving millions of users across multiple platforms",
    "Scaled engineering team from 2 to 14 professionals through mentoring and hiring",
    "Built high-performance web apps with React, Next.js, TypeScript, and modern tooling",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <Hero
        title="Senior Full-Stack Engineer"
        subtitle="Building high-performance web solutions for complex, business-critical projects. Proven track record: 185% revenue growth, helped scale engineering team from 2 to 14 through mentoring and hiring, architected enterprise-scale migrations."
        image="https://christopherwp.wpenginepowered.com/wp-content/uploads/2017/08/profile_triumph_pic.jpg"
        ctaPrimary={{ text: "Get In Touch", href: "#contact" }}
        ctaSecondary={{ text: "View GitHub", href: "https://github.com/cgarza1992" }}
      />

      <AuctaneWork metrics={auctaneMetrics} pricingProjects={auctanePricingProjects} />

      <WPEngineWork pricingProjects={wpEnginePricingProjects} platformProducts={wpEnginePlatformProducts} />

      <OpenSourceProjects projects={githubProjects} />

      <SkillsSection skills={skills} />

      <AboutSection
        profileImage="https://avatars.githubusercontent.com/u/17697283?v=4"
        title="About Me"
        bio="I'm a Senior Full-Stack Engineer with 9+ years of experience designing and building complex web applications. Most recently at Auctane, where I led enterprise-scale consolidation of 10 shipping & logistics brands. Previously at WP Engine, a $134M ARR WordPress platform. My focus is on translating business challenges into elegant technical solutions. I've driven substantial revenue growth through UI/UX optimization, led cross-functional teams, and architected scalable systems that serve millions of users. I'm equally comfortable debugging edge cases, mentoring junior developers, or presenting technical concepts to non-technical stakeholders."
        highlights={aboutHighlights}
      />

      <ContactSection
        email="christopher.pgarza@gmail.com"
        message="Open to opportunities that challenge me to grow. Whether it's a new role, a project, or just want to connect—I'd love to hear from you."
      />

      <Footer year={2026} name="Christopher Garza" builtWith="Next.js + Tailwind CSS" />
    </div>
  );
}
