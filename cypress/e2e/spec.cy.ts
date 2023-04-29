/// <reference types="cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/');
  });
});

// Set up the application state.
// Take an action.
// Make an assertion about the resulting application state.
