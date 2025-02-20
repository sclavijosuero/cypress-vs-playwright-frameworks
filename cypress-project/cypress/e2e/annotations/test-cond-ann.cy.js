/// <reference types="cypress" />

// test-cond-ann.cy.js

// Skip the running test conditionally using the Tesat Context

const theName = 'Caine'
const theAge = 52

it('Name should be John Wick', () => {
    if (!Cypress.env('runNameTest')) {
        cy.state('runnable').ctx.skip() // Skip the current test if condition met
    }
    expect(theName).to.be.equal('John Wick')
})

it('Age should be 52', () => {
    expect(theAge).to.be.equal(52)
})
