import { test as base } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

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
        const homePage = new HomePage(page);
        await use(homePage);
    },
});

export { expect } from '@playwright/test';
