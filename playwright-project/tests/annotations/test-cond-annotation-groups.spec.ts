import { test, expect } from '@playwright/test';

// test-cond-annotation-groups.spec.ts

test.describe('browser-specific tests', () => {
    test.skip(({ browserName }) => browserName === 'firefox', 'Skip on Firefox!');

    test.beforeEach(async ({ page }) => {
        // This hook skips on Firefox.
        await page.goto('https://www.google.com');
    });

    test('test', async ({ page }) => {
        // This test skips on Firefox.
        await expect(page).toHaveTitle('Google')
    });
});
