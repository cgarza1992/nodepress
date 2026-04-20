import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ContactSection } from './ContactSection';

const meta: Meta<typeof ContactSection> = {
  title: 'Sections/ContactSection',
  component: ContactSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    email: { control: 'text', description: 'Email address for the mailto link' },
    message: { control: 'text', description: 'Descriptive text above the CTA button' },
  },
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  args: {
    email: 'christopher.pgarza@gmail.com',
    message: "Open to opportunities that challenge me to grow. Whether it's a new role, a project, or just want to connect — I'd love to hear from you.",
  },
};
