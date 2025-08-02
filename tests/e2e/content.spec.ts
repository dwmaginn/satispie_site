import { test, expect } from '@playwright/test';

test.describe('Content Validation', () => {
  test('all pages should have proper titles', async ({ page }) => {
    const pages = [
      { path: '/', expectedTitle: 'Home' },
      { path: '/branded-products', expectedTitle: 'Branded Products' },
      { path: '/tips-and-techniques', expectedTitle: 'Tips & Techniques' },
      { path: '/contact', expectedTitle: 'Contact' },
      { path: '/apply-today', expectedTitle: 'Apply Today' }
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
      { path: '/', expectedHeading: 'Welcome' },
      { path: '/branded-products', expectedHeading: 'Branded' },
      { path: '/tips-and-techniques', expectedHeading: 'Tips' },
      { path: '/contact', expectedHeading: 'Contact' },
      { path: '/apply-today', expectedHeading: 'Apply' }
    ];

    for (const pageInfo of pages) {
      await page.goto(pageInfo.path);
      const heading = page.locator('main h1');
      await expect(heading).toBeVisible();
      await expect(heading).toContainText(pageInfo.expectedHeading);
    }
  });

  test('should have no console errors', async ({ page }) => {
    const pages = ['/', '/branded-products', '/tips-and-techniques', '/contact', '/apply-today'];
    
    for (const path of pages) {
      const consoleErrors: string[] = [];
      
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });
      
      await page.goto(path);
      
      // Wait a moment for any async errors
      await page.waitForTimeout(1000);
      
      expect(consoleErrors).toHaveLength(0);
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
    await page.goto('/tips-and-techniques');
    
    // Check that PDF links exist
    const pdfLinks = page.locator('a[href*=".pdf"]');
    await expect(pdfLinks).toHaveCount(2); // Should have 2 PDF links
    
    // Check that links have proper text
    await expect(page.locator('text=Baking Fundamentals')).toBeVisible();
    await expect(page.locator('text=Baking Solutions')).toBeVisible();
  });
}); 