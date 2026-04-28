import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from './Hero';
import { GradientText } from './atoms/GradientText';

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: false, description: 'Primary heading — job title or name' },
    subtitle: { control: 'text', description: 'Positioning statement below the title' },
    image: { control: 'text', description: 'Profile image URL' },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

const defaultArgs = {
  title: <><span>Senior Software Engineer,</span><br /><GradientText>Frontend</GradientText></>,
  subtitle:
    "Engineer at the seam of marketing and engineering, building the technical systems behind pricing, conversion, and analytics for enterprise products. Frontend to backend, data pipelines to component libraries. Most engineers pick a side. I've spent my career not having to. The work shows up in the metrics, not just the repo.",
  image: 'https://avatars.githubusercontent.com/u/17697283?v=4',
  ctaPrimary: { text: 'Get In Touch', href: '#contact' },
  ctaSecondary: { text: 'View GitHub', href: 'https://github.com/cgarza1992' },
};

export const Default: Story = {
  args: defaultArgs,
};

export const ShortSubtitle: Story = {
  args: {
    ...defaultArgs,
    subtitle: 'Developer at the seam of marketing and engineering.',
  },
};

export const LongTitle: Story = {
  args: {
    ...defaultArgs,
    title: 'Senior Full-Stack Web Developer',
  },
};

export const Mobile: Story = {
  args: defaultArgs,
  globals: { viewport: 'mobile' },
};

export const Tablet: Story = {
  args: defaultArgs,
  globals: { viewport: 'tablet' },
};
