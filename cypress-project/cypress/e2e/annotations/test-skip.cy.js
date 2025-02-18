/// <reference types="cypress" />

// test-skip.cy.js

// The first test titled 'Name should be John Wick' will fail (incorrect name).
// The second test titled 'Age should be 52' will be skipped.

const theName = 'Caine'
const theAge = 52

it('Name should be John Wick', () => {
    expect(theName).to.be.equal('John Wick')
})

it.skip('Age should be 52 - a', () => {
    expect(theAge).to.be.equal(52)
})

// This test is exactly equivalent to the above one
xit('Age should be 52 - b', () => {
    expect(theAge).to.be.equal(52)
})