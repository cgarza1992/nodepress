import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SectionHeader } from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'Molecules/SectionHeader',
  component: SectionHeader,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Small all-caps label above the heading' },
    title: { control: 'text', description: 'Main section heading' },
    description: { control: 'text', description: 'Optional subtext below the heading' },
  },
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

export const Expertise: Story = {
  args: {
    label: 'Expertise',
    title: 'Skills & Tools',
  },
};

export const AllVariants: Story = {
  tags: ['!test'],
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="space-y-12 p-8">
      <SectionHeader label="Work Experience" title="Auctane" />
      <SectionHeader label="Work Experience" title="WP Engine" />
      <SectionHeader label="Open Source" title="GitHub Projects" />
      <SectionHeader label="Expertise" title="Skills & Tools" />
      <SectionHeader label="About Me" title="Christopher Garza" />
      <SectionHeader
        label="Open Source"
        title="GitHub Projects"
        description="A selection of personal and open source work available on GitHub."
      />
    </div>
  ),
};
