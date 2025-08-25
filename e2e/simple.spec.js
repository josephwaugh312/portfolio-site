const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Joseph Waugh/);
});

test('can navigate to projects', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Projects');
  await expect(page).toHaveURL('/projects');
});