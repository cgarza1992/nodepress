import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AboutSection } from './AboutSection';

const meta: Meta<typeof AboutSection> = {
  title: 'Portfolio/AboutSection',
  component: AboutSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0f172a' }],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {
  args: {
    profileImage: 'https://avatars.githubusercontent.com/u/17697283?v=4',
    title: 'About Me',
    bio: "I'm a Senior Full-Stack Engineer with 9+ years of experience designing and building complex web applications. Most recently at Auctane, where I led enterprise-scale consolidation of 10 shipping & logistics brands. Previously at WP Engine, a $134M ARR WordPress platform.",
    highlights: [
      'Led enterprise-scale consolidation of 10 shipping & logistics brands at Auctane',
      'Drove 185% revenue growth through UI/UX optimization and strategic pricing initiatives',
      'Architected scalable systems serving millions of users across multiple platforms',
      'Scaled engineering team from 2 to 14 professionals through mentoring and hiring',
      'Built high-performance web apps with React, Next.js, TypeScript, and modern tooling',
    ],
  },
};

export const SingleHighlight: Story = {
  args: {
    ...Default.args,
    highlights: ['Led enterprise-scale consolidation of 10 shipping & logistics brands at Auctane'],
  },
};
