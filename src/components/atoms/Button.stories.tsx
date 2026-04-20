import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { userEvent, within, expect, fn } from 'storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    // fn() creates a spy shared across stories — verifiable in play functions.
    onClick: fn(),
  },
  argTypes: {
    variant: {
      description: 'Visual style of the button',
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      description: 'Size of the button',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    children: {
      description: 'Button label',
      control: 'text',
    },
    disabled: {
      description: 'Disables interaction and dims the button',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    href: {
      description: 'If provided, renders as an anchor tag instead of a button',
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Get In Touch', variant: 'primary', size: 'md' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Get In Touch' });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: { children: 'View GitHub', variant: 'secondary', size: 'md' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'View GitHub' });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Ghost: Story = {
  args: { children: 'Learn More', variant: 'ghost', size: 'md' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Learn More' });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Small: Story = {
  args: { children: 'View Live', variant: 'primary', size: 'sm' },
};

export const Large: Story = {
  args: { children: 'Contact Me', variant: 'primary', size: 'lg' },
};

export const Disabled: Story = {
  args: { children: 'Unavailable', variant: 'primary', size: 'md', disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: 'Unavailable' })).toBeDisabled();
  },
};

export const DisabledSecondary: Story = {
  args: { children: 'Unavailable', variant: 'secondary', size: 'md', disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: 'Unavailable' })).toBeDisabled();
  },
};

export const AsLink: Story = {
  args: {
    children: 'View GitHub',
    variant: 'secondary',
    size: 'md',
    href: 'https://github.com/cgarza1992',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'View GitHub' });
    await expect(link).toHaveAttribute('href', 'https://github.com/cgarza1992');
    await expect(link).toHaveAttribute('target', '_blank');
  },
};

// Showcase only — not a meaningful interaction test.
export const AllVariants: Story = {
  tags: ['!test'],
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="p-8 flex flex-col gap-8">
      {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
        <div key={variant}>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 dark:text-slate-300 mb-3">{variant}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant={variant} size="sm">Small</Button>
            <Button variant={variant} size="md">Medium</Button>
            <Button variant={variant} size="lg">Large</Button>
            <Button variant={variant} size="md" disabled>Disabled</Button>
          </div>
        </div>
      ))}
    </div>
  ),
};
