import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Portfolio/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    year: 2026,
    name: 'Christopher Garza',
    builtWith: 'Next.js + Tailwind CSS',
  },
};
