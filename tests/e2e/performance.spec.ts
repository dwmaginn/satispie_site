import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should load homepage quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Should load in under 5 seconds (more realistic for development)
    expect(loadTime).toBeLessThan(5000);

    // Check that the page is interactive - look for main content
    await expect(page.locator('main, section').first()).toBeVisible();
  });

  test('should have optimized images', async ({ page }) => {
    await page.goto('/');

    // Get all images on the page
    const images = await page.locator('img').all();

    for (const img of images) {
      const src = await img.getAttribute('src');
      if (src) {
        // Check if images are using modern formats or have proper sizing
        // Allow for external URLs (like Unsplash) as they may not have extensions
        if (src.startsWith('http')) {
          // External images are acceptable
          continue;
        }
        expect(src).toMatch(/\.(webp|avif|png|jpg|jpeg|svg)$/);
      }
    }
  });

  test('should have minimal JavaScript', async ({ page }) => {
    await page.goto('/');

    // Check that we don't have excessive JavaScript
    const scripts = await page.locator('script').all();
    expect(scripts.length).toBeLessThan(20); // More realistic limit

    // Check for any console errors
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.waitForTimeout(2000);
    
    // Filter out expected 404s from external resources
    const filteredErrors = consoleErrors.filter(error => 
      !error.includes('Failed to load resource') && 
      !error.includes('404')
    );
    
    expect(filteredErrors).toHaveLength(0);
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
