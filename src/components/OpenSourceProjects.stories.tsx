import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { OpenSourceProjects } from './OpenSourceProjects';

const meta: Meta<typeof OpenSourceProjects> = {
  title: 'Portfolio/OpenSourceProjects',
  component: OpenSourceProjects,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OpenSourceProjects>;

export const Default: Story = {
  args: {
    projects: [
      {
        name: 'NodePress CMS',
        url: 'https://github.com/cgarza1992/nodepress',
        description: 'Self-hosted CMS built to replace WordPress. Swaps MySQL for PostgreSQL with real relational integrity, eliminates PHP-to-React block duplication. Built with Next.js, Prisma, TypeScript.',
      },
      {
        name: 'FastSpring Demo',
        url: 'https://github.com/cgarza1992/fastspring_demo',
        description: 'Next.js demo built to showcase FastSpring\'s embedded checkout and SBL integration. Simulates a SaaS pricing flow with localized pricing, webhook processing, and live event logging.',
      },
      {
        name: 'Partner Directory',
        url: 'https://github.com/cgarza1992/partner-directory',
        description: 'Reusable, filterable card grid built with Vue 3 Composition API. Supports multi-dimensional filtering for partner directories, app marketplaces, or any catalog UI.',
      },
      {
        name: 'Script Queries',
        url: 'https://github.com/cgarza1992/script-queries',
        description: 'PHP scripts for WordPress database management. Exports posts to CSV, validates URLs in bulk, and filters data based on custom criteria.',
      },
    ],
  },
};

export const SingleProject: Story = {
  args: {
    projects: [
      {
        name: 'NodePress CMS',
        url: 'https://github.com/cgarza1992/nodepress',
        description: 'Self-hosted CMS built to replace WordPress. Swaps MySQL for PostgreSQL with real relational integrity, eliminates PHP-to-React block duplication. Built with Next.js, Prisma, TypeScript.',
      },
    ],
  },
};
