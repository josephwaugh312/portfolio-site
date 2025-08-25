const { test, expect } = require('@playwright/test');

test('debug contact form validation', async ({ page }) => {
  await page.goto('/contact');
  
  // Try submitting empty form
  await page.click('button[type="submit"]');
  
  // Wait a bit
  await page.waitForTimeout(1000);
  
  // Take a screenshot to see what happened
  await page.screenshot({ path: 'empty-form-submit.png' });
  
  // Check what's visible on the page
  const errorTexts = await page.locator('.text-destructive').allTextContents();
  console.log('Error texts found:', errorTexts);
  
  // Check if form is still there
  const formVisible = await page.locator('form').isVisible();
  console.log('Form still visible:', formVisible);
  
  // Now try with invalid email
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'invalid-email');
  await page.fill('input[name="subject"]', 'Test Subject');
  await page.fill('textarea[name="message"]', 'Test message here');
  
  await page.click('button[type="submit"]');
  await page.waitForTimeout(1000);
  
  // Take another screenshot
  await page.screenshot({ path: 'invalid-email-submit.png' });
  
  // Check for any error messages
  const allErrors = await page.locator('text=/required|valid|error/i').allTextContents();
  console.log('All error-like texts:', allErrors);
});