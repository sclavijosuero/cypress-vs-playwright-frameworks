/// <reference types="cypress" />

// test-only.cy.js

// This will only execute the second test titled 'Age should be 52',
// and it will pass.

const theName = 'Caine'
const theAge = 52

it('Name should be John Wick', () => {
    expect(theName).to.be.equal('John Wick')
})

it.only('Age should be 52', () => {
    expect(theAge).to.be.equal(52)
})
