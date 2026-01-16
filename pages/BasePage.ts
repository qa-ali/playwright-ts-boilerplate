import { Page } from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;
    readonly url: string;

    constructor(page: Page, url: string) {
        this.page = page;
        this.url = url;
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async waitForUrl() {
        await this.page.waitForURL(this.url);
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }
}
