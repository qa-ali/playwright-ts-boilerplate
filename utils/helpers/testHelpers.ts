import { Page, expect } from '@playwright/test';

/**
 * Helper function to login to the application
 * @param page - Playwright page object
 * @param username - Username for login
 * @param password - Password for login
 */
export async function login(page: Page, username: string, password: string): Promise<void> {
    await page.locator('[data-test="username"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-button"]').click();
}

/**
 * Helper function to logout from the application
 * @param page - Playwright page object
 */
export async function logout(page: Page): Promise<void> {
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
}

/**
 * Helper function to add item to cart by index
 * @param page - Playwright page object
 * @param itemIndex - Index of the item to add (0-based)
 */
export async function addItemToCart(page: Page, itemIndex: number): Promise<void> {
    const addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    await addToCartButtons.nth(itemIndex).click();
}

/**
 * Helper function to verify cart badge count
 * @param page - Playwright page object
 * @param expectedCount - Expected number of items in cart
 */
export async function verifyCartBadgeCount(page: Page, expectedCount: number): Promise<void> {
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText(expectedCount.toString());
}

/**
 * Helper function to navigate to cart
 * @param page - Playwright page object
 */
export async function navigateToCart(page: Page): Promise<void> {
    await page.locator('.shopping_cart_link').click();
}

/**
 * Helper function to wait for page to be fully loaded
 * @param page - Playwright page object
 */
export async function waitForPageLoad(page: Page): Promise<void> {
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');
}

/**
 * Helper function to take a screenshot with a custom name
 * @param page - Playwright page object
 * @param screenshotName - Name for the screenshot
 */
export async function takeScreenshot(page: Page, screenshotName: string): Promise<void> {
    await page.screenshot({ path: `test-results/screenshots/${screenshotName}.png`, fullPage: true });
}
