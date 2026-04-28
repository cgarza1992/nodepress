import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { WPEngineWork } from './WPEngineWork';

const meta: Meta<typeof WPEngineWork> = {
  title: 'Organisms/WPEngineWork',
  component: WPEngineWork,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WPEngineWork>;

const allNarrative = [
  {
    title: 'Reusable Component Library',
    description: 'Implemented a shared library of React and Gutenberg block components used across marketing, partner, and product pages. Enabled non-developers to build and manage custom landing pages while maintaining consistent UI patterns at scale.',
  },
  {
    title: 'GA/GTM to Segment Migration',
    description: 'Led the migration of analytics and user tracking from Google Analytics and GTM to Segment. Enabled unified user profiling and personalized content delivery across the platform.',
  },
  {
    title: 'Pricing & Conversion Optimization',
    description: 'Drove significant conversion improvements through A/B testing, plan simplification, and persona-targeted messaging. Resolved user drop-off during checkout by restructuring plan offerings.',
  },
  {
    title: 'Cross-Functional Technical Leadership',
    description: 'Served as the technical representative across cross-departmental projects. Built the intake system (GravityForms + JIRA API) managing requests across 90 GitHub repositories.',
  },
];

const allProjects = [
  {
    title: 'Managed WordPress Pricing',
    description: 'Implemented pricing pages across 4 managed WordPress plans. Built billing toggles, feature comparison tables, and Salesforce CRM pipelines.',
    tags: ['React', 'PHP', 'Segment', 'Salesforce'],
    href: 'https://wpengine.com/plans/',
  },
  {
    title: 'eCommerce (WooCommerce) Pricing',
    description: 'Built the WooCommerce hosting pricing pages from scratch with feature differentiation UI and pricing experiments via Google Optimize.',
    tags: ['React', 'PHP', 'Google Optimize'],
    href: 'https://wpengine.com/ecommerce-platform-pricing/',
  },
  {
    title: 'Agency Partner Portal',
    description: 'Implemented the WP Engine agency partner portal with custom landing pages and reusable components.',
    tags: ['React', 'Gutenberg Blocks', 'PHP'],
    href: 'https://wpengine.com/agency-programs/',
  },
  {
    title: 'Agency Directory',
    description: 'Built the WP Engine agency partner directory — a filterable card grid letting businesses find vetted WordPress agencies. Still in use today.',
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
    description: 'Built and redesigned Torque, WP Engine\'s WordPress-focused publication serving developers, designers, and agencies.',
    tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
    href: 'https://torquemag.io',
  },
  {
    title: 'StudioPress',
    description: 'Built and redesigned StudioPress, WP Engine\'s premium WordPress theme and Genesis Framework platform serving 260K+ customers.',
    tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
    href: 'https://www.studiopress.com',
  },
  {
    title: 'Decode Events Platform',
    description: 'Built the WP Engine Decode conference event platform. Handled registration, session management, and attendee experience.',
    tags: ['React', 'WordPress', 'PHP'],
  },
];

const allMetrics = [
  { value: '$60M → $245M', label: 'ARR Growth During Tenure' },
  { value: '185%', label: 'eCommerce Plan Purchases' },
  { value: '289%', label: 'Signups Increase' },
  { value: '101%', label: 'Avg Revenue per User' },
];

const defaultDescription = 'Grew from intern to Senior Software Engineer over nearly 7 years at WP Engine, a WordPress platform that scaled from $60M to over $245M ARR during my tenure. Built and maintained the marketing and product web ecosystem across multiple brands.';

export const Default: Story = {
  args: {
    description: defaultDescription,
    metrics: allMetrics,
    narrative: allNarrative,
    projects: allProjects,
  },
};

export const FewProjects: Story = {
  args: {
    description: defaultDescription,
    metrics: allMetrics,
    narrative: allNarrative.slice(0, 2),
    projects: allProjects.slice(0, 3),
  },
};

export const TwoMetrics: Story = {
  args: {
    description: defaultDescription,
    metrics: allMetrics.slice(0, 2),
    narrative: allNarrative,
    projects: allProjects.slice(0, 4),
  },
};

export const Mobile: Story = {
  args: { ...Default.args },
  globals: { viewport: 'mobile' },
};
