import { test, expect } from '@playwright/test';

// test-with-annotation.spec.ts

// Annotate the tests with a detailed description of the issue.

const theName = 'WICK-A11Y'

test('Plugin name should be WICK-A11Y', {
    annotation: {
        type: 'issue',
        description: 'Fix issue with with plugin name https://github.com/sclavijosuero/wick-a11y/issues',
    },
}, async ({ page }) => {
    expect(theName).toEqual('WICK-A11Y');
});
