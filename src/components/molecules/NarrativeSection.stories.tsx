import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NarrativeSection } from './NarrativeSection';

const meta: Meta<typeof NarrativeSection> = {
  title: 'Molecules/NarrativeSection',
  component: NarrativeSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object', description: 'Array of title + description narrative blocks' },
  },
};

export default meta;
type Story = StoryObj<typeof NarrativeSection>;

const auctaneItems = [
  {
    title: 'Multi-Brand Consolidation',
    description: 'Led technical implementation of the strategic consolidation of 10 shipping & logistics brands under unified corporate standards. Involved migrating pricing models, consolidating billing systems, and creating unified API experiences serving logistics partners and merchants globally.',
  },
  {
    title: 'Reusable Component Architecture',
    description: 'Built scalable component libraries in React and Vue that powered redesigns across multiple Auctane brands and websites. Enabled consistent branding, faster development cycles, and reduced code duplication across the entire portfolio.',
  },
  {
    title: 'Multi-Brand Ecosystem',
    description: 'Managed pricing and front-end implementations across the portfolio, ensuring seamless data pipeline integrations with HubSpot, Salesforce, Tray.io, and other enterprise APIs while maintaining distinct brand identities.',
  },
  {
    title: 'Data Pipeline & Analytics Architecture',
    description: 'Architected and implemented data pipelines capturing user tracking data from Google Analytics and Segment, routing customer data to appropriate CRM and business tools based on territories and business rules.',
  },
];

const wpeItems = [
  {
    title: 'Reusable Component Library',
    description: 'Implemented a shared library of React and Gutenberg block components used across marketing, partner, and product pages. Enabled non-developers to build and manage custom landing pages while maintaining consistent UI patterns at scale.',
  },
  {
    title: 'GA/GTM to Segment Migration',
    description: 'Led the migration of analytics and user tracking from Google Analytics and GTM to Segment. Enabled unified user profiling and personalized content delivery based on tracked behavior.',
  },
];

export const FourItems: Story = {
  args: { items: auctaneItems },
  decorators: [(Story) => <div className="p-12 max-w-5xl mx-auto"><Story /></div>],
};

export const TwoItems: Story = {
  args: { items: wpeItems },
  decorators: [(Story) => <div className="p-12 max-w-5xl mx-auto"><Story /></div>],
};

export const OneItem: Story = {
  args: {
    items: [
      {
        title: 'Cross-Functional Technical Leadership',
        description: 'Served as the technical representative across cross-departmental projects — translating engineering constraints into plain language for stakeholders, representing the team on roadmaps and scopes of work.',
      },
    ],
  },
  decorators: [(Story) => <div className="p-12 max-w-5xl mx-auto"><Story /></div>],
};

export const ShortDescriptions: Story = {
  args: {
    items: [
      { title: 'Component Architecture', description: 'Built reusable React components across multiple brands.' },
      { title: 'Analytics Migration', description: 'Led GA/GTM to Segment migration.' },
      { title: 'Pricing Optimization', description: 'Drove conversion improvements through A/B testing.' },
      { title: 'Technical Leadership', description: 'Represented engineering in cross-functional planning.' },
    ],
  },
  decorators: [(Story) => <div className="p-12 max-w-5xl mx-auto"><Story /></div>],
};

export const Mobile: Story = {
  args: { items: wpeItems },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  decorators: [(Story) => <div className="p-6"><Story /></div>],
};
