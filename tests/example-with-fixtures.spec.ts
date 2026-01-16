import { test, expect } from './fixtures/customFixtures';

/**
 * Example test showing how to use custom fixtures
 * The homePage is automatically initialized via the fixture
 */
test.describe('Home Page Tests with Fixtures', () => {
    test('has title using fixture', async ({ homePage }) => {
        // homePage is automatically initialized!
        await homePage.goto();
        await expect(homePage.page).toHaveTitle(/Playwright/);
    });

    test('get started link using fixture', async ({ homePage }) => {
        await homePage.goto();
        await homePage.clickGetStarted();
        await homePage.assertInstallationHeaderVisible();
    });
});
