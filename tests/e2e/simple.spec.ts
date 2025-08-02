import { test, expect } from '@playwright/test';

test.describe('Simple Site Tests', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SatisPie/);
  });

  test('should have navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check that navigation links exist in the main navigation
    await expect(page.locator('nav a[href="/"]').first()).toBeVisible();
    await expect(page.locator('nav a[href="/branded-products"]')).toBeVisible();
    await expect(page.locator('nav a[href="/tips-and-techniques"]')).toBeVisible();
    await expect(page.locator('nav a[href="/contact"]')).toBeVisible();
    await expect(page.locator('nav a[href="/apply-today"]')).toBeVisible();
  });

  test('should have proper page structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for basic page structure - use more specific selectors
    await expect(page.locator('header[role="banner"]')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
}); 