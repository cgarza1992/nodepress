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
    id: 'auctane-shipstation',
    name: 'ShipStation Starter',
    price: '$9',
    priceLabel: '/mo',
    tagline: 'Multi-channel shipping for small businesses.',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      { label: 'Multi-carrier shipping', included: true },
      { label: 'Order management', included: true },
      { label: 'Branded labels', included: true },
      { label: 'Automation rules', included: false },
    ],
    contribution: 'Built the Starter plan page with a multi-carrier feature comparison table. Implemented the plan selector with real-time price updates and connected it to the billing pipeline.',
    ctaHref: 'https://www.shipstation.com/pricing/',
  },
  {
    id: 'auctane-shipstation-bronze',
    name: 'ShipStation Bronze',
    price: '$29',
    priceLabel: '/mo',
    tagline: 'Growing businesses shipping up to 500 orders/mo.',
    gradient: 'from-blue-500 to-cyan-500',
    badge: { label: 'Popular', variant: 'popular' },
    features: [
      { label: 'Multi-carrier shipping', included: true },
      { label: 'Automation rules', included: true },
      { label: 'Custom branding', included: true },
      { label: 'API access', included: false },
    ],
    contribution: 'Owned the Bronze tier A/B test strategy. Ran multiple experiments on CTA copy, plan positioning, and feature callouts to optimize conversions.',
    ctaHref: 'https://www.shipstation.com/pricing/',
  },
  {
    id: 'auctane-shipstation-gold',
    name: 'ShipStation Gold',
    price: '$99',
    priceLabel: '/mo',
    tagline: 'High-volume shipping with advanced automation.',
    gradient: 'from-blue-500 to-cyan-500',
    badge: { label: 'Best Value', variant: 'value' },
    features: [
      { label: 'Unlimited shipments', included: true },
      { label: 'API access', included: true },
      { label: 'Multiple users', included: true },
      { label: 'Dedicated support', included: true },
    ],
    contribution: 'Architected the Gold tier pricing component with multicurrency support across 5 regions. Built the Segment integration that tracked plan page engagement and fed upgrade attribution data to HubSpot.',
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
    contribution: 'Led the ShipEngine pricing page redesign. Built the developer-focused feature comparison and API pricing calculator. Integrated Tray.io workflows for enterprise lead routing across Auctane brands.',
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
    contribution: 'Owned the Startup plan layout and feature comparison table. Built the billing toggle between monthly and annual cycles, wired to HubSpot for lead capture.',
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
    contribution: 'Designed the Most Popular highlight treatment and built the feature comparison logic. A/B tested CTA copy and plan positioning to drive Professional tier upgrades.',
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
    contribution: 'Built agency-focused feature callouts and Salesforce CRM pipeline for Growth-tier sign-ups. Implemented territory-based routing logic for regional sales teams.',
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
    contribution: 'Owned Scale tier end-to-end — pricing logic, feature gates, enterprise CTA flows. Architected the data pipeline syncing Scale sign-ups to Salesforce with custom deal stages.',
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
    contribution: 'Built the eCommerce pricing page from scratch. Implemented WooCommerce feature differentiation UI and connected the checkout flow to FastSpring for subscription billing.',
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
    contribution: 'Designed the Growth eCommerce tier\'s performance messaging. Ran pricing experiments with Google Optimize to drive plan upgrades across the WooCommerce customer segment.',
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

        <AuctaneWork metrics={auctaneMetrics} pricingPlans={auctanePlans} />

        <WPEngineWork managedPlans={wpeManagedPlans} ecommercePlans={wpeEcommercePlans} />

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
