import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should load homepage quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Should load in under 3 seconds
    expect(loadTime).toBeLessThan(3000);

    // Check that the page is interactive
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should have optimized images', async ({ page }) => {
    await page.goto('/');

    // Get all images on the page
    const images = await page.locator('img').all();

    for (const img of images) {
      const src = await img.getAttribute('src');
      if (src) {
        // Check if images are using modern formats or have proper sizing
        expect(src).toMatch(/\.(webp|avif|png|jpg|jpeg|svg)$/);
      }
    }
  });

  test('should have minimal JavaScript', async ({ page }) => {
    await page.goto('/');

    // Check that we don't have excessive JavaScript
    const scripts = await page.locator('script').all();
    expect(scripts.length).toBeLessThan(15); // Should have minimal scripts

    // Check for any console errors
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.waitForTimeout(2000);
    expect(consoleErrors).toHaveLength(0);
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('/');

    // Check for essential meta tags
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute('content');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content');
    const title = await page.title();
    expect(title).toContain('SatisPie');
  });
});
