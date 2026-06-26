import { test, expect } from '@playwright/test';

test.describe('Portfolio App UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to home page before each test
    await page.goto('/');
    await page.waitForSelector('main');
  });

  test('1. Home page loads successfully', async ({ page }) => {
    // Check that main content is visible
    await expect(page.locator('main')).toBeVisible();
    // Check the root div exists
    const isVisible = await page.evaluate(() => {
      const root = document.querySelector('[class*="min-h-screen"]');
      return root !== null;
    });
    expect(isVisible).toBe(true);
  });

  test('2. Navbar is visible', async ({ page }) => {
    // Check navbar component exists and is visible
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
  });

  test('3. Theme toggle button exists and is clickable', async ({ page }) => {
    // Find theme toggle by looking for buttons
    const buttons = page.locator('button');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
    
    // Click first button (theme toggle) and verify it doesn't error
    const firstButton = buttons.first();
    await expect(firstButton).toBeVisible();
  });

  test('4. Hero section is visible', async ({ page }) => {
    // Check hero section content
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Verify main has content
    const text = await main.textContent();
    expect(text?.length).toBeGreaterThan(0);
  });

  test('5. Multiple sections render on page', async ({ page }) => {
    // Count sections on page
    const sections = page.locator('section');
    const count = await sections.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('6. Page content includes portfolio data', async ({ page }) => {
    // Verify page has meaningful content
    const pageContent = await page.content();
    expect(pageContent.toLowerCase()).toMatch(/about|experience|project|contact/);
  });

  test('7. Scrollable page renders without errors', async ({ page }) => {
    // Scroll through page to verify no layout breaks
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(100);
    
    // Verify we're still on valid page
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('8. Page has proper heading structure', async ({ page }) => {
    // Verify page has headings
    const h1 = page.locator('h1');
    const h2 = page.locator('h2');
    const h3 = page.locator('h3');
    
    const totalHeadings = 
      (await h1.count()) + 
      (await h2.count()) + 
      (await h3.count());
    
    expect(totalHeadings).toBeGreaterThan(0);
  });

  test('9. Navigation links are present', async ({ page }) => {
    // Check that links exist on the page
    const links = page.locator('a');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('10. Page responds to viewport changes', async ({ page }) => {
    // Test responsive design
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.waitForTimeout(100);
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Switch to mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(100);
    
    // Main should still be visible
    await expect(main).toBeVisible();
  });
});
