import type { Preview } from '@storybook/nextjs-vite';
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

export const initialGlobals = {
  theme: 'light',
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // parameters.theme locks a story to light/dark regardless of persisted globals.
      // Falls back to globals (toolbar) for stories that don't specify.
      const isDark = context.parameters.theme
        ? context.parameters.theme === 'dark'
        : context.globals.theme === 'dark';
      const layout = context.parameters.layout ?? 'padded';
      const isDocs = context.viewMode === 'docs';

      // Canvas only: write dark class to <html> so components that lazy-read it
      // get the correct value. In docs mode we intentionally leave <html> alone —
      // multiple stories share the same document, so toggling <html>.dark in one
      // story fires every other nav's MutationObserver and flips them all to dark.
      // Docs stories rely solely on the scoped .dark class on their wrapper div.
      if (typeof document !== 'undefined' && !isDocs) {
        document.documentElement.classList.toggle('dark', isDark);
      }

      const wrapperClass = isDocs
        ? 'p-6 w-full'
        : layout === 'centered'
          ? 'min-h-screen w-full flex items-center justify-center p-8'
          : 'min-h-screen w-full';

      // Docs: scoped `.dark` class + explicit bg so each story preview is independent
      // of what sibling stories' decorators did to <html>.
      // Canvas: Tailwind dark variants respond to <html>.dark so the nav toggle
      // moves the wrapper background in sync with the nav itself.
      const wrapperTheme = isDocs
        ? (isDark ? 'dark bg-slate-950 text-white' : 'bg-slate-50 text-slate-900')
        : 'bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white';

      return (
        <div className={`${wrapperClass} ${wrapperTheme}`}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Organisms', 'Sections'],
      },
    },
  },
};

export default preview;
