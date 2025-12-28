import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  expect: {
    timeout: 10 * 1000,
  },

  use: {
    headless: true,
    actionTimeout: 10 * 1000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    baseURL:
      process.env.BASE_URL ||
      'https://www.lambdatest.com/selenium-playground/',
  },

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1200, height: 750 },
      },
    },
  ],

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});