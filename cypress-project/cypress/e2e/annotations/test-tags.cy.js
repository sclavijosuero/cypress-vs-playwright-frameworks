/// <reference types="cypress" />

// test-tags.cy.js

// The test suite 'User Registration' has two tags: '@user-reg' and '@smoke'.
// '@user-reg' is a tag representing the functionality checked in the test
// '@smoke' is a tag representing the test type (smoke test)
describe('User Registration', { tags: ['@user-reg', `@smoke`] }, () => {

    // The first test is tagged with '@happy` to represent the happy path scenario
    it('should register a new user successfully', { tags: '@happy' }, () => {
        // Test logic for user registration
    });

    // The second test is tagged with '@unhappy` to represent the unhappy path scenario
    it('should not register with already existing email', { tags: '@unhappy' }, () => {
        // Test logic for duplicate email registration
    });

})

/* ----------------------------------------------------------------------
# Run suites and tests that have tag @user-reg 
$ npx cypress run --env grepTags=@user-reg

# Run suites and tests that have tag @user-reg and @smoke
$ npx cypress run --env grepTags=@user-reg+@smoke

# Run suites and tests that have tag @happy or @unhappy
$ npx cypress run --env grepTags="@happy @unhappy"
---------------------------------------------------------------------- */
