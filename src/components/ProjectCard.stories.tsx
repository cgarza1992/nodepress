import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const BlueGradient: Story = {
  args: {
    name: 'ShipStation Pricing',
    url: 'https://www.shipstation.com/pricing/',
    description: 'Interactive plan comparison with multicurrency support. Built responsive pricing tiers and dynamic plan selector logic.',
    gradient: 'from-blue-500 to-cyan-500',
    emoji: '💳',
  },
};

export const GreenGradient: Story = {
  args: {
    ...BlueGradient.args,
    name: 'WP Engine Plans',
    gradient: 'from-emerald-500 to-teal-500',
    emoji: '💰',
  },
};

export const OrangeGradient: Story = {
  args: {
    ...BlueGradient.args,
    name: 'NodePress CMS',
    gradient: 'from-orange-500 to-red-500',
    emoji: '🚀',
  },
};

export const PurpleGradient: Story = {
  args: {
    ...BlueGradient.args,
    name: 'StudioPress',
    gradient: 'from-purple-500 to-pink-500',
    emoji: '📦',
  },
};
