import type { Preview } from '@storybook/nextjs-vite'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import '../src/app/globals.css'

const MobileWarning = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-8 text-center">
    <div>
      <p className="text-4xl mb-4">🖥️</p>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
        Best viewed on desktop
      </h1>
      <p className="text-slate-400">
        This component library is a developer tool designed for desktop use.
        Visit <span className="text-blue-400">christophergarza.dev</span> on mobile instead.
      </p>
    </div>
  </div>
);

const preview: Preview = {
  decorators: [
    (Story) => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      if (isMobile) return <MobileWarning />;
      return (
        <Provider store={store}>
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            <Story />
          </div>
        </Provider>
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
