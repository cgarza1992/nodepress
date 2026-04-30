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
import { GradientText } from '@/components/atoms/GradientText';
import { AuctaneWork } from '@/components/organisms/AuctaneWork';
import { WPEngineWork } from '@/components/organisms/WPEngineWork';

export default function Home() {
  const skills = [
    {
      category: "Languages & Markup",
      items: ["JavaScript", "TypeScript", "PHP", "Cascading Style Sheets (CSS)", "HyperText Markup Language 5 (HTML5)", "JavaScript XML (JSX)", "TypeScript XML (TSX)"],
    },
    {
      category: "Frameworks & Technologies",
      items: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Sass", "Webpack", "Grunt/Gulp", "Node Package Manager (NPM) / Yarn", "Composer", "WP-CLI", "Prisma"],
    },
    {
      category: "APIs & Integrations",
      items: ["Representational State Transfer (REST) APIs", "HubSpot", "Salesforce", "Segment", "Google Accounts (OAuth2 / OIDC)", "Google Optimize", "Optimizely", "CircleCI", "GitHub Actions", "Git/GitHub", "Claude Artificial Intelligence (AI) / Model Context Protocol (MCP)"],
    },
    {
      category: "Testing & Quality",
      items: ["Jest", "PHPUnit", "Codeception", "PHPSpec", "Visual Regression Testing (Playwright / GitHub Actions CI)", "JSHint / JSLint"],
    },
    {
      category: "Practices",
      items: ["A/B Testing", "Test-Driven Development (TDD)", "Object-Oriented Programming (OOP)", "Functional Programming", "Continuous Integration / Deployment (CI/CD)", "Performance Optimization"],
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
      description: 'Built the ShipStation Free Trial signup flow, including shipment volume segmentation that powered ICP identification at point of entry. Integrated reCAPTCHA v3 and Blackbox.io as part of a cross-organizational anti-fraud initiative to reduce bot-driven trial starts without impacting legitimate signups. Connected the OAuth2/OIDC provisioning flow to handle account creation directly from ShipStation.com into the app. Routed all signups through Segment for persona-based onboarding targeting.',
      tags: ['React', 'TypeScript', 'Segment', 'Tray.io', 'HubSpot', 'OAuth2', 'OIDC', 'reCAPTCHA', 'Blackbox.io'],
      href: 'https://www.shipstation.com/start-a-free-trial/',
    },
    {
      title: 'ShipEngine API Signup',
      description: 'Replaced a bare-bones Gravity Form that was routing developer signups to a single inbox. Rebuilt the ShipEngine API signup with proper CRM integration and Segment routing to profile incoming signups and direct developer vs. business personas through tailored onboarding flows — different messaging, different first-touch sequences, different sales routing based on signup signals.',
      tags: ['React', 'TypeScript', 'Segment', 'Tray.io'],
      href: 'https://www.shipengine.com/signup/',
    },
    {
      title: 'Reusable Component System',
      description: 'Built a library of reusable React and Vue components enabling marketing and content teams to assemble custom landing pages without developer involvement.',
      tags: ['React', 'Vue.js', 'TypeScript'],
    },
    {
      title: 'ShipStation Partner Ecosystem',
      description: 'Built the ShipStation partner ecosystem, including a public-facing carrier and integration directory spanning hundreds of partners across carriers, marketplaces, and eCommerce platforms. Powered by a REST API data layer that served as the single source of truth across Auctane brands. Included relevancy searching with weighted scoring so the most relevant partners surfaced based on user context, and an authenticated self-serve portal with SSO/OAuth2 (OIDC) so partners could log in and manage their own listings directly.',
      tags: ['React', 'PHP', 'TypeScript', 'REST API', 'OAuth2', 'OIDC'],
      href: 'https://www.shipstation.com/partners/',
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
    },
    {
      title: 'Agency Partner Portal',
      description: 'The WP Engine Agency Partner Program was a cornerstone of enterprise acquisition. Agencies referred clients to WP Engine hosting, and WP Engine referred projects to partner agencies. Implemented the program portal and infrastructure that powered this bidirectional referral relationship, including a nightly cron job to sync partner data with the main website and push any updates automatically. Built on the reusable component library to let partners self-manage their presence.',
      tags: ['React', 'PHP', 'WordPress'],
      href: 'https://wpengine.com/agency-programs/',
    },
    {
      title: 'Agency Directory',
      description: 'Built the WP Engine agency partner directory — a filterable card grid letting businesses find vetted WordPress agencies by specialty, budget, region, and partner tier. Still in use today.',
      tags: ['React', 'WordPress', 'PHP'],
      href: 'https://wpengine.com/agency-directory/',
    },
    {
      title: 'StudioPress',
      description: 'Built and redesigned StudioPress, WP Engine\'s premium WordPress theme and Genesis Framework platform serving 260K+ customers and 600K+ sites. Rebuilt the site from legacy PHP templates and WYSIWYG editing to a modern Gutenberg and React stack. Added theme search and listing APIs surfaced on wpengine.com, and migrated the StudioPress buyer journey onto wpengine.com to consolidate the purchase funnel.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks', 'REST API'],
      href: 'https://www.studiopress.com',
    },
    {
      title: 'Velocitize',
      description: 'Built Velocitize from the ground up, WP Engine\'s digital marketing publication.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
      href: 'https://velocitize.com',
    },
    {
      title: 'Torque Magazine',
      description: 'Inherited and modernized Torque, WP Engine\'s WordPress news and tutorials publication. Migrated the site from legacy code to a Gutenberg and React stack, moving away from PHP templates and WYSIWYG editing.',
      tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
      href: 'https://torquemag.io',
    },
    {
      title: 'Decode Conference Platform',
      description: 'Built the WP Engine Decode conference platform on a specialized WP Engine hosting configuration optimized for scale, including a custom cache-key cookie to serve personalized content while maintaining full-page caching, an email loop for session reminders and updates, and an ultra-lite login system using magic links for frictionless attendee authentication.',
      tags: ['React', 'WordPress', 'PHP'],
    },
    {
      title: 'Flywheel',
      description: 'Led CRO and frontend modernization for Flywheel, WP Engine\'s managed WordPress hosting brand for designers and agencies. Migrated landing page infrastructure from hardcoded jQuery templates to React components, enabling marketing teams to iterate on layout and copy without developer involvement. Redesigned the pricing structure and buyer journey to improve plan clarity and purchase conversion.',
      tags: ['WordPress', 'React', 'JavaScript', 'CRO', 'PHP'],
      href: 'https://getflywheel.com',
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

  const aboutHighlights = [
    "Background in Advertising & Mass Communication, bridging the gap between technical and non-technical teams",
    "Grew and mentored the WP Engine web team from 2 to 14 people, building the first engineer onboarding program, leading peer mentoring, and navigating the team through org change",
    "Focused on translating complex business problems into clean, maintainable engineering solutions",
    "Open to roles that challenge me to grow across the full stack and contribute to teams doing meaningful work",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white">
        <Navigation />

        <Hero
          title={<>Senior Software Engineer<br /><GradientText>Frontend</GradientText></>}
          subtitle="Engineer at the seam of marketing and engineering, building the technical systems behind pricing, conversion, and analytics for enterprise products. Frontend to backend, data pipelines to component libraries. Most engineers pick a side. I've spent my career not having to. The work shows up in the metrics, not just the repo."
          image="/profile_triumph_pic.jpg"
          ctaPrimary={{ text: "Get In Touch", href: "#contact" }}
          ctaSecondary={{ text: "View GitHub", href: "https://github.com/cgarza1992" }}
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

        <OpenSourceProjects projects={githubProjects} />

        <SkillsSection skills={skills} />

        <AboutSection
          profileImage="https://avatars.githubusercontent.com/u/17697283?v=4"
          title="Christopher Garza"
          bio="I started in Advertising & Mass Communication, taught myself to code, and spent nearly 7 years at WP Engine before moving to Auctane. That non-traditional path shaped how I work: I care about the business problem as much as the technical solution, I communicate clearly across teams, and I build things that are meant to last. When I'm not at a keyboard I'm in the garage, currently building out a custom 1985 BMW K100 or riding my café racer Bonneville T100 through the Texas hill country."
          highlights={aboutHighlights}
        />

        <ContactSection
          email="christopher.pgarza@gmail.com"
          linkedin="https://www.linkedin.com/in/christopher-garza-dev/"
          message="Open to opportunities that challenge me to grow. Whether it's a new role, a project, or just want to connect—I'd love to hear from you."
        />

        <Footer year={2026} name="Christopher Garza" />
    </div>
  );
}
