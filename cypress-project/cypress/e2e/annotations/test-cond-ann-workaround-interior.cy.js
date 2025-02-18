/// <reference types="cypress" />

// test-cond-ann-workaround-interior.cy.js

// Do not execute the logic of the test 'Name should be John Wick' if
// the 'runNameTest' environment variable is not set or is false.

const theName = 'Caine'
const theAge = 52

it('Name should be John Wick', () => {
    if (!Cypress.env('runNameTest')) {
        return
    }
    expect(theName).to.be.equal('John Wick')
})

it('Age should be 52', () => {
    expect(theAge).to.be.equal(52)
})