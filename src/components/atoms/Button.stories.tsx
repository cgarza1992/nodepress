import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Get In Touch', variant: 'primary', size: 'md' } };
export const Secondary: Story = { args: { children: 'View GitHub', variant: 'secondary', size: 'md' } };
export const Ghost: Story = { args: { children: 'Learn More', variant: 'ghost', size: 'md' } };
export const Small: Story = { args: { children: 'View Live', variant: 'primary', size: 'sm' } };
export const Large: Story = { args: { children: 'Contact Me', variant: 'primary', size: 'lg' } };
