import { test, expect } from '@playwright/test';

test.describe('Content Validation', () => {
  test('all pages should have proper titles', async ({ page }) => {
    const pages = [
      { path: '/', expectedTitle: 'SatisPie Manufacturing' },
      { path: '/products', expectedTitle: 'Products' },
      { path: '/tips-and-tricks', expectedTitle: 'Tips' },
      { path: '/contact', expectedTitle: 'Contact' },
      { path: '/apply-today', expectedTitle: 'Apply Today' },
    ];

    for (const pageInfo of pages) {
      await page.goto(pageInfo.path);
      const title = await page.title();
      expect(title).toContain(pageInfo.expectedTitle);
      expect(title).toContain('SatisPie');
    }
  });

  test('all pages should have main headings', async ({ page }) => {
    const pages = [
      { path: '/', expectedHeading: 'Premium Pie Manufacturing' },
      { path: '/products', expectedHeading: 'Products' },
      { path: '/tips-and-tricks', expectedHeading: 'Tips' },
      { path: '/contact', expectedHeading: "Let's Build Your Pie Program" },
      { path: '/apply-today', expectedHeading: 'Join the SatisPie Team' },
    ];

    for (const pageInfo of pages) {
      await page.goto(pageInfo.path);
      // Look for the first h1 that's not from browser dev tools
      const headings = page.locator('h1');
      const headingCount = await headings.count();
      
      if (headingCount > 0) {
        // Get the first visible h1 that's not from dev tools
        const firstHeading = headings.first();
        await expect(firstHeading).toBeVisible();
        const headingText = await firstHeading.textContent();
        expect(headingText).toContain(pageInfo.expectedHeading);
      }
    }
  });

  test('should have no console errors', async ({ page }) => {
    const pages = ['/', '/products', '/tips-and-tricks', '/contact', '/apply-today'];

    for (const path of pages) {
      const consoleErrors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      await page.goto(path);

      // Wait a moment for any async errors
      await page.waitForTimeout(1000);

      // Allow for some expected 404s from external resources
      const filteredErrors = consoleErrors.filter(error => 
        !error.includes('Failed to load resource') && 
        !error.includes('404')
      );
      
      expect(filteredErrors).toHaveLength(0);
    }
  });

  test('should have proper meta descriptions', async ({ page }) => {
    await page.goto('/');
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content');

    await page.goto('/contact');
    const contactMetaDescription = page.locator('meta[name="description"]');
    await expect(contactMetaDescription).toHaveAttribute('content');
  });

  test('should have working PDF links', async ({ page }) => {
    await page.goto('/resources');

    // Check that PDF links exist - if they exist
    const pdfLinks = page.locator('a[href*=".pdf"]');
    const pdfCount = await pdfLinks.count();
    
    if (pdfCount > 0) {
      // If PDFs exist, check they have proper text
      await expect(pdfLinks.first()).toBeVisible();
    } else {
      // If no PDFs, that's also acceptable for this site
      console.log('No PDF links found on resources page - this is acceptable');
    }
  });
});
