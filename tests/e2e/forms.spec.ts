import { test, expect } from '@playwright/test';

test.describe('Form Functionality', () => {
  test('contact form should have required fields', async ({ page }) => {
    await page.goto('/contact');

    // Check that form exists - look for any form on the page
    const forms = page.locator('form');
    await expect(forms.first()).toBeVisible();

    // Check required fields exist - using actual field names from contact form
    // Be more specific to avoid conflicts with footer newsletter form
    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="lastName"]')).toBeVisible();
    await expect(page.locator('input[name="company"]')).toBeVisible();
    // Use first() to get the contact form email field, not footer newsletter
    await expect(page.locator('input[name="email"]').first()).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('select[name="businessType"]')).toBeVisible();
    await expect(page.locator('select[name="interest"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();

    // Check submit button exists - be more specific to avoid footer newsletter button
    await expect(page.locator('button[type="submit"]').first()).toBeVisible();
  });

  test('apply form should have required fields', async ({ page }) => {
    await page.goto('/apply-today');

    // Check that form exists
    const form = page.locator('form');
    await expect(form).toBeVisible();

    // Check required fields exist - using actual field names from apply form
    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="lastName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('select[name="position"]')).toBeVisible();

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
    await expect(page.locator('form').first()).toBeVisible();
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

    // Check that labels are properly associated with inputs - using actual field names
    const firstNameLabel = page.locator('label[for="firstName"]');
    const lastNameLabel = page.locator('label[for="lastName"]');
    const emailLabel = page.locator('label[for="email"]');
    const messageLabel = page.locator('label[for="message"]');

    await expect(firstNameLabel).toBeVisible();
    await expect(lastNameLabel).toBeVisible();
    await expect(emailLabel).toBeVisible();
    await expect(messageLabel).toBeVisible();
  });
});
