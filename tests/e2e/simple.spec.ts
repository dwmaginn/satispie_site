import { test, expect } from '@playwright/test';

test.describe('Simple Site Tests', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SatisPie/);
  });

  test('should have navigation links', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');

    // Check that navigation links exist in the main navigation
    // Use more specific selectors to avoid browser dev tools
    // Look for links in the header navigation
    await expect(page.locator('header a[href="/"]')).toBeVisible();
    await expect(page.locator('header a[href="/products"]')).toBeVisible();
    await expect(page.locator('header a[href="/tips-and-tricks"]')).toBeVisible();
    await expect(page.locator('header a[href="/contact"]')).toBeVisible();
    await expect(page.locator('header a[href="/apply-today"]')).toBeVisible();
  });

  test('should have proper page structure', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');

    // Check for basic page structure - use more specific selectors
    // Look for the main content area
    await expect(page.locator('main, section').first()).toBeVisible();
    
    // Check for footer
    await expect(page.locator('footer')).toBeVisible();
  });
});
