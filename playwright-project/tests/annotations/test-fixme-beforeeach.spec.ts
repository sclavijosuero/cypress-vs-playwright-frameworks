import { test, expect } from '@playwright/test';

// test-fixme-beforeeach.spec.ts

// It will skip both tests if we are testing on mobile devices.
// Otherwise, it will visit google.com and check the page title in
// one of the tests and the URL in the other.

test.beforeEach(async ({ page, isMobile }) => {
    test.fixme(isMobile, 'Google page not in mobile yet');

    await page.goto('https://www.google.com');
});

test('Check Google page', async ({ page }) => {
    await expect(page).toHaveTitle('Google')
});

test('Check Google url', async ({ page }) => {
    await expect(page).toHaveURL('https://www.google.com')
});