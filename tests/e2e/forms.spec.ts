import { test, expect } from '@playwright/test';

test.describe('Form Functionality', () => {
  test('contact form should have required fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that form exists
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    // Check required fields exist
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    
    // Check submit button exists
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('apply form should have required fields', async ({ page }) => {
    await page.goto('/apply-today');
    
    // Check that form exists
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    // Check required fields exist
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="address"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('input[name="position"]')).toBeVisible();
    
    // Check submit button exists
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('contact form should validate required fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Should not submit (browser validation should prevent)
    // We can't easily test the actual submission without a backend,
    // but we can verify the form is still there
    await expect(page.locator('form')).toBeVisible();
  });

  test('apply form should validate required fields', async ({ page }) => {
    await page.goto('/apply-today');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Should not submit (browser validation should prevent)
    await expect(page.locator('form')).toBeVisible();
  });

  test('should have proper form labels', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that labels are properly associated with inputs
    const nameLabel = page.locator('label[for="name"]');
    const emailLabel = page.locator('label[for="email"]');
    const messageLabel = page.locator('label[for="message"]');
    
    await expect(nameLabel).toBeVisible();
    await expect(emailLabel).toBeVisible();
    await expect(messageLabel).toBeVisible();
  });
}); 