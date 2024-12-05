import { test, expect } from "@playwright/test";
import { Assert } from "../pageObjects/assert";

//  testing out this comment

test("has title", async ({ page }) => {
  const assert = new Assert(page);
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await assert.assertHeader();
});

test("get started link new file", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("duplicate", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
