import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const NodePress: Story = {
  args: {
    name: 'NodePress CMS',
    url: 'https://github.com/cgarza1992/nodepress',
    description: 'Self-hosted CMS built to replace WordPress. Swaps MySQL for PostgreSQL with real relational integrity. Built with Next.js, Prisma, TypeScript.',
    gradient: 'from-orange-500 to-red-500',
    emoji: '🚀',
  },
};

export const PartnerDirectory: Story = {
  args: {
    name: 'Partner Directory',
    url: 'https://github.com/cgarza1992/partner-directory',
    description: 'Reusable, filterable card grid built with Vue 3 Composition API. Supports multi-dimensional filtering for partner directories and app marketplaces.',
    gradient: 'from-blue-500 to-cyan-500',
    emoji: '📋',
  },
};

export const ScriptQueries: Story = {
  args: {
    name: 'Script Queries',
    url: 'https://github.com/cgarza1992/script-queries',
    description: 'PHP scripts for WordPress database management. Exports posts to CSV, validates URLs in bulk, and filters data based on custom criteria.',
    gradient: 'from-purple-500 to-pink-500',
    emoji: '🗄️',
  },
};
