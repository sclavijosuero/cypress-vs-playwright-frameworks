/// <reference types="cypress" />

// test-groups-two-suites.cy.js

// In this example of test file  with two suites, only the first test with title
// 'Test 1.1 - Exclusive Test in Suite 1' in the first suite will run

describe('Primary Test Suite 1', () => {
    it.only('Test 1.1 - Exclusive Test in Suite 1', () => {
        // Test logic for exclusive test in Suite 1 (.only annotation)
        cy.log('Running exclusive test in Suite 1');
        expect(true).to.be.true;
    });

    it('Test 1.2 - Another Test in Suite 1', () => {
        // Test logic for another test in Suite 1 (will not run)
        cy.log('This test will not run');
        expect(true).to.be.true;
    });
});

describe('Primary Test Suite 2', () => {
    it('Test 2.1 - Test in Suite 2', () => {
        // Test logic for Suite 2 (will run normally)
        cy.log('Running test in Suite 2');
        expect(true).to.be.true;
    });

    it('Test 2.2 - Another Test in Suite 2', () => {
        // Test logic for another test in Suite 2 (will run normally)
        cy.log('Running another test in Suite 2');
        expect(true).to.be.true;
    });
});