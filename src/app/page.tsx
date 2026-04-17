'use client';

import {
  Navigation,
  Hero,
  OpenSourceProjects,
  SkillsSection,
  AboutSection,
  ContactSection,
  Footer,
} from '@/components';
import { AuctaneWork } from '@/components/organisms/AuctaneWork';
import { WPEngineWork } from '@/components/organisms/WPEngineWork';

export default function Home() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend & Tools", items: ["Node.js", "PHP", "APIs", "Git/GitHub", "CircleCI", "REST"] },
    { category: "Specializations", items: ["Performance Optimization", "A/B Testing", "Team Leadership", "Technical Documentation", "UI/UX", "Mentorship"] },
  ];

  const auctaneMetrics = [
    { value: "10", label: "Brands Consolidated" },
  ];

  const wpeMetrics = [
    { value: "$134M", label: "ARR" },
    { value: "185%", label: "eCommerce Plan Purchases" },
    { value: "289%", label: "Signups Increase" },
    { value: "101%", label: "Avg Revenue per User" },
  ];

  const auctaneNarrative = [
    {
      title: 'Multi-Brand Consolidation',
      description: 'Led technical implementation of the strategic consolidation of 10 shipping & logistics brands (ShipStation, ShipEngine, Stamps.com, Packlink, MetaPack, Endicia, ShippingEasy, ShipWorks, GlobalPost, Return Rabbit). Involved migrating pricing models, consolidating billing systems, and creating unified API experiences serving logistics partners and merchants globally.',
    },
    {
      title: 'Reusable Component Architecture',
      description: 'Built scalable component libraries in React and Vue that powered redesigns across multiple Auctane brands and websites. These reusable systems enabled consistent branding, faster development cycles, and reduced code duplication across the entire portfolio while maintaining flexibility for brand-specific customizations.',
    },
    {
      title: 'Multi-Brand Ecosystem',
      description: 'Managed pricing and front-end implementations across Auctane\'s diverse shipping brand portfolio, ensuring seamless data pipeline integrations with HubSpot, Salesforce, Tray.io, and other enterprise APIs while maintaining distinct brand identities.',
    },
    {
      title: 'Data Pipeline & Analytics Architecture',
      description: 'Architected and implemented data pipelines capturing user tracking data from Google Analytics and Segment, routing customer data to appropriate CRM and business tools (HubSpot, Salesforce) based on territories and business rules. Used Tray.io to facilitate large-scale data movement and orchestration across Auctane brands.',
    },
  ];

  const auctaneProjects = [
    {
      title: 'ShipStation Pricing Pages',
      description: 'Implemented pricing pages across the Starter, Standard, and Premium plans — plan selectors, feature comparison tables, and A/B tested CTA copy. Led Auctane\'s migration to Segment to personalize plan recommendations based on user profile.',
      tags: ['React', 'TypeScript', 'Segment', 'Tray.io', 'HubSpot'],
      href: 'https://www.shipstation.com/pricing/',
    },
    {
      title: 'ShipEngine Pricing',
      description: 'Rebuilt the ShipEngine pricing page end-to-end. Implemented the API pricing calculator and developer-focused feature comparison. Used Segment to serve tailored content to developer vs. business personas via Tray.io enterprise lead routing.',
      tags: ['React', 'TypeScript', 'Segment', 'Tray.io'],
      href: 'https://www.shipengine.com/pricing/',
    },
    {
      title: 'ShipStation Free Trial Signup',
      description: 'Implemented the multi-field trial signup form with shipment volume segmentation, reCAPTCHA validation, and CRM routing. Used Segment to profile incoming users and personalize the post-signup experience.',
      tags: ['React', 'TypeScript', 'Segment', 'Tray.io', 'HubSpot'],
      href: 'https://www.shipstation.com/start-a-free-trial/',
    },
    {
      title: 'ShipEngine API Signup',
      description: 'Implemented the developer-focused API signup form, connected to the billing pipeline and CRM. Integrated Segment tracking to route developer vs. business signups through the appropriate onboarding flow.',
      tags: ['React', 'TypeScript', 'Segment', 'Tray.io'],
      href: 'https://www.shipengine.com/signup/',
    },
    {
      title: 'Reusable Component System',
      description: 'Built a library of reusable React and Vue components enabling marketing and content teams to assemble custom landing pages without developer involvement.',
      tags: ['React', 'Vue.js', 'TypeScript'],
    },
    {
      title: 'Partner Portal (POC)',
      description: 'Led the proof of concept for a self-serve partner portal built on the reusable component system, enabling partners to build and manage custom landing pages. POC was not launched.',
      tags: ['React', 'PHP', 'TypeScript'],
    },
  ];

  const wpeNarrative = [
    {
      title: 'Reusable Component Library',
      description: 'Implemented a shared library of React and Gutenberg block components used across marketing, partner, and product pages. Enabled non-developers to build and manage custom landing pages while maintaining consistent UI patterns at scale across the WP Engine web ecosystem.',
    },
    {
      title: 'GA/GTM to Segment Migration',
      description: 'Led the migration of WP Engine\'s analytics and user tracking stack from Google Analytics and GTM to Segment. Enabled unified user profiling and personalized content delivery — serving different copy and recommendations to developers, agency owners, and non-technical business users based on their tracked behavior.',
    },
    {
      title: 'Pricing & Conversion Optimization',
      description: 'Drove significant conversion improvements across WP Engine\'s plan pages through A/B testing, plan simplification, and persona-targeted messaging. Resolved significant user drop-off during checkout by restructuring plan offerings to clarify differences and guide users to the right solution.',
    },
    {
      title: 'Cross-Functional Technical Leadership',
      description: 'Served as the technical representative across cross-departmental projects — translating engineering constraints into plain language for stakeholders, representing the team on roadmaps and scopes of work, and building out the intake system (GravityForms + JIRA API) that managed project requests across 90 GitHub repositories.',
    },
  ];

  const wpeProjects = [
    {
      title: 'Managed WordPress Pricing',
      description: 'Implemented pricing pages across 4 managed WordPress plans. Built billing toggles, feature comparison tables, and Salesforce CRM pipelines. A/B tested plan positioning — contributed to 185% eCommerce plan purchase growth and 289% signups increase.',
      tags: ['React', 'PHP', 'Segment', 'Salesforce'],
      href: 'https://wpengine.com/plans/',
    },
    {
      title: 'eCommerce (WooCommerce) Pricing',
      description: 'Built the WooCommerce hosting pricing pages from scratch. Implemented feature differentiation UI and ran pricing experiments with Google Optimize to drive plan upgrades across the WooCommerce customer segment.',
      tags: ['React', 'PHP', 'Google Optimize'],
      href: 'https://wpengine.com/ecommerce-platform-pricing/',
    },
    {
      title: 'Agency Partner Portal',
      description: 'Implemented the WP Engine agency partner portal, supporting the agency program with custom landing pages and reusable components that let partners manage their presence without developer involvement.',
      tags: ['React', 'Gutenberg Blocks', 'PHP'],
      href: 'https://wpengine.com/agency-programs/',
    },
    {
      title: 'Agency Directory',
      description: 'Built the WP Engine agency partner directory — a filterable card grid letting businesses find vetted WordPress agencies by specialty, budget, region, and partner tier. Still in use today.',
      tags: ['React', 'WordPress', 'PHP'],
      href: 'https://wpengine.com/agency-directory/',
    },
    {
      title: 'Velocitize',
      description: 'Built and redesigned Velocitize, WP Engine\'s digital marketing publication targeting entrepreneurs, marketers, and agency professionals.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
      href: 'https://velocitize.com',
    },
    {
      title: 'Torque Magazine',
      description: 'Built and redesigned Torque, WP Engine\'s WordPress-focused publication serving developers, designers, and agencies with news, tutorials, and industry content.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
      href: 'https://torquemag.io',
    },
    {
      title: 'StudioPress',
      description: 'Built and redesigned StudioPress, WP Engine\'s premium WordPress theme and Genesis Framework platform serving 260K+ customers and 600K+ sites.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
      href: 'https://www.studiopress.com',
    },
    {
      title: 'Decode Events Platform',
      description: 'Built the WP Engine Decode conference event platform using React and WordPress. Handled registration, session management, and attendee experience for WP Engine\'s annual developer conference.',
      tags: ['React', 'WordPress', 'PHP'],
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
      description: "Next.js demo built to showcase FastSpring's embedded checkout and SBL integration. Simulates a SaaS pricing flow with localized pricing, webhook processing, and live event logging.",
    },
    {
      name: "Partner Directory",
      url: "https://github.com/cgarza1992/partner-directory",
      description: "Reusable, filterable card grid built with Vue 3 Composition API. A generalized reference of enterprise partner directory work — supports multi-dimensional filtering for partner directories, app marketplaces, or any catalog UI.",
    },
    {
      name: "Script Queries",
      url: "https://github.com/cgarza1992/script-queries",
      description: "PHP scripts for WordPress database management. Exports posts to CSV, validates URLs in bulk, and filters data based on custom criteria.",
    },
  ];

  const aboutHighlights = [
    "Led enterprise-scale consolidation of 10 shipping & logistics brands at Auctane",
    "Increased eCommerce plan purchases 185% and Average Revenue per User 101% at WP Engine",
    "Increased signups 289% and add-ons purchased 105% by simplifying plan pages",
    "Grew and mentored the WP Engine web team from 2 developers to a 14-person multidisciplinary force",
    "Built high-performance web apps with React, Vue.js, Next.js, TypeScript, PHP, and WordPress",
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

        <AuctaneWork metrics={auctaneMetrics} narrative={auctaneNarrative} projects={auctaneProjects} />

        <WPEngineWork metrics={wpeMetrics} narrative={wpeNarrative} projects={wpeProjects} />

        <OpenSourceProjects projects={githubProjects} />

        <SkillsSection skills={skills} />

        <AboutSection
          profileImage="https://avatars.githubusercontent.com/u/17697283?v=4"
          title="About Me"
          bio="I'm a Senior Full-Stack Engineer with 9+ years of experience designing and building complex web applications. Most recently at Auctane, where I led enterprise-scale consolidation of 10 shipping & logistics brands. Previously at WP Engine, a $134M ARR WordPress platform. My focus is on translating business challenges into elegant technical solutions. I've driven substantial revenue growth through UI/UX optimization, led cross-functional teams, and architected scalable systems that serve millions of users."
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
