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
        description: 'Self-hosted CMS built to replace WordPress. Built with Next.js, Prisma, TypeScript.',
      },
      {
        name: 'FastSpring Demo',
        url: 'https://github.com/cgarza1992/fastspring_demo',
        description: 'Next.js demo app showcasing FastSpring embedded checkout and SBL.',
      },
      {
        name: 'Partner Directory',
        url: 'https://github.com/cgarza1992/partner-directory',
        description: 'Business/partner directory application built with modern JavaScript stack.',
      },
      {
        name: 'Script Queries',
        url: 'https://github.com/cgarza1992/script-queries',
        description: 'PHP scripts for WordPress database management and bulk URL validation.',
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
        description: 'Self-hosted CMS built to replace WordPress. Built with Next.js, Prisma, TypeScript.',
      },
    ],
  },
};
