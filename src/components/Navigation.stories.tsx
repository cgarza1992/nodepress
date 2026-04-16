import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Portfolio/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
