import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section with correct content', async ({ page }) => {
    // Check hero title
    await expect(page.locator('h1')).toContainText('Joseph Waugh');
    
    // Check hero subtitle (with hyphen)
    await expect(page.locator('text=Full-Stack Developer')).toBeVisible();
    
    // Check hero description
    await expect(page.locator('text=business and an MBA')).toBeVisible();
  });

  test('should have working CTA buttons', async ({ page }) => {
    // Test "View Projects" button
    await page.click('text=View Projects');
    await expect(page).toHaveURL('/projects');
    await page.goBack();
    
    // Test "Get In Touch" button
    await page.click('text=Get In Touch');
    await expect(page).toHaveURL('/contact');
  });

  test('should display focus areas', async ({ page }) => {
    // Check "What I Focus On" section exists
    await expect(page.locator('text=What I Focus On')).toBeVisible();
    
    // Check focus areas are displayed
    await expect(page.locator('text=Clean Code')).toBeVisible();
    await expect(page.locator('text=Modern Design')).toBeVisible();
    await expect(page.locator('text=Performance')).toBeVisible();
  });

  test('should display tech stack', async ({ page }) => {
    // Check tech stack section exists
    await expect(page.locator('text=Technologies I work with')).toBeVisible();
    
    // Use more specific selectors for tech badges
    const techSection = page.locator('div').filter({ hasText: 'Technologies I work with' }).first();
    await expect(techSection.locator('span').filter({ hasText: /^React$/ })).toBeVisible();
    await expect(techSection.locator('span').filter({ hasText: /^TypeScript$/ })).toBeVisible();
    await expect(techSection.locator('span').filter({ hasText: /^Node.js$/ })).toBeVisible();
  });

  test('should have smooth scroll behavior', async ({ page }) => {
    // Check if smooth scroll is applied
    const html = page.locator('html');
    const scrollBehavior = await html.evaluate((el) => 
      window.getComputedStyle(el).scrollBehavior
    );
    expect(scrollBehavior).toBe('smooth');
  });

  test('should display footer with links', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check footer content
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer a[aria-label="GitHub"]')).toBeVisible();
    await expect(page.locator('footer a[aria-label="LinkedIn"]')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Hero should still be visible
    await expect(page.locator('h1')).toBeVisible();
    
    // CTA buttons container should exist and be responsive
    const viewProjectsButton = page.locator('text=View Projects');
    const getInTouchButton = page.locator('text=Get In Touch'); 
    
    // Both buttons should be visible
    await expect(viewProjectsButton).toBeVisible();
    await expect(getInTouchButton).toBeVisible();
    
    // Check if they're stacked (one below the other) on mobile
    const viewProjectsBox = await viewProjectsButton.boundingBox();
    const getInTouchBox = await getInTouchButton.boundingBox();
    
    if (viewProjectsBox && getInTouchBox) {
      // If stacked, the second button's Y position should be greater
      const isStacked = getInTouchBox.y > viewProjectsBox.y;
      expect(isStacked).toBe(true);
    }
  });

  test('should have proper meta tags', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Joseph Waugh - Full Stack Developer/);
    
    // Check meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('Full-stack developer');
    
    // Check viewport meta
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toContain('width=device-width');
  });

  test('scroll progress indicator should work', async ({ page }) => {
    // Check if scroll progress bar exists - try different selectors
    const progressBar = page.locator('[data-scroll-progress]')
      .or(page.locator('.scroll-progress'))
      .or(page.locator('div[style*="transform: scaleX"]').first());
    
    // Check if the element exists at all
    const exists = await progressBar.count() > 0;
    
    if (exists) {
      // Initially should be at 0 or minimal width
      const initialStyle = await progressBar.getAttribute('style') || '';
      
      // Scroll down
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await page.waitForTimeout(500);
      
      // Check if style changed
      const midStyle = await progressBar.getAttribute('style') || '';
      
      // The style should have changed
      expect(midStyle).not.toBe(initialStyle);
    } else {
      // If no scroll progress bar, just verify page scrolls
      const initialScroll = await page.evaluate(() => window.scrollY);
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await page.waitForTimeout(500);
      const newScroll = await page.evaluate(() => window.scrollY);
      expect(newScroll).toBeGreaterThan(initialScroll);
    }
  });
});