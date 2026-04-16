import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SectionHeader } from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'Portfolio/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const TitleOnly: Story = {
  args: {
    title: 'Pricing & Billing Projects',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Open Source Projects',
    description: 'A selection of personal and open source work available on GitHub.',
  },
};
