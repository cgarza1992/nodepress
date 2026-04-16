import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  snapshotDir: './tests/visual/__snapshots__',
  updateSnapshots: 'missing',
  use: {
    ...devices['Desktop Chrome'],
    colorScheme: 'dark',
  },
  webServer: process.env.STORYBOOK_URL
    ? undefined
    : {
        command: 'npx http-server storybook-static -p 6006 --silent',
        url: 'http://localhost:6006',
        reuseExistingServer: true,
      },
});
