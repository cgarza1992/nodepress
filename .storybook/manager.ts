import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Christopher Garza — Component Library',
  brandUrl: 'https://christophergarza.dev',
  brandTarget: '_blank',

  // UI chrome
  colorPrimary: '#3b82f6',   // blue-500
  colorSecondary: '#06b6d4', // cyan-500

  // App
  appBg: '#0f172a',          // slate-900
  appContentBg: '#0f172a',
  appPreviewBg: '#0f172a',
  appBorderColor: '#1e293b', // slate-800
  appBorderRadius: 4,

  // Text
  textColor: '#e2e8f0',      // slate-200
  textInverseColor: '#0f172a',
  textMutedColor: '#94a3b8', // slate-400

  // Toolbar
  barTextColor: '#94a3b8',
  barHoverColor: '#e2e8f0',
  barSelectedColor: '#3b82f6',
  barBg: '#0f172a',

  // Inputs
  inputBg: '#1e293b',
  inputBorder: '#334155',    // slate-700
  inputTextColor: '#e2e8f0',
  inputBorderRadius: 4,
});

addons.setConfig({ theme });
