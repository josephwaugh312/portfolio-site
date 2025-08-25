import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    // Start at home page
    await page.goto('/');
    await expect(page).toHaveTitle(/Joseph Waugh/);
    
    // Navigate to Projects
    await page.click('text=Projects');
    await expect(page).toHaveURL('/projects');
    await expect(page.locator('h1')).toContainText('Featured Projects');
    
    // Navigate to About
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About Me');
    
    // Navigate to Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('Get In Touch');
    
    // Logo click returns to home
    await page.click('svg[viewBox="0 0 100 100"]');
    await expect(page).toHaveURL('/');
  });

  test('mobile menu should work correctly', async ({ page }) => {
    // Set mobile viewport (smaller than md breakpoint)
    await page.setViewportSize({ width: 640, height: 1024 });
    await page.goto('/');
    
    // Menu should be hidden initially
    await expect(page.locator('#mobile-menu')).not.toBeVisible();
    
    // Open mobile menu
    await page.click('button[aria-label="Open menu"]');
    await expect(page.locator('#mobile-menu')).toBeVisible();
    
    // Navigate via mobile menu
    await page.click('#mobile-menu >> text=Projects');
    await expect(page).toHaveURL('/projects');
    
    // Menu should close after navigation
    await expect(page.locator('#mobile-menu')).not.toBeVisible();
  });

  test('should show correct active state', async ({ page }) => {
    await page.goto('/');
    
    // Check home is active - look for the link with primary color
    const homeLinks = page.locator('a[href="/"]').filter({ hasText: 'Home' });
    const homeLink = homeLinks.first();
    const homeClass = await homeLink.getAttribute('class');
    expect(homeClass).toContain('text-primary');
    
    // Navigate to projects
    await page.click('a[href="/projects"]');
    await page.waitForURL('/projects');
    
    // Check projects is now active
    const projectsLinks = page.locator('a[href="/projects"]');
    const projectsLink = projectsLinks.first();
    const projectsClass = await projectsLink.getAttribute('class');
    expect(projectsClass).toContain('text-primary');
  });

  test('theme toggle should work', async ({ page }) => {
    await page.goto('/');
    
    // Check initial theme
    const html = page.locator('html');
    const initialTheme = await html.getAttribute('class');
    
    // Toggle theme
    await page.click('button[aria-label*="mode"]');
    
    // Theme should change
    await page.waitForTimeout(500); // Wait for transition
    const newTheme = await html.getAttribute('class');
    expect(newTheme).not.toBe(initialTheme);
  });
});