import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ContactSection } from './ContactSection';

const meta: Meta<typeof ContactSection> = {
  title: 'Portfolio/ContactSection',
  component: ContactSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  args: {
    email: 'christopher.pgarza@gmail.com',
    message:
      "Open to opportunities that challenge me to grow. Whether it's a new role, a project, or just want to connect—I'd love to hear from you.",
  },
};

export const ShortMessage: Story = {
  args: {
    email: 'christopher.pgarza@gmail.com',
    message: "Let's connect.",
  },
};
