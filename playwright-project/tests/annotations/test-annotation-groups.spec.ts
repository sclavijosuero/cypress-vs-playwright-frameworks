import { test, expect } from '@playwright/test';

// test-annotation-groups.spec.ts

// Annotation belong to the describe block
test.describe('invoice tests', {
    annotation: { type: 'category', description: 'invoice' },
}, () => {
    test('check invoice details', async ({ page }) => {
        // ...
    });

    test('verify complete invoice', async ({ page }) => {
        // ...
    });
});
