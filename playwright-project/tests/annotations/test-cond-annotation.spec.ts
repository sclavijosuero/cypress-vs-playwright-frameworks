import { test, expect } from '@playwright/test';

// test-cond-annotation.spec.ts

// Skip the test if the browser is Firefox.

const theName = 'John Wick'

test('Name should be John Wick', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it');

    expect(theName).toEqual('John Wick');
});
