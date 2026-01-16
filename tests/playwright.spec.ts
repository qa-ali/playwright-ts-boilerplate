import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await test.step('Navigate to Home Page', async () => {
            await homePage.goto();
        });
    });

    test('has title', async ({ page }) => {
        await test.step('Check page title', async () => {
            await expect(page).toHaveTitle(/Playwright/);
        });
    });

    test('get started link', async () => {
        await test.step('Click Get Started button', async () => {
            await homePage.clickGetStarted();
        });

        await test.step('Verify Installation header is visible', async () => {
            await homePage.assertInstallationHeaderVisible();
        });
    });
});
