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

export const Default: Story = {
  args: {
    label: 'Open Source',
    title: 'GitHub Projects',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Open Source',
    title: 'GitHub Projects',
    description: 'A selection of personal and open source work available on GitHub.',
  },
};

export const WorkExperience: Story = {
  args: {
    label: 'Work Experience',
    title: 'Auctane',
  },
};
