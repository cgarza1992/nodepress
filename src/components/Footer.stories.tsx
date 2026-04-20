import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Sections/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    year: { control: 'number', description: 'Copyright year' },
    name: { control: 'text', description: 'Name shown in the copyright line' },
    builtWith: { control: 'text', description: 'Tech stack credit' },
  },
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
