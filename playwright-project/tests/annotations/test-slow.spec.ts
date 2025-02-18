import { test, expect } from '@playwright/test';

// test-slow.spec.ts

// The test is expected to be slow, so we triple its timeout.

test('Test for a very slow page', async ({ page }) => {
    await page.goto('https://www.slowpage.com');
    await expect(page).toHaveTitle('Welcome to the slow page');
});
