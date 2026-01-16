import { test as setup, expect } from '@playwright/test';

const authFile = '.auth/user.json';

// Locators
const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
const inventoryList = '.inventory_list';

setup('authenticate', async ({ page }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto(process.env.SAUCE_URL as string);

    await page.locator(usernameInput).fill(process.env.SAUCE_USERNAME || '');
    await page.locator(passwordInput).fill(process.env.SAUCE_PASSWORD || '');
    await page.locator(loginButton).click();

    await expect(page).toHaveURL(process.env.SAUCE_URL + '/inventory.html');
    await expect(page.locator(inventoryList)).toBeVisible();

    await page.context().storageState({ path: authFile });
});
