import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Portfolio/Hero',
  component: Hero,
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
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'Senior Full-Stack',
    subtitle:
      'Building high-performance web solutions for complex, business-critical projects. Proven track record: 185% revenue growth, helped scale engineering team from 2 to 14 through mentoring and hiring, architected enterprise-scale migrations.',
    image: 'https://avatars.githubusercontent.com/u/17697283?v=4',
    ctaPrimary: { text: 'Get In Touch', href: '#contact' },
    ctaSecondary: { text: 'View GitHub', href: 'https://github.com/cgarza1992' },
  },
};

export const ShortSubtitle: Story = {
  args: {
    ...Default.args,
    subtitle: 'Building high-performance web solutions.',
  },
};
