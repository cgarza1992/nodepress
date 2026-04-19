import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Portfolio/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'Senior Web Developer',
    subtitle:
      "Developer at the seam of marketing and engineering, building the technical systems behind pricing, conversion, and analytics for enterprise products. Frontend to backend, data pipelines to component libraries. Most developers pick a side. I've spent my career not having to. The work shows up in the metrics, not just the repo.",
    image: 'https://avatars.githubusercontent.com/u/17697283?v=4',
    ctaPrimary: { text: 'Get In Touch', href: '#contact' },
    ctaSecondary: { text: 'View GitHub', href: 'https://github.com/cgarza1992' },
  },
};

export const ShortSubtitle: Story = {
  args: {
    ...Default.args,
    subtitle: 'Full-stack developer at the seam between marketing and engineering.',
  },
};
