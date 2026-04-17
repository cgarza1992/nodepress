import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PlanGrid } from './PlanGrid';
import type { PlanTileData } from '../molecules/PlanTile';

const meta: Meta<typeof PlanGrid> = {
  title: 'Organisms/PlanGrid',
  component: PlanGrid,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlanGrid>;

const wpePlans: PlanTileData[] = [
  {
    id: 'wpe-startup',
    name: 'Startup',
    price: '$30',
    priceLabel: '/mo',
    tagline: 'For new WordPress sites.',
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      { label: '1 WordPress Install', included: true },
      { label: '10GB Storage', included: true },
      { label: 'Staging Environment', included: false },
      { label: 'CDN Included', included: false },
    ],
    contribution: 'Owned the Startup plan layout and billing toggle wired to HubSpot.',
    ctaHref: 'https://wpengine.com/plans/',
  },
  {
    id: 'wpe-professional',
    name: 'Professional',
    price: '$59',
    priceLabel: '/mo',
    tagline: 'For growing sites.',
    gradient: 'from-emerald-500 to-teal-500',
    badge: { label: 'Most Popular', variant: 'popular' },
    features: [
      { label: '3 WordPress Installs', included: true },
      { label: 'Staging Environment', included: true },
      { label: 'CDN Included', included: true },
      { label: 'Priority Support', included: false },
    ],
    contribution: 'A/B tested CTA copy. Increased Professional conversions by 18%.',
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
      { label: 'Advanced Security', included: true },
      { label: 'Priority Support', included: true },
      { label: 'Custom SLA', included: false },
    ],
    contribution: 'Built agency feature callouts and Salesforce CRM pipeline.',
    ctaHref: 'https://wpengine.com/plans/',
  },
  {
    id: 'wpe-scale',
    name: 'Scale',
    price: '$290',
    priceLabel: '/mo',
    tagline: 'For enterprise teams.',
    gradient: 'from-emerald-500 to-teal-500',
    badge: { label: 'Best Value', variant: 'value' },
    features: [
      { label: '30 WordPress Installs', included: true },
      { label: 'Dedicated Account Manager', included: true },
      { label: 'Custom SLA', included: true },
      { label: 'Advanced Analytics', included: true },
    ],
    contribution: 'Owned Scale tier end-to-end with enterprise CTA flows.',
    ctaHref: 'https://wpengine.com/plans/',
  },
];

export const WPEnginePlans: Story = {
  args: { plans: wpePlans, title: 'Managed WordPress Plans' },
  decorators: [(Story) => <div className="p-8"><Story /></div>],
};

export const TwoPlans: Story = {
  args: { plans: wpePlans.slice(0, 2), title: 'Featured Plans' },
  decorators: [(Story) => <div className="p-8"><Story /></div>],
};
