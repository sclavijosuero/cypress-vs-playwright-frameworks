import { test, expect } from '@playwright/test';

// test-fixme-beforeeach2.spec.ts

// It will pass both tests because they are expected to fail
// (notice the wrong title and the wrong URL in the assertions).

test.beforeEach(async ({ page, isMobile }) => {
    test.fail();

    await page.goto('https://www.google.com');
});

test('Check Google page fails', async ({ page }) => {
    await expect(page).toHaveTitle('Googleeeeeeee')
});

test('Check Google url fails', async ({ page }) => {
    await expect(page).toHaveURL('https://www.google.commmmmmmm')
});
