'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
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
import type { PlanTileData } from '@/components/molecules/PlanTile';

const auctanePlans: PlanTileData[] = [
  {
    id: 'auctane-shipstation-starter',
    name: 'ShipStation Starter',
    price: '$14.99',
    priceLabel: '/mo',
    tagline: 'Multi-channel shipping for small businesses.',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      { label: 'Multi-carrier shipping', included: true },
      { label: 'Order management', included: true },
      { label: 'Branded labels', included: true },
      { label: 'Automation rules', included: false },
    ],
    contribution: 'Implemented the Starter plan page including the multi-carrier feature comparison table and real-time plan selector. Part of migrating Auctane to Segment — wired tracking events to build user profiles and personalize copy for small business owners vs. developers.',
    ctaHref: 'https://www.shipstation.com/pricing/',
  },
  {
    id: 'auctane-shipstation-standard',
    name: 'ShipStation Standard',
    price: '$29.99',
    priceLabel: '/mo',
    tagline: 'Growing businesses that need more automation and carriers.',
    gradient: 'from-blue-500 to-cyan-500',
    badge: { label: 'Most Popular', variant: 'popular' },
    features: [
      { label: 'Multi-carrier shipping', included: true },
      { label: 'Unlimited automations', included: true },
      { label: 'Custom branding', included: true },
      { label: 'Shipping API access', included: true },
    ],
    contribution: 'Ran A/B experiments on CTA copy, plan positioning, and feature callouts. Led the migration to Segment at Auctane, enabling campaign data to surface targeted messaging to business users vs. technical users based on their tracked behavior.',
    ctaHref: 'https://www.shipstation.com/pricing/',
  },
  {
    id: 'auctane-shipstation-premium',
    name: 'ShipStation Premium',
    price: '$349.99',
    priceLabel: '/mo',
    tagline: 'High-volume operations with advanced warehouse management.',
    gradient: 'from-blue-500 to-cyan-500',
    badge: { label: 'Best Value', variant: 'value' },
    features: [
      { label: 'Advanced inventory mgmt', included: true },
      { label: 'Shipping API access', included: true },
      { label: 'Custom analytics', included: true },
      { label: 'Dedicated support', included: true },
    ],
    contribution: 'Implemented the Premium tier pricing component with multicurrency support. Built the Segment integration tracking plan page engagement and feeding upgrade attribution into HubSpot. Leveraged Tray.io to route leads to the correct sales pipeline based on user profile.',
    ctaHref: 'https://www.shipstation.com/pricing/',
  },
  {
    id: 'auctane-shipengine',
    name: 'ShipEngine API',
    price: 'Pay as you go',
    tagline: 'Shipping API for developers and platforms.',
    gradient: 'from-cyan-500 to-teal-500',
    badge: { label: 'Enterprise', variant: 'enterprise' },
    features: [
      { label: 'Multi-carrier API', included: true },
      { label: 'Rate shopping', included: true },
      { label: 'Tracking webhooks', included: true },
      { label: 'SLA guarantees', included: true },
    ],
    contribution: 'Rebuilt the ShipEngine pricing page end-to-end. Implemented the API pricing calculator and feature comparison. Used Segment to identify developer vs. business persona and serve tailored content via Tray.io workflows routing enterprise leads across Auctane brands.',
    ctaHref: 'https://www.shipengine.com/pricing/',
  },
];

const wpeManagedPlans: PlanTileData[] = [
  {
    id: 'wpe-startup',
    name: 'Startup',
    price: '$30',
    priceLabel: '/mo',
    tagline: 'For new WordPress sites and small projects.',
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      { label: '1 WordPress Install', included: true },
      { label: '10GB Storage', included: true },
      { label: 'Free SSL', included: true },
      { label: 'Staging Environment', included: false },
    ],
    contribution: 'Implemented the Startup plan layout, feature comparison table, and billing toggle between monthly and annual cycles. Instrumented with GTM and GA to track user behavior, feeding into the broader migration from GA to Segment for unified user profiling.',
    ctaHref: 'https://wpengine.com/plans/',
  },
  {
    id: 'wpe-professional',
    name: 'Professional',
    price: '$59',
    priceLabel: '/mo',
    tagline: 'For growing sites that need more power.',
    gradient: 'from-emerald-500 to-teal-500',
    badge: { label: 'Most Popular', variant: 'popular' },
    features: [
      { label: '3 WordPress Installs', included: true },
      { label: '15GB Storage', included: true },
      { label: 'Staging Environment', included: true },
      { label: 'CDN Included', included: true },
    ],
    contribution: 'Implemented the Most Popular highlight treatment and feature comparison logic. A/B tested CTA copy and plan positioning. Part of the GA/GTM to Segment migration — used Segment profiles to personalize content for developers, agency owners, and non-technical business reps.',
    ctaHref: 'https://wpengine.com/plans/',
  },
  {
    id: 'wpe-growth',
    name: 'Growth',
    price: '$115',
    priceLabel: '/mo',
    tagline: 'For agencies and high-traffic sites.',
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      { label: '10 WordPress Installs', included: true },
      { label: '20GB Storage', included: true },
      { label: 'Advanced Security', included: true },
      { label: 'Priority Support', included: true },
    ],
    contribution: 'Implemented agency-focused feature callouts and the Salesforce CRM pipeline for Growth-tier sign-ups. Leveraged Segment user profiles to surface relevant content for agency owners vs. individual site managers.',
    ctaHref: 'https://wpengine.com/plans/',
  },
  {
    id: 'wpe-scale',
    name: 'Scale',
    price: '$290',
    priceLabel: '/mo',
    tagline: 'For enterprise teams and large agencies.',
    gradient: 'from-emerald-500 to-teal-500',
    badge: { label: 'Best Value', variant: 'value' },
    features: [
      { label: '30 WordPress Installs', included: true },
      { label: '50GB Storage', included: true },
      { label: 'Dedicated Account Manager', included: true },
      { label: 'Custom SLA', included: true },
    ],
    contribution: 'Owned Scale tier end-to-end — pricing logic, feature gates, and enterprise CTA flows. Implemented the Salesforce pipeline with custom deal stages. Used Segment to route enterprise prospects to the right account team based on their tracked profile.',
    ctaHref: 'https://wpengine.com/plans/',
  },
];

const wpeEcommercePlans: PlanTileData[] = [
  {
    id: 'wpe-ecom-starter',
    name: 'eCommerce Starter',
    price: '$35',
    priceLabel: '/mo',
    tagline: 'WooCommerce hosting for new stores.',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      { label: 'WooCommerce Optimized', included: true },
      { label: 'Automated Backups', included: true },
      { label: 'Free SSL', included: true },
      { label: 'CDN Included', included: false },
    ],
    contribution: 'Built the eCommerce pricing page from scratch. Implemented the WooCommerce feature differentiation UI and connected the checkout flow to FastSpring for subscription billing. Instrumented with GTM and GA as part of the migration toward Segment-based user profiling.',
    ctaHref: 'https://wpengine.com/ecommerce-platform-pricing/',
  },
  {
    id: 'wpe-ecom-growth',
    name: 'eCommerce Growth',
    price: '$125',
    priceLabel: '/mo',
    tagline: 'High-performance hosting for scaling stores.',
    gradient: 'from-purple-500 to-pink-500',
    badge: { label: 'Enterprise', variant: 'enterprise' },
    features: [
      { label: 'WooCommerce Optimized', included: true },
      { label: 'CDN Included', included: true },
      { label: 'Priority Support', included: true },
      { label: 'Advanced Analytics', included: true },
    ],
    contribution: 'Implemented the Growth eCommerce tier page and performance-focused feature callouts. Ran pricing experiments with Google Optimize. Used Segment user profiles to deliver targeted content to high-volume store operators vs. new merchants.',
    ctaHref: 'https://wpengine.com/ecommerce-platform-pricing/',
  },
];

export default function Home() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend & Tools", items: ["Node.js", "PHP", "APIs", "Git/GitHub", "CircleCI", "REST"] },
    { category: "Specializations", items: ["Performance Optimization", "A/B Testing", "Team Leadership", "Technical Documentation", "UI/UX", "Mentorship"] },
  ];

  const auctaneMetrics = [
    { value: "185%", label: "Revenue Growth" },
    { value: "10", label: "Consolidated Brands" },
    { value: "$134M+", label: "ARR Managed" },
  ];

  const auctaneHighlights = [
    {
      title: 'ShipStation Free Trial Signup',
      description: 'Implemented the multi-field trial signup form with shipment volume segmentation, reCAPTCHA validation, and CRM routing. Used Segment to profile incoming users and personalize the post-signup experience.',
      tags: ['React', 'Segment', 'Tray.io', 'HubSpot'],
      href: 'https://www.shipstation.com/start-a-free-trial/',
    },
    {
      title: 'ShipEngine API Signup',
      description: 'Implemented the developer-focused API signup form, connected to the billing pipeline and CRM. Integrated Segment tracking to route developer vs. business signups through the appropriate onboarding flow.',
      tags: ['React', 'Segment', 'Tray.io'],
      href: 'https://www.shipengine.com/signup/',
    },
    {
      title: 'Reusable Component System',
      description: 'Built a library of reusable React components enabling marketing and content teams to assemble custom landing pages without developer involvement.',
      tags: ['React', 'TypeScript', 'Component Library'],
    },
    {
      title: 'Partner Portal (POC)',
      description: 'Led the proof of concept for a self-serve partner portal built on the reusable component system, enabling partners to build and manage custom landing pages. POC was not launched.',
      tags: ['React', 'Vue.js', 'Partner Portal'],
    },
  ];

  const wpeHighlights = [
    {
      title: 'Agency Partner Portal',
      description: 'Implemented the WP Engine agency partner portal, supporting the agency program with custom landing pages, a partner directory, and reusable components that let partners manage their presence without developer involvement.',
      tags: ['React', 'Gutenberg Blocks', 'PHP'],
      href: 'https://wpengine.com/agency-programs/',
    },
    {
      title: 'Reusable Component Library',
      description: 'Implemented a shared library of React and WordPress block components used across marketing, partner, and product landing pages. Reduced page build time and ensured consistent UI patterns at scale.',
      tags: ['React', 'Gutenberg Blocks', 'PHP'],
    },
    {
      title: 'Decode Events Platform',
      description: 'Built the WP Engine Decode conference event platform using React and WordPress. Handled registration, session management, and attendee experience for WP Engine\'s annual developer conference.',
      tags: ['React', 'WordPress', 'PHP'],
    },
    {
      title: 'GA/GTM to Segment Migration',
      description: 'Migrated WP Engine\'s analytics and user tracking stack from Google Analytics and GTM to Segment, enabling unified user profiling and personalized content delivery across the platform.',
      tags: ['Segment', 'GTM', 'Google Analytics'],
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
      description: "Reusable, filterable card grid built with Vue 3 Composition API. A generalized reference of enterprise partner/integration directory work — supports multi-dimensional filtering for partner directories, app marketplaces, or any catalog UI.",
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
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <Navigation />

        <Hero
          title="Senior Full-Stack Engineer"
          subtitle="Building high-performance web solutions for complex, business-critical projects. Proven track record: 185% revenue growth, helped scale engineering team from 2 to 14 through mentoring and hiring, architected enterprise-scale migrations."
          image="https://christopherwp.wpenginepowered.com/wp-content/uploads/2017/08/profile_triumph_pic.jpg"
          ctaPrimary={{ text: "Get In Touch", href: "#contact" }}
          ctaSecondary={{ text: "View GitHub", href: "https://github.com/cgarza1992" }}
        />

        <AuctaneWork metrics={auctaneMetrics} pricingPlans={auctanePlans} workHighlights={auctaneHighlights} />

        <WPEngineWork managedPlans={wpeManagedPlans} ecommercePlans={wpeEcommercePlans} workHighlights={wpeHighlights} />

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
    </Provider>
  );
}
