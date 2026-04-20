import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PlanBadge } from './PlanBadge';

const meta: Meta<typeof PlanBadge> = {
  title: 'Atoms/PlanBadge',
  component: PlanBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Color variant of the badge',
      control: 'select',
      options: ['popular', 'value', 'enterprise'],
      table: { defaultValue: { summary: 'popular' } },
    },
    label: {
      description: 'Text displayed inside the badge',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlanBadge>;

export const Popular: Story = {
  args: { label: 'Most Popular', variant: 'popular' },
};

export const Value: Story = {
  args: { label: 'Best Value', variant: 'value' },
};

export const Enterprise: Story = {
  args: { label: 'Enterprise', variant: 'enterprise' },
};

export const CustomLabel: Story = {
  args: { label: 'New', variant: 'popular' },
};

export const LongLabel: Story = {
  args: { label: 'Recommended for Teams', variant: 'enterprise' },
};

export const AllVariants: Story = {
  tags: ['!test'],
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="flex flex-wrap gap-4 items-center p-8">
      <PlanBadge label="Most Popular" variant="popular" />
      <PlanBadge label="Best Value" variant="value" />
      <PlanBadge label="Enterprise" variant="enterprise" />
    </div>
  ),
};
