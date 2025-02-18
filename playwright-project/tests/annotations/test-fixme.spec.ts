import { test, expect } from '@playwright/test';

// test-fixme.spec.ts

// The first test titled 'Name should be John Wick' will fail (incorrect name).
// The second test titled 'Age should be 52' will be skipped as is marked as fixme.

const theName = 'Caine'
const theAge = 52

test('Name should be John Wick', async ({ page }) => {
    expect(theName).toEqual('John Wick');
});

test.fixme('Age should be 52', async ({ page }) => {
    expect(theAge).toEqual(52);
});
