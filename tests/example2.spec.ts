import { test, expect } from "@playwright/test";
import { Assert } from "../pageObjects/assert";

test("has title", async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/playwright/);
});

test("@regression get started link", async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("@regression duplicate", async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("This is should run on MR", async ({ page }) => {
  const assert = new Assert(page);
  await page.goto(process.env.BASE_URL!);

  // Expect a title "to contain" a substring.
  await assert.assertHeader();
});
