import { test, expect } from '@playwright/test';

// test-cond-multiple-annotation2.spec.ts

// Skip the test if the browser is WebKit,
// for all the other browsers the test is expected to fail.

const theName = 'Caine'

test.fail('Name should not be John Wick - expected to fail and skipped for webkit', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Still working on it');

    expect(theName).toEqual('John Wick');
});
