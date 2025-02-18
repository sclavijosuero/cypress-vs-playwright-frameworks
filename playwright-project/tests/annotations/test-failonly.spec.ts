import { test, expect } from '@playwright/test';

// test-failonly.spec.ts

// The first test will pass because the name is what expected.
// The second test also will pass because although the age is incorrect,
// the test is marked as expected to fail.

const theName = 'John Wick'
const theAge = 52

test('Name should be John Wick', async ({ page }) => {
    expect(theName).toEqual('John Wick');
});

test.fail.only('Age should be 25 - test pass although assertion fails', async ({ page }) => {
    expect(theAge).toEqual(25);
});
