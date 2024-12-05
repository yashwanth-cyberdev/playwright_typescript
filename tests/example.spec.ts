import { test, expect } from "@playwright/test";
import { Assert } from "../pageObjects/assert";

//  testing out this comment to be fixed done

test("has title", async ({ page }) => {
  const assert = new Assert(page);
  await page.goto(process.env.BASE_URL!);
  console.log(`This is base url here ${"/"}`);

  // Expect a title "to contain" a substring.
  await assert.assertHeader();
});

test("@regression get started link new file", async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();
  console.log(process.env.USER_NAME! + " is  a hero");

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
