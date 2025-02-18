import { test, expect } from '@playwright/test';

// test-cond-multiple-annotation.spec.ts

// It will ignore the first test with the title 'Age should be 52'
// and will run only the second test with the title 'Name should be John Wick'
// if browser is not webkit or chromium

const theName = 'John Wick'
const theAge = 52

test('Age should be 52', async ({ page }) => {
    expect(theAge).toEqual(52);
})

test.only('Name should be John Wick', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit' || browserName === 'chromium', 'Skip for webkit and chromium');

    expect(theName).toEqual('John Wick');
});
