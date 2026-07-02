// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright configuration for the Tichi App Login automation suite.
 * Docs: https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  // Root directory where test files live
  testDir: './tests',

  // Fail the build on CI if test.only is accidentally left in the source code
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI only, to reduce flakiness noise locally
  retries: process.env.CI ? 2 : 0,

  // Limit parallel workers on CI, use default (auto) locally
  workers: process.env.CI ? 1 : undefined,

  // Run test files in parallel for faster execution
  fullyParallel: true,

  // Reporters: HTML report is generated after every run
  reporter: [
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['list'],
  ],

  // Shared settings applied to all projects below
  use: {
    // Base URL so tests can use relative paths, e.g. page.goto('/login')
    baseURL: 'https://tichi-app-webapp-stage.web.app/login',

    // Run browsers in headless mode (as required)
    headless: true,

    // Capture trace only on first retry - useful for debugging failures
    trace: 'on-first-retry',

    // Capture screenshot only when a test fails
    screenshot: 'only-on-failure',

    // Record video only when a test is retried
    video: 'retain-on-failure',
  },

  // Chromium only, as required
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
