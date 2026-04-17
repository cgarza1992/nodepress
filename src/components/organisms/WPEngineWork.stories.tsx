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

export const Default: Story = {
  args: {
    metrics: [
      { value: '$134M', label: 'ARR' },
      { value: '185%', label: 'eCommerce Plan Purchases' },
      { value: '289%', label: 'Signups Increase' },
      { value: '101%', label: 'Avg Revenue per User' },
    ],
    narrative: [
      {
        title: 'Reusable Component Library',
        description: 'Implemented a shared library of React and Gutenberg block components enabling non-developers to build custom landing pages while maintaining consistent UI patterns at scale.',
      },
      {
        title: 'GA/GTM to Segment Migration',
        description: 'Led the migration from Google Analytics and GTM to Segment, enabling unified user profiling and personalized content delivery across the platform.',
      },
      {
        title: 'Pricing & Conversion Optimization',
        description: 'Drove significant conversion improvements through A/B testing, plan simplification, and persona-targeted messaging. Resolved significant user drop-off during checkout.',
      },
      {
        title: 'Cross-Functional Technical Leadership',
        description: 'Served as technical representative across cross-departmental projects. Built the intake system (GravityForms + JIRA API) managing requests across 90 GitHub repositories.',
      },
    ],
    projects: [
      {
        title: 'Managed WordPress Pricing',
        description: 'Implemented pricing pages across 4 managed WordPress plans with billing toggles, feature comparison tables, and Salesforce CRM pipelines.',
        tags: ['React', 'PHP', 'Segment', 'Salesforce'],
        href: 'https://wpengine.com/plans/',
      },
      {
        title: 'Agency Directory',
        description: 'Built the WP Engine agency partner directory — a filterable card grid letting businesses find vetted WordPress agencies. Still in use today.',
        tags: ['React', 'WordPress', 'PHP'],
        href: 'https://wpengine.com/agency-directory/',
      },
      {
        title: 'StudioPress',
        description: 'Built and redesigned StudioPress, WP Engine\'s premium WordPress theme and Genesis Framework platform.',
        tags: ['React', 'WordPress', 'PHP', 'Gutenberg Blocks'],
        href: 'https://www.studiopress.com',
      },
    ],
  },
};
