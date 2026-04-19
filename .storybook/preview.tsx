import type { Preview } from '@storybook/nextjs-vite';
import { ThemeProvider } from 'next-themes';
import '../src/app/globals.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Color theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light Mode' },
        { value: 'dark', title: 'Dark Mode' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === 'dark';
      return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="storybook-theme">
          <div className={`${isDark ? 'dark' : ''} min-h-screen ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
