import { test, expect } from '@playwright/test';

test.describe('Conduit Main Page - Smoke Healthcheck', () => {
  test('should successfully load main page and display navigation elements', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Conduit/i);

    const logo = page.locator('nav').getByRole('link', { name: 'conduit' });
    await expect(logo).toBeVisible();

    const bannerHeading = page.getByRole('heading', { name: 'conduit' });
    await expect(bannerHeading).toBeVisible();

    const bannerSubtitle = page.getByText('A place to share your knowledge.');
    await expect(bannerSubtitle).toBeVisible();

    const signInLink = page.locator('nav').getByRole('link', { name: 'Sign in' });
    await expect(signInLink).toBeVisible();

    const signUpLink = page.locator('nav').getByRole('link', { name: 'Sign up' });
    await expect(signUpLink).toBeVisible();
  });
});