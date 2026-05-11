import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ContactSection } from './ContactSection';

const meta: Meta<typeof ContactSection> = {
  title: 'Sections/ContactSection',
  component: ContactSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    email: { control: 'text', description: 'Email address for the mailto link' },
    linkedin: { control: 'text', description: 'LinkedIn profile URL' },
    message: { control: 'text', description: 'Descriptive text above the CTA buttons' },
  },
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  args: {
    email: 'cpg@christophergarza.dev',
    linkedin: 'https://www.linkedin.com/in/christopher-garza-dev/',
    message: "Open to opportunities that challenge me to grow. Whether it's a new role, a project, or just want to connect — I'd love to hear from you.",
  },
};
