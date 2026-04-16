import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Portfolio/Navigation',
  component: Navigation,
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
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
