import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AuctaneWork } from './AuctaneWork';

const meta: Meta<typeof AuctaneWork> = {
  title: 'Organisms/AuctaneWork',
  component: AuctaneWork,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuctaneWork>;

export const Default: Story = {
  args: {
    metrics: [
      { value: '10', label: 'Brands Consolidated' },
    ],
    narrative: [
      {
        title: 'Multi-Brand Consolidation',
        description: 'Led technical implementation of the strategic consolidation of 10 shipping & logistics brands under unified corporate standards. Involved migrating pricing models, consolidating billing systems, and creating unified API experiences.',
      },
      {
        title: 'Reusable Component Architecture',
        description: 'Built scalable component libraries in React and Vue that powered redesigns across multiple Auctane brands. Enabled consistent branding, faster development cycles, and reduced code duplication.',
      },
      {
        title: 'Multi-Brand Ecosystem',
        description: 'Managed pricing and front-end implementations across the portfolio, ensuring seamless integrations with HubSpot, Salesforce, and Tray.io while maintaining distinct brand identities.',
      },
      {
        title: 'Data Pipeline & Analytics Architecture',
        description: 'Architected data pipelines capturing tracking data from Google Analytics and Segment, routing customer data to CRM tools based on territories and business rules via Tray.io.',
      },
    ],
    projects: [
      {
        title: 'ShipStation Pricing Pages',
        description: 'Implemented pricing pages across Starter, Standard, and Premium plans with plan selectors, feature comparison tables, and A/B tested CTA copy.',
        tags: ['React', 'TypeScript', 'Segment', 'Tray.io', 'HubSpot'],
        href: 'https://www.shipstation.com/pricing/',
      },
      {
        title: 'ShipEngine Pricing',
        description: 'Rebuilt the ShipEngine pricing page end-to-end with API pricing calculator and developer-focused feature comparison.',
        tags: ['React', 'TypeScript', 'Segment', 'Tray.io'],
        href: 'https://www.shipengine.com/pricing/',
      },
      {
        title: 'ShipStation Free Trial Signup',
        description: 'Implemented the multi-field trial signup form with shipment volume segmentation, reCAPTCHA validation, and CRM routing.',
        tags: ['React', 'TypeScript', 'Segment', 'Tray.io', 'HubSpot'],
        href: 'https://www.shipstation.com/start-a-free-trial/',
      },
    ],
  },
};
