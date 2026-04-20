import type { Meta, StoryObj, Decorator } from '@storybook/nextjs-vite';
import { userEvent, within, expect } from 'storybook/test';
import { Navigation } from './Navigation';

// Adds scrollable page content behind the nav in Canvas mode only.
// In Docs mode, each preview renders cleanly at natural height.
const withPageContent: Decorator = (Story, context) => {
  if (context.viewMode === 'docs') return <Story />;
  return (
    <div>
      <Story />
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-6 min-h-[200vh]">
        <div className="h-64 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900" />
        <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800" />
        <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800" />
        <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800" />
      </div>
    </div>
  );
};

// Constrains the nav container below @md so the hamburger layout activates.
const mobileDecorator: Decorator = (Story) => (
  <div style={{ maxWidth: '390px' }}>
    <Story />
  </div>
);

// Hides the theme toggle in dark-mode stories — they're static presentations,
// not interaction demos. The toolbar controls the theme; the button would
// only mutate shared <html> state and bleed into other stories.
// Scoped to .no-toggle so the style doesn't leak to sibling story previews.
const withoutToggle: Decorator = (Story) => (
  <div className="no-toggle" style={{ display: 'contents' }}>
    <style>{`.no-toggle button[aria-label="Toggle theme"] { display: none !important; }`}</style>
    <Story />
  </div>
);

const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

// Scrollable canvas so sticky + glass background behave as on the live site.
export const Desktop: Story = {
  parameters: { theme: 'light' },
  decorators: [withPageContent],
};

export const DarkMode: Story = {
  parameters: { theme: 'dark' },
  decorators: [withoutToggle, withPageContent],
};

// Mobile stories show only the nav — no content area below.
export const Mobile: Story = {
  parameters: { theme: 'light' },
  decorators: [mobileDecorator],
};

export const MobileMenuOpen: Story = {
  parameters: { theme: 'light' },
  decorators: [mobileDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Toggle menu' }));
    await expect(await canvas.findByRole('link', { name: 'Auctane' })).toBeVisible();
  },
};

export const MobileMenuOpenDark: Story = {
  parameters: { theme: 'dark' },
  decorators: [withoutToggle, mobileDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Toggle menu' }));
    await expect(await canvas.findByRole('link', { name: 'Auctane' })).toBeVisible();
  },
};
