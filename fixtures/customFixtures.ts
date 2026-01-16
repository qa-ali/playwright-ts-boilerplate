import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

/**
 * Custom fixtures for Playwright tests
 * Extend the base test with custom fixtures to avoid repetitive setup
 */
type CustomFixtures = {
  homePage: HomePage;
};

/**
 * Extended test with custom fixtures
 * Usage: import { test, expect } from './fixtures/customFixtures';
 */
export const test = base.extend<CustomFixtures>({
  homePage: async ({ page }, use) => {
    // Setup console error listener
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
        console.warn(`[Browser Console Error] ${msg.text()}`);
      }
    });

    // Setup page error listener
    page.on('pageerror', (error) => {
      console.error(`[Page Error] ${error.message}`);
      consoleErrors.push(error.message);
    });

    try {
      const homePage = new HomePage(page);
      await use(homePage);
    } catch (error) {
      console.error('Error in homePage fixture:', error);
      throw error;
    } finally {
      // Report any console errors that occurred
      if (consoleErrors.length > 0) {
        console.log(`[Test Info] ${consoleErrors.length} console/page errors captured during test`);
      }
    }
  },
});

export { expect } from '@playwright/test';
