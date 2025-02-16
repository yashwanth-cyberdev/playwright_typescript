import { test, expect } from "@playwright/test";

test("@regression this is regression get started link new file", async ({
  page,
}) => {
  await page.goto(process.env.BASE_URL!);

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("duplicate", async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
