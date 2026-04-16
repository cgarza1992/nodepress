import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AuctaneWork } from './AuctaneWork';

const meta: Meta<typeof AuctaneWork> = {
  title: 'Portfolio/AuctaneWork',
  component: AuctaneWork,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuctaneWork>;

export const Default: Story = {
  args: {
    metrics: [
      { value: '185%', label: 'Revenue Growth' },
      { value: '10', label: 'Consolidated Brands' },
      { value: '$134M+', label: 'ARR Managed' },
    ],
    pricingProjects: [
      {
        name: 'ShipStation Pricing',
        url: 'https://www.shipstation.com/pricing/',
        description: 'Interactive plan comparison with multicurrency support.',
      },
      {
        name: 'ShipEngine Pricing',
        url: 'https://www.shipengine.com/pricing/',
        description: 'Advanced pricing page with feature-tier comparisons and currency localization.',
      },
    ],
  },
};

export const SingleMetric: Story = {
  args: {
    ...Default.args,
    metrics: [{ value: '185%', label: 'Revenue Growth' }],
  },
};
