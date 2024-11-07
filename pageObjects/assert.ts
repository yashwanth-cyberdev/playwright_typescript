import { Page, expect } from "@playwright/test";

export class Assert {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertHeader() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }
}
