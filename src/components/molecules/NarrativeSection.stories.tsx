import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NarrativeSection } from './NarrativeSection';

const meta: Meta<typeof NarrativeSection> = {
  title: 'Molecules/NarrativeSection',
  component: NarrativeSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NarrativeSection>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Multi-Brand Consolidation',
        description: 'Led technical implementation of the strategic consolidation of 10 shipping & logistics brands under unified corporate standards. Involved migrating pricing models, consolidating billing systems, and creating unified API experiences.',
      },
      {
        title: 'Reusable Component Architecture',
        description: 'Built scalable component libraries in React and Vue that powered redesigns across multiple brands. Enabled consistent branding, faster development cycles, and reduced code duplication.',
      },
      {
        title: 'Multi-Brand Ecosystem',
        description: 'Managed pricing and front-end implementations across a diverse brand portfolio, ensuring seamless data pipeline integrations with HubSpot, Salesforce, and Tray.io.',
      },
      {
        title: 'Data Pipeline & Analytics Architecture',
        description: 'Architected and implemented data pipelines capturing user tracking data from Google Analytics and Segment, routing customer data to appropriate CRM tools based on territories and business rules.',
      },
    ],
  },
  decorators: [(Story) => <div className="p-12 max-w-4xl"><Story /></div>],
};

export const TwoItems: Story = {
  args: {
    items: [
      {
        title: 'Pricing & Conversion Optimization',
        description: 'Drove significant conversion improvements through A/B testing, plan simplification, and persona-targeted messaging.',
      },
      {
        title: 'GA/GTM to Segment Migration',
        description: 'Led the migration from Google Analytics and GTM to Segment, enabling unified user profiling and personalized content delivery.',
      },
    ],
  },
  decorators: [(Story) => <div className="p-12 max-w-4xl"><Story /></div>],
};
