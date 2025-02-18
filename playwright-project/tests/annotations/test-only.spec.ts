import { test, expect } from '@playwright/test';

// test-only.spec.ts

// This will only execute the second test titled 'Age should be 52',
// and it will pass.

const theName = 'Caine'
const theAge = 52

test('Name should be John Wick', async ({ page }) => {
    // Goto google.com and check the title.
    await page.goto('https://www.google.com');
    expect(theName).toEqual('John Wick');
});

test.only('Age should be 52', async ({ page }) => {
    // Goto google.com and check the title.
    await page.goto('https://www.google.com');
    expect(theAge).toEqual(52);
});
