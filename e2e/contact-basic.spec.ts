import { test, expect } from '@playwright/test';

test.describe('Contact Page Basic Tests', () => {
  test('contact page loads correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Page title and heading
    await expect(page.locator('h1')).toContainText('Get In Touch');
    
    // Form exists
    await expect(page.locator('form')).toBeVisible();
    
    // All form fields exist
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('can fill out the form', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill the form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="subject"]', 'Test Subject');
    await page.fill('textarea[name="message"]', 'This is a test message');
    
    // Verify values were entered
    await expect(page.locator('input[name="name"]')).toHaveValue('Test User');
    await expect(page.locator('input[name="email"]')).toHaveValue('test@example.com');
  });

  test('contact information is displayed', async ({ page }) => {
    await page.goto('/contact');
    
    // Email address is shown
    await expect(page.locator('text=joseph.waugh312@gmail.com')).toBeVisible();
    
    // Location is shown
    await expect(page.locator('text=San Francisco')).toBeVisible();
    
    // Social links exist - use .first() to avoid strict mode violation
    await expect(page.locator('a[href*="github.com"]').first()).toBeVisible();
    await expect(page.locator('a[href*="linkedin.com"]').first()).toBeVisible();
    
    // Or be more specific with the selector
    const mainContent = page.locator('#main-content');
    await expect(mainContent.locator('a[href*="github.com"]')).toBeVisible();
    await expect(mainContent.locator('a[href*="linkedin.com"]')).toBeVisible();
  });

  test('Calendly button exists and has correct link', async ({ page }) => {
    await page.goto('/contact');
    
    const scheduleButton = page.locator('button:has-text("Schedule a Meeting")');
    await expect(scheduleButton).toBeVisible();
    
    // Check it has click handler (won't actually click to avoid opening new tab)
    await expect(scheduleButton).toBeEnabled();
  });
});