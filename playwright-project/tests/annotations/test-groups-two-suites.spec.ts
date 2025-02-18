import { test, expect } from '@playwright/test';

// In this example of test file  with two suites, only the first test with title
// 'Test 1.1 - Exclusive Test in Suite 1' in the first suite will run

test.describe('Primary Test Suite 1', () => {
    test.only('Test 1.1 - Exclusive Test in Suite 1', async ({ page }) => {
        // Test logic for exclusive test in Suite 1 (.only annotation)
        console.log('Running exclusive test in Suite 1');
        expect(true).toBe(true);
    });

    test('Test 1.2 - Another Test in Suite 1', async ({ page }) => {
        // Test logic for another test in Suite 1 (will not run)
        console.log('This test will not run');
        expect(true).toBe(true);
    });
});

test.describe('Primary Test Suite 2', () => {
    test('Test 2.1 - Test in Suite 2', async ({ page }) => {
        // Test logic for Suite 2 (will run normally)
        console.log('Running test in Suite 2');
        expect(true).toBe(true);
    });

    test('Test 2.2 - Another Test in Suite 2', async ({ page }) => {
        // Test logic for another test in Suite 2 (will run normally)
        console.log('Running another test in Suite 2');
        expect(true).toBe(true);
    });
});