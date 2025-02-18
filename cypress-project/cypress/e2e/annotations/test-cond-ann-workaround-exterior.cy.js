/// <reference types="cypress" />

// test-cond-ann-workaround-exterior.cy.js

// Ignore the test with title 'Name should be John Wick' if
// the 'runNameTest' environment variable is not set or is false.

const theName = 'Caine'
const theAge = 52

if (Cypress.env('runNameTest')) {
    it('Name should be John Wick', () => {
        expect(theName).to.be.equal('John Wick')
    })
}

it('Age should be 52', () => {
    expect(theAge).to.be.equal(52)
})