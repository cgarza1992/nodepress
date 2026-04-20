import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { OpenSourceProjects } from './OpenSourceProjects';

const meta: Meta<typeof OpenSourceProjects> = {
  title: 'Organisms/OpenSourceProjects',
  component: OpenSourceProjects,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    projects: { control: 'object', description: 'Array of GitHub projects with name, url, and description' },
  },
};

export default meta;
type Story = StoryObj<typeof OpenSourceProjects>;

const allProjects = [
  {
    name: 'NodePress CMS',
    url: 'https://github.com/cgarza1992/nodepress',
    description: 'Self-hosted CMS built to replace WordPress. Swaps MySQL for PostgreSQL with real relational integrity, eliminates PHP-to-React block duplication. Built with Next.js, Prisma, TypeScript.',
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
  {
    name: 'FastSpring Demo',
    url: 'https://github.com/cgarza1992/fastspring_demo',
    description: "Next.js demo built to showcase FastSpring's embedded checkout and SBL integration. Simulates a SaaS pricing flow with localized pricing, webhook processing, and live event logging.",
  },
];

export const Default: Story = {
  args: { projects: allProjects },
};

export const SingleProject: Story = {
  args: { projects: [allProjects[0]] },
};

export const TwoProjects: Story = {
  args: { projects: allProjects.slice(0, 2) },
};

export const Mobile: Story = {
  args: { projects: allProjects },
  globals: { viewport: 'mobile' },
};
