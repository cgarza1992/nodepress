import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PlanBadge } from './PlanBadge';

const meta: Meta<typeof PlanBadge> = {
  title: 'Atoms/PlanBadge',
  component: PlanBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlanBadge>;

export const Popular: Story = { args: { label: 'Most Popular', variant: 'popular' } };
export const Value: Story = { args: { label: 'Best Value', variant: 'value' } };
export const Enterprise: Story = { args: { label: 'Enterprise', variant: 'enterprise' } };
