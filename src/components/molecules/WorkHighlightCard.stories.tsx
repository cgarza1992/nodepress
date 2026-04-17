import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { WorkHighlightCard } from './WorkHighlightCard';

const meta: Meta<typeof WorkHighlightCard> = {
  title: 'Molecules/WorkHighlightCard',
  component: WorkHighlightCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WorkHighlightCard>;

export const WithLink: Story = {
  args: {
    title: 'Agency Directory',
    description: 'Built the WP Engine agency partner directory — a filterable card grid letting businesses find vetted WordPress agencies by specialty, budget, region, and partner tier. Still in use today.',
    tags: ['React', 'WordPress', 'PHP'],
    href: 'https://wpengine.com/agency-directory/',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const NoLink: Story = {
  args: {
    title: 'Reusable Component Library',
    description: 'Implemented a shared library of React and Gutenberg block components used across marketing, partner, and product pages.',
    tags: ['React', 'Gutenberg Blocks', 'PHP'],
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const ManyTags: Story = {
  args: {
    title: 'Data Pipeline & Analytics',
    description: 'Architected data pipelines routing customer data to CRM and business tools based on territories and business rules.',
    tags: ['Segment', 'Tray.io', 'HubSpot', 'Salesforce', 'Google Analytics'],
    href: 'https://www.shipstation.com/pricing/',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};
