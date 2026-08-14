import type { Metadata } from 'next';
import { buildMetadata, siteConfig } from '@/lib/seo';
import {
  Navigation,
  Hero,
  OpenSourceProjects,
  SkillsSection,
  AboutSection,
  ContactSection,
  Footer,
} from '@/components';
import { GradientText } from '@/components/atoms/GradientText';
import { IndependentWork } from '@/components/organisms/IndependentWork';
import { AuctaneWork } from '@/components/organisms/AuctaneWork';
import { WPEngineWork } from '@/components/organisms/WPEngineWork';
import { TechnicalDemos } from '@/components/organisms/TechnicalDemos';
import { FastSpringPreview } from '@/components/molecules/FastSpringPreview';
import { DirectoryPreview } from '@/components/molecules/DirectoryPreview';
import { ComponentLibraryPreview } from '@/components/molecules/ComponentLibraryPreview';

export const metadata: Metadata = buildMetadata({
  title: 'Senior Software Engineer, Frontend',
  description: 'Senior Software Engineer, Frontend at the seam between marketing and engineering. Building the technical systems behind pricing, conversion, and analytics for enterprise products. React • TypeScript • Next.js • Node.js',
  path: '/',
  type: 'website',
});

export default function Home() {
  const skills = [
    {
      category: "Languages & Markup",
      items: ["JavaScript", "TypeScript", "PHP", "CSS", "HTML5", "JSX", "TSX"],
    },
    {
      category: "Frameworks & Technologies",
      items: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Sass", "Webpack", "NPM / Yarn", "Composer", "WP-CLI", "Prisma", "Storybook"],
    },
    {
      category: "APIs & Integrations",
      items: ["REST APIs", "HubSpot", "Salesforce", "Segment", "OAuth2 / OIDC", "Google Optimize", "Optimizely", "CircleCI", "GitHub Actions", "Git/GitHub", "Claude / MCP"],
    },
    {
      category: "Testing & Quality",
      items: ["Jest", "PHPUnit", "Codeception", "PHPSpec", "Visual Regression Testing", "Storybook"],
    },
    {
      category: "Practices",
      items: ["A/B Testing", "TDD", "OOP", "Functional Programming", "CI/CD", "Performance Optimization"],
    },
    {
      category: "Leadership & Collaboration",
      items: ["Mentorship", "Technical Documentation", "Cross-Functional Collaboration", "Project Scoping & Management", "Team Leadership"],
    },
  ];

  const auctaneMetrics = [
    { value: "10", label: "Brands Consolidated" },
    { value: "+12%", label: "ShipStation ICP Trial Conversions (A/B)" },
    { value: "+6.6%", label: "Stamps.com Accounts Created (A/B)" },
  ];

  const wpeMetrics = [
    { value: "$60M → $245M", label: "ARR Growth During Tenure" },
    { value: "185%", label: "eCommerce Plan Purchases" },
    { value: "289%", label: "Signups Increase" },
    { value: "2x", label: "Avg Revenue Per User (ARPU)" },
  ];

  const auctaneNarrative = [
    {
      title: 'Multi-Brand Consolidation',
      description: 'Led technical implementation of the strategic consolidation of 10 shipping & logistics brands (ShipStation, ShipEngine, Stamps.com, Packlink, MetaPack, Endicia, ShippingEasy, ShipWorks, GlobalPost, Return Rabbit). Involved migrating pricing models, consolidating billing systems, and creating unified API experiences serving logistics partners and merchants globally.',
    },
    {
      title: 'Reusable Component Architecture',
      description: 'Built scalable component libraries in React and Vue that powered redesigns across multiple Auctane brands. Enabled marketing teams to assemble and publish landing pages without a developer in the loop. Brand homepages are a direct example: designers could update components directly, with content localized by GeoIP to serve regional variations, without a dev stop. On projects where this system was used, design and development time dropped to roughly 1/4 of the original timeline. The real bottleneck shifted from build time to stakeholder approval.',
    },
    {
      title: 'A/B Testing Infrastructure',
      description: 'Wired the component system into A/B testing infrastructure across Google Optimize and Optimizely. Built custom variant detection and conditional flow logic beyond what the native platforms supported, triggering different user flows and surfacing different content based on which experiment variant a user was assigned to. Enabled marketing teams to run experiments and iterate on copy, layout, and structure independently.',
    },
    {
      title: 'Multi-Brand Ecosystem',
      description: 'Managed pricing and front-end implementations across Auctane\'s diverse shipping brand portfolio, ensuring seamless data pipeline integrations with HubSpot, Salesforce, Tray.io, and other enterprise APIs while maintaining distinct brand identities.',
    },
    {
      title: 'Data Pipeline & Analytics',
      description: 'Drove the evaluation and purchase of Segment at Auctane as the central analytics and data pipeline platform. Led the migration with a focus on continuity, preserving user tracking and purchase pipeline data without interruption. Owned the data collection layer, instrumenting events on the website and sourcing clean, structured data for the analytics team to work with downstream. Routed data through Tray into data warehouses, Salesforce, and HubSpot, and connected product signups to unified user profiles for persona-based onboarding targeting.',
    },
  ];

  const auctaneProjects = [
    {
      title: 'ShipStation Pricing Pages',
      description: 'Implemented pricing pages across the Starter, Standard, and Premium plans — plan selectors, feature comparison tables, and A/B tested CTA copy. Led Auctane\'s migration to Segment to personalize plan recommendations based on user profile.',
      tags: ['React', 'TypeScript', 'Segment', 'Salesforce', 'Tray.io', 'HubSpot', 'A/B Testing'],
      href: 'https://www.shipstation.com/pricing/',
      caseStudy: '/case-studies/auctane-cro',
      image: '/brands/Auctane/Shipstation/shipstation-pricing-page.png',
    },
    {
      title: 'ShipEngine Pricing',
      description: 'Rebuilt the ShipEngine pricing page end-to-end. Implemented the API pricing calculator and developer-focused feature comparison. Used Segment to serve tailored content to developer vs. business personas via Tray.io enterprise lead routing.',
      tags: ['React', 'TypeScript', 'Segment', 'Salesforce', 'Tray.io', 'A/B Testing'],
      href: 'https://www.shipengine.com/pricing/',
      image: '/brands/Auctane/Shipengine/shipengine-pricing-page.png',
    },
    {
      title: 'ShipStation Free Trial Signup',
      description: 'Built the ShipStation Free Trial signup flow, including shipment volume segmentation that powered ICP identification at point of entry. Integrated reCAPTCHA v3 and Blackbox.io as part of a cross-organizational anti-fraud initiative to reduce bot-driven trial starts without impacting legitimate signups. Connected the OAuth2/OIDC provisioning flow to handle account creation directly from ShipStation.com into the app. Routed all signups through Segment for persona-based onboarding targeting.',
      tags: ['React', 'TypeScript', 'Segment', 'Tray.io', 'HubSpot', 'OAuth2', 'OIDC', 'reCAPTCHA', 'Blackbox.io'],
      href: 'https://www.shipstation.com/start-a-free-trial/',
      caseStudy: '/case-studies/auctane-cro',
      image: '/brands/Auctane/Shipstation/shipstation-trial-signup-page.png',
    },
    {
      title: 'ShipEngine API Signup',
      description: 'Replaced a bare-bones Gravity Form that was routing developer signups to a single inbox. Rebuilt the ShipEngine API signup with proper CRM integration and Segment routing to profile incoming signups and direct developer vs. business personas through tailored onboarding flows — different messaging, different first-touch sequences, different sales routing based on signup signals.',
      tags: ['React', 'TypeScript', 'Segment', 'Tray.io'],
      href: 'https://www.shipengine.com/signup/',
      image: '/brands/Auctane/Shipengine/shipengine-signup-page.png',
    },
    {
      title: 'Reusable Component System',
      description: 'Built a library of reusable React and Vue components enabling marketing and content teams to assemble custom landing pages without developer involvement.',
      tags: ['React', 'Vue.js', 'TypeScript'],
      preview: <ComponentLibraryPreview />,
    },
    {
      title: 'ShipStation Partner Ecosystem',
      description: 'Built the ShipStation partner ecosystem, including a public-facing carrier and integration directory spanning hundreds of partners across carriers, marketplaces, and eCommerce platforms. Powered by a REST API data layer that served as the single source of truth across Auctane brands. Included relevancy searching with weighted scoring so the most relevant partners surfaced based on user context, and an authenticated self-serve portal with SSO/OAuth2 (OIDC) so partners could log in and manage their own listings directly.',
      tags: ['React', 'PHP', 'TypeScript', 'REST API', 'OAuth2', 'OIDC'],
      href: 'https://www.shipstation.com/partners/',
      image: '/brands/Auctane/Shipstation/shipstation-partners-page.png',
    },
    {
      title: 'Stamps.com',
      description: 'Contributed to the Stamps.com site redesign using the shared Auctane component library, implementing updated pages for Auctane\'s postage and shipping brand serving small businesses and home offices. A/B tested signup and account creation flows — contributing to a +6.6% lift in accounts created.',
      tags: ['React', 'TypeScript', 'A/B Testing', 'Segment', 'Component Library'],
      href: 'https://www.stamps.com',
      caseStudy: '/case-studies/auctane-cro',
      image: '/brands/Auctane/Stamps/stamps-homepage.png',
    },
    {
      title: 'GlobalPost',
      description: 'Led the GlobalPost site redesign using the shared Auctane component library, applying GlobalPost\'s branding across a rebuilt marketing site for Auctane\'s international shipping subsidiary serving 220+ countries. Integrated the GlobalPost tracking API into a full package tracking user journey — letting ShipStation merchants and their end customers follow shipments in real time from the ShipStation interface through to international delivery confirmation.',
      tags: ['React', 'TypeScript', 'REST API', 'Segment', 'Component Library'],
      href: 'https://www.globalpost.com',
      image: '/brands/Auctane/GlobalPost/globalpost-homepage.png',
    },
    {
      title: 'MetaPack',
      description: 'Implemented the MetaPack site redesign using the shared Auctane component library, applying MetaPack\'s distinct enterprise branding across a new site architecture. MetaPack is Auctane\'s carrier management and delivery experience platform serving large-scale retailers and logistics operators across Europe.',
      tags: ['React', 'TypeScript', 'Component Library'],
      href: 'https://www.metapack.com',
      image: '/brands/Auctane/Metapack/metapack-homepage.png',
    },
    {
      title: 'Auctane.com',
      description: 'Built and maintained the Auctane corporate site — the parent company behind ShipStation, Stamps.com, ShipEngine, GlobalPost, and six other shipping brands. The site serves as the brand umbrella for Auctane\'s enterprise narrative: 3M+ customers worldwide, $200B+ in global transactions, 3B+ orders processed annually across the portfolio. Integrated the Greenhouse ATS API into a branded careers portal, pulling live job listings and surfacing them in a custom-designed experience consistent with Auctane brand standards.',
      tags: ['React', 'TypeScript', 'WordPress', 'Greenhouse API'],
      href: 'https://www.auctane.com',
      image: '/brands/Auctane/Auctane/auctane-homepage.png',
    },
  ];

  const wpeNarrative = [
    {
      title: 'Reusable Component Library',
      description: 'Implemented a shared library of React and Gutenberg block components used across marketing, partner, and product pages. Enabled non-developers to build and manage custom landing pages while maintaining consistent UI patterns at scale across the WP Engine web ecosystem.',
    },
    {
      title: 'GA/GTM to Segment Migration',
      description: 'Led WP Engine\'s analytics infrastructure overhaul. Drove the evaluation and purchase of Segment as the replacement analytics platform ahead of Google Analytics 4\'s end-of-life. Architected the migration plan to ensure site analytics continuity, preserving historical event data and maintaining CRM integrations with HubSpot and Salesforce without a gap in user tracking. Owned the data collection layer, instrumenting events on the website and sourcing clean, structured data for the analytics team to work with downstream. Migrating off GTM as middleware improved data fidelity between the site and downstream tools. Segment enabled unified user profiling that powered personalized content delivery across developer, agency, and non-technical business personas.',
    },
    {
      title: 'Chat Integrations',
      description: 'Managed chat infrastructure across the WP Engine marketing site and product portal, implementing and configuring LiveChat, Zendesk, and Intercom using custom SDK integrations. Built custom event tracking and lead routing logic, with CRM handoff into HubSpot and Salesforce to carry conversation context through to sales. The same integration patterns carried from the marketing site into the product portal.',
    },
    {
      title: 'Pricing & Conversion Optimization',
      description: 'Drove significant conversion improvements across WP Engine\'s plan pages through A/B testing, plan simplification, and persona-targeted messaging. Resolved significant user drop-off during checkout by restructuring plan offerings to clarify differences and guide users to the right solution.',
    },
    {
      title: 'Cross-Functional Technical Leadership',
      description: 'Served as the technical representative across cross-departmental projects — translating engineering constraints into plain language for stakeholders, representing the team on roadmaps and scopes of work, and building out the intake system (GravityForms + JIRA API) that managed project requests across 90 GitHub repositories.',
    },
    {
      title: 'Greenfield & Brownfield',
      description: 'Comfortable building from zero and inheriting what already exists. Built products like Velocitize and Decode from scratch, making early architecture decisions with no prior constraints. Also took ownership of established codebases — wpengine.com, StudioPress, the agency directory — where the work was about understanding what was already there, adding without breaking, and modernizing incrementally. Both require different instincts and the ability to switch between them is what lets you operate across a full product lifecycle.',
    },
  ];

  const wpeProjects = [
    {
      title: 'WP Engine Hosting Plans',
      description: 'Built the purchase funnel across WP Engine\'s hosting plans, bridging two separate systems: the marketing site where users selected plans, billing cycles, and add-ons through a Redux-driven interface with API-driven localized pricing in USD, EUR, AUD, and CAD, and the product portal where provisioning took place after purchase. Managed the state handoff between them so customer selections carried through to account creation without loss. Wired into Salesforce CRM pipelines. A/B tested plan positioning using Optimizely, contributing to 185% purchase growth in the eCommerce tier — WP Engine\'s dedicated platform for high-traffic online stores and enterprise-scale storefronts handling millions of visitors per month.',
      tags: ['React', 'Redux', 'PHP', 'Salesforce', 'Optimizely', 'Localized Pricing', 'REST API'],
      href: 'https://wpengine.com/plans/',
      caseStudy: '/case-studies/wpe-plans',
      image: '/brands/WP%20Engine/WP%20Engine/wpengine-plans-page.png',
    },
    {
      title: 'Agency Partner Portal',
      description: 'The WP Engine Agency Partner Program was a cornerstone of enterprise acquisition. Agencies referred clients to WP Engine hosting, and WP Engine referred projects to partner agencies. Implemented the program portal and infrastructure that powered this bidirectional referral relationship, including a nightly cron job to sync partner data with the main website and push any updates automatically. Built on the reusable component library to let partners self-manage their presence.',
      tags: ['React', 'PHP', 'WordPress'],
      href: 'https://wpengine.com/agency-programs/',
      image: '/brands/WP%20Engine/WP%20Engine/wpengine-agency-program-page.png',
    },
    {
      title: 'Agency Directory',
      description: 'Built the WP Engine agency partner directory — a filterable card grid letting businesses find vetted WordPress agencies by specialty, budget, region, and partner tier. Still in use today.',
      tags: ['React', 'WordPress', 'PHP'],
      href: 'https://wpengine.com/agency-directory/',
      image: '/brands/WP%20Engine/WP%20Engine/wpengine-agency-directory.png',
    },
    {
      title: 'StudioPress',
      description: 'Built and redesigned StudioPress, WP Engine\'s premium WordPress theme and Genesis Framework platform serving 260K+ customers and 600K+ sites. Rebuilt the site from legacy PHP templates and WYSIWYG editing to a modern Gutenberg and React stack. Added theme search and listing APIs surfaced on wpengine.com, and migrated the StudioPress buyer journey onto wpengine.com to consolidate the purchase funnel.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks', 'REST API'],
      href: 'https://www.studiopress.com',
      image: '/brands/WP%20Engine/Studiopress/studiopress-homepage.png',
    },
    {
      title: 'Torque Magazine',
      description: 'Inherited and modernized Torque, WP Engine\'s WordPress news and tutorials publication. Migrated the site from legacy code to a Gutenberg and React stack, moving away from PHP templates and WYSIWYG editing.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
      href: 'https://torquemag.io',
      image: '/brands/WP%20Engine/Torque%20Mag/torque-mag-homepage.png',
    },
    {
      title: 'Decode Conference Platform',
      description: 'Built the WP Engine Decode conference platform on a specialized WP Engine hosting configuration optimized for scale, including a custom cache-key cookie to serve personalized content while maintaining full-page caching, an email loop for session reminders and updates, and an ultra-lite login system using magic links for frictionless attendee authentication.',
      tags: ['React', 'WordPress', 'PHP'],
      image: '/brands/WP%20Engine/De-code/Decode-final-2021-thumbnail.png',
    },
    {
      title: 'Flywheel',
      description: 'Led CRO and frontend modernization for Flywheel, WP Engine\'s managed WordPress hosting brand for designers and agencies. Migrated landing page infrastructure from hardcoded jQuery templates to React components, enabling marketing teams to iterate on layout and copy without developer involvement. Redesigned the pricing structure and buyer journey to improve plan clarity and purchase conversion.',
      tags: ['WordPress', 'React', 'JavaScript', 'CRO', 'PHP'],
      href: 'https://getflywheel.com',
      image: '/brands/WP%20Engine/Flywheel/flywheel-homepage.png',
    },
    {
      title: 'Velocitize',
      description: 'Built Velocitize from the ground up, WP Engine\'s digital marketing publication.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
      href: 'https://velocitize.com',
      image: '/brands/WP%20Engine/Velocitize/velocitize-homepage.png',
    },
  ];

  const technicalDemos = [
    {
      title: 'FastSpring Pricing & Checkout Demo',
      description: 'A working demo of the pricing and checkout patterns I built for enterprise SaaS clients. Features API-driven localized pricing that adapts currency and amounts to the visitor\'s country, a popup checkout flow, and a split-view embedded checkout where users select plans before purchasing. Includes a live webhook event log showing real-time FastSpring events — orders, subscriptions, refunds — persisted via Prisma and streamed to the UI. Built with Next.js, TypeScript, Tailwind CSS, and Prisma Postgres.',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'REST API', 'Localized Pricing', 'Webhooks'],
      href: 'https://fastspring.christophergarza.dev',
      preview: <FastSpringPreview />,
    },
    {
      title: 'Partner Directory Demo',
      description: 'A generalized, open-source version of the partner directory and marketplace infrastructure I built for enterprise clients. Features multi-select filtering by region and category, relevance scoring with paid placement support, URL-synced filter state for shareable links, and a skeleton loading state. Built with Vue 3 and vanilla CSS — no build step, no dependencies.',
      tags: ['Vue.js', 'JavaScript', 'CSS', 'Open Source'],
      href: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://partners.christophergarza.dev',
      preview: <DirectoryPreview />,
    },
  ];

  const githubProjects = [
    {
      name: "NodePress CMS",
      url: "https://github.com/cgarza1992/nodepress",
      description: "Self-hosted CMS built to replace WordPress. Swaps MySQL for PostgreSQL with real relational integrity, eliminates PHP-to-React block duplication. Built with Next.js, Prisma, TypeScript.",
    },
    {
      name: "Partner Directory",
      url: "https://github.com/cgarza1992/partner-directory",
      description: "Reusable, filterable card grid built with Vue 3 Composition API. A generalized reference of enterprise partner directory work — supports multi-dimensional filtering for partner directories, app marketplaces, or any catalog UI.",
    },
    {
      name: "Script Queries",
      url: "https://github.com/cgarza1992/script-queries",
      description: "A collection of WordPress developer utilities: custom Gutenberg blocks for presenting plan data and multi-column layouts that let content editors work without a developer, and database query scripts for post content export, CSV generation, and URL validation across multisite installs.",
    },
    {
      name: "FastSpring Demo",
      url: "https://github.com/cgarza1992/fastspring_demo",
      description: "Next.js demo built to showcase FastSpring's embedded checkout and SBL integration. Simulates a SaaS pricing flow with localized pricing, webhook processing, and live event logging.",
    },
  ];

  const independentProjects = [
    {
      title: 'Job Application Autofill — Accessibility Tool',
      description: 'A Chrome extension (Manifest V3) that fills repetitive job-application forms from one profile you save locally, so applying doesn\'t mean retyping your name, work history, and essays into every portal by hand. Built as an accessibility tool first, for people (myself included) who find repetitive computer tasks physically hard. It never clicks Submit: it fills, shows everything in a review panel, and you confirm and send. It never touches EEO/demographic questions unless you opt in and provide your own answers, keeps all data on your machine (no account, no telemetry), and can draft essay answers with a local AI (Ollama) in your own voice. Handles the awkward widgets — react-select dropdowns, typeaheads, split-date pickers, résumé upload — across Workday, Greenhouse, and Ashby, with a graceful fallback for iframe-embedded forms. Accessible throughout: real labels, keyboard navigation, focus management, live status announcements, and colorblind-safe status cues.',
      tags: ['Chrome Extension', 'Manifest V3', 'TypeScript', 'Accessibility', 'Local AI (Ollama)', 'Privacy-first'],
      preview: (
        <video
          src="/autofill/autofill-demo.mp4"
          poster="/autofill/autofill-demo-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-label="The Job Application Autofill extension scanning a sample job form and filling it through a review panel"
          className="w-full aspect-[16/10] object-cover bg-slate-900"
        />
      ),
      requestAccess: {
        label: 'Request access',
        href: `mailto:${siteConfig.author.email}?subject=${encodeURIComponent('Access request: Job Application Autofill')}&body=${encodeURIComponent("Hi Christopher,\n\nI'd like access to try the Job Application Autofill extension.\n\n")}`,
      },
    },
    {
      title: 'Atlas — AI Chief of Staff for PMs',
      description: 'An AI chief of staff for project managers and SMB delivery teams — real-time intelligence across projects, clients, and team health without leaving the tools they already use. Includes a live call co-pilot with transcription, sentiment tracking, and agenda coaching; a delivery control panel with burndown, blockers, and velocity; and chat over meeting history and project data. Built with a FastAPI (Python) backend and a Next.js + TypeScript frontend, with BM25 full-text retrieval, a sentiment/morale engine, and a Teamwork integration. Supports a fully local LLM mode so sensitive project data never leaves the machine.',
      tags: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'AI', 'Local LLM', 'RAG'],
      image: '/atlas/atlas-core-dashboard.png',
      requestAccess: {
        label: 'Request a demo',
        href: `mailto:${siteConfig.author.email}?subject=${encodeURIComponent('Demo request: Atlas')}&body=${encodeURIComponent("Hi Christopher,\n\nI'd like a demo of Atlas.\n\n")}`,
      },
    },
  ];

  const aboutHighlights = [
    "Background in Advertising & Mass Communication, bridging the gap between technical and non-technical teams",
    "Grew and mentored the WP Engine web team from 2 to 14 people, building the first engineer onboarding program, leading peer mentoring, and navigating the team through org change",
    "Focused on translating complex business problems into clean, maintainable engineering solutions",
    "Open to senior frontend roles, especially ones where the frontend connects to business outcomes: pricing, conversion, analytics",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white">
        <Navigation />

        <Hero
          eyebrow={<>Senior Software Engineer · <GradientText>Frontend</GradientText> · 9+ years · Austin</>}
          title="Christopher Garza"
          subtitle="Senior frontend engineer building the technical systems behind pricing, conversion, and analytics for enterprise products. Frontend to backend, component libraries to data pipelines. Most engineers pick a side. I've spent my career not having to. The work shows up in the metrics, not just the repo."
          statusLine="Austin, TX · Remote-friendly · Available for freelance, contract & full-time"
          image="/profile_triumph_pic.jpg"
          ctaPrimary={{ text: "Get In Touch", href: "#contact" }}
          ctaSecondary={{ text: "View GitHub", href: "https://github.com/cgarza1992" }}
        />

        <IndependentWork
          description={<>Available for freelance, contract, and full-time work. Between roles I&apos;ve been using the time to build the tools and products I always wanted to use but couldn&apos;t find — accessible, privacy-first software shipped end to end across frontend, backend, and local AI. A few of them are below.</>}
          projects={independentProjects}
        />

        <AuctaneWork
          description={<>Led technical implementation of Auctane&apos;s brand consolidation, merging{' '}<span className="text-slate-900 dark:text-white font-semibold">10+ acquired companies</span> under unified corporate standards. Architected and executed complex site migrations, full-stack redesigns, and modernized legacy codebases across the Auctane shipping portfolio.</>}
          metrics={auctaneMetrics}
          narrative={auctaneNarrative}
          projects={auctaneProjects}
        />

        <WPEngineWork
          description={<>Grew from intern to Senior Software Engineer over nearly 7 years at WP Engine, a WordPress platform that scaled from{' '}<span className="text-slate-900 dark:text-white font-semibold">$60M to over $245M ARR</span> during my tenure. Built and maintained the marketing and product web ecosystem across multiple brands.</>}
          metrics={wpeMetrics}
          narrative={wpeNarrative}
          projects={wpeProjects}
        />

        <TechnicalDemos demos={technicalDemos} />

        <OpenSourceProjects projects={githubProjects} />

        <SkillsSection skills={skills} />

        <AboutSection
          profileImage="https://avatars.githubusercontent.com/u/17697283?v=4"
          title="Christopher Garza"
          bio="I started in Advertising and Mass Communication. Graduate coursework in JavaScript, PHP, and web development was my entry point into programming, and the rest came from shipping production work, first as a WP Engine intern, then over six and a half years there, then at Auctane. The non-traditional path is why I care about the business problem as much as the technical solution. I learned to write code by trying to make a product convert better. When I am not at a keyboard I am in the garage, currently building out a custom 1985 BMW K100 or riding my café raced Bonneville T100 through the Texas hill country."
          highlights={aboutHighlights}
        />

        <ContactSection
          email={siteConfig.author.email}
          linkedin="https://www.linkedin.com/in/christopher-garza-dev/"
          message="I am interviewing for senior frontend roles, growth-stage SaaS preferred. Austin or remote. Reply within 24 hours."
        />

        <Footer year={2026} name="Christopher Garza" />
    </div>
  );
}
