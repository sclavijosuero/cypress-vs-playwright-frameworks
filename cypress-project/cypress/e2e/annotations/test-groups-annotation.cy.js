/// <reference types="cypress" />

// test-groups-annotation.cy.js

// Only the second test, 'should not login with invalid credentials',
// within the second context() 'User Login' will be executed.
// This is precisely the test marked with the .only annotation
//
// The rule in Cypress is that **within each primary test suite** in a spec file,
// if there is at least one test marked with a `.only` annotation, only those tests
// with `.only` will be executed, and all others will be ignored.

describe('User Management Suite', () => {

  context('User Registration', () => {
    it('should register a new user successfully', () => {
      // Test logic for user registration
    });

    it.skip('should not register with already existing email', () => {
      // Test logic for duplicate email registration
    });
  });

  context('User Login', () => {
    it('should login with valid credentials', () => {
      // Test logic for valid login
    });

    it.only('should not login with invalid credentials', () => {
      // Test logic for invalid login
    });
  });

});
