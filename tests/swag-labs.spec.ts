import { test, expect } from '@playwright/test';

test('test authenticated state', async ({ page }) => {
    await page.goto(process.env.SAUCE_URL as string);
    await expect(page).toHaveURL(process.env.SAUCE_URL + '/inventory.html');
});
