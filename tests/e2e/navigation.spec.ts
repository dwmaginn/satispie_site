import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    // Start at homepage
    await page.goto('/');
    
    // Check that we're on the homepage
    await expect(page).toHaveTitle(/Home.*SatisPie/);
    
    // Navigate to Branded Products
    await page.click('nav a[href="/branded-products"]');
    await expect(page).toHaveURL('/branded-products');
    await expect(page.locator('main h1')).toContainText('Branded');
    
    // Navigate to Tips & Techniques
    await page.click('nav a[href="/tips-and-techniques"]');
    await expect(page).toHaveURL('/tips-and-techniques');
    await expect(page.locator('main h1')).toContainText('Tips');
    
    // Navigate to Contact Us
    await page.click('nav a[href="/contact"]');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('main h1')).toContainText('Contact');
    
    // Navigate to Apply Today
    await page.click('nav a[href="/apply-today"]');
    await expect(page).toHaveURL('/apply-today');
    await expect(page.locator('main h1')).toContainText('Apply');
    
    // Navigate back to Home
    await page.locator('nav a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });

  test('should have working logo link', async ({ page }) => {
    await page.goto('/branded-products');
    
    // Click on logo to go home
    await page.locator('header a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });

  test('should show 404 page for invalid routes', async ({ page }) => {
    await page.goto('/nonexistent-page');
    
    // Should show our custom 404 page
    await expect(page.locator('main h1')).toContainText('404');
    await expect(page.locator('main p').first()).toContainText('Oops! The page you');
    
    // Should have a link back to home
    await expect(page.locator('main a[href="/"]').first()).toBeVisible();
  });
}); 