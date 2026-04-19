import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AboutSection } from './AboutSection';

const meta: Meta<typeof AboutSection> = {
  title: 'Portfolio/AboutSection',
  component: AboutSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {
  args: {
    profileImage: 'https://avatars.githubusercontent.com/u/17697283?v=4',
    title: 'Christopher Garza',
    bio: "I started in Advertising & Mass Communication, taught myself to code, and spent 7 years at WP Engine before moving to Auctane. That non-traditional path shaped how I work: I care about the business problem as much as the technical solution, I communicate clearly across teams, and I build things that are meant to last. When I'm not at a keyboard I'm in the garage — currently building a custom motorcycle for a show.",
    highlights: [
      'Background in Advertising & Mass Communication — bridges the gap between technical and non-technical teams',
      'Contributed to growing and mentoring the WP Engine web team, including the first developer onboarding program',
      'Focused on translating complex business problems into clean, maintainable engineering solutions',
      'Open to roles that challenge me to grow across the full stack and contribute to teams doing meaningful work',
    ],
  },
};
