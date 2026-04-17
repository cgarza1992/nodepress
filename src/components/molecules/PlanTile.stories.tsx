import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PlanTile } from './PlanTile';

const meta: Meta<typeof PlanTile> = {
  title: 'Molecules/PlanTile',
  component: PlanTile,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlanTile>;

const basePlan = {
  id: 'demo-plan',
  name: 'Professional',
  price: '$59',
  priceLabel: '/mo',
  tagline: 'For growing sites that need more power.',
  gradient: 'from-emerald-500 to-teal-500',
  badge: { label: 'Most Popular', variant: 'popular' as const },
  features: [
    { label: '3 WordPress Installs', included: true },
    { label: 'Staging Environment', included: true },
    { label: 'CDN Included', included: true },
    { label: 'Dedicated Support', included: false },
  ],
  contribution: 'Designed the Most Popular highlight treatment and built the feature comparison logic. A/B tested CTA copy that increased conversions by 18%.',
  ctaHref: 'https://wpengine.com/plans/',
};

export const Default: Story = {
  args: { plan: basePlan, isFlipped: false, isSelected: false, onFlip: () => {}, onSelect: () => {} },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
};

export const Flipped: Story = {
  args: { ...Default.args, isFlipped: true },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
};

export const Selected: Story = {
  args: { ...Default.args, isSelected: true },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
};

export const NoBadge: Story = {
  args: {
    plan: { ...basePlan, badge: undefined },
    isFlipped: false, isSelected: false, onFlip: () => {}, onSelect: () => {},
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
};
