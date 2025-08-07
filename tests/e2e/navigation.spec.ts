import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    // Start at homepage
    await page.goto('/');

    // Check that we're on the homepage
    await expect(page).toHaveTitle(/SatisPie Manufacturing/);

    // Navigate to Products
    await page.click('a[href="/products"]');
    await expect(page).toHaveURL('/products');
    await expect(page.locator('h1')).toContainText('Products');

    // Navigate to Tips & Tricks
    await page.click('a[href="/tips-and-tricks"]');
    await expect(page).toHaveURL('/tips-and-tricks');
    await expect(page.locator('h1')).toContainText('Tips');

    // Navigate to Contact Us
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('Contact');

    // Navigate to Apply Today
    await page.click('a[href="/apply-today"]');
    await expect(page).toHaveURL('/apply-today');
    await expect(page.locator('h1')).toContainText('Apply');

    // Navigate back to Home
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });

  test('should have working logo link', async ({ page }) => {
    await page.goto('/products');

    // Click on logo to go home
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });

  test('should show 404 page for invalid routes', async ({ page }) => {
    await page.goto('/nonexistent-page');

    // Should show our custom 404 page
    await expect(page.locator('h1')).toContainText('404');
    await expect(page.locator('p').first()).toContainText('Oops! The page you');

    // Should have a link back to home
    await expect(page.locator('a[href="/"]').first()).toBeVisible();
  });
});
