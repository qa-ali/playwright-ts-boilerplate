import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly getStartedButton: Locator;
    readonly installHeader: Locator;

    constructor(page: Page) {
        super(page, '/');
        this.getStartedButton = page.getByRole('link', { name: 'Get started' });
        this.installHeader = page.getByRole('heading', { name: 'Installation' });
    }

    async clickGetStarted() {
        await this.getStartedButton.click();
    }

    async assertInstallationHeaderVisible() {
        await expect(this.installHeader).toBeVisible();
    }
}
