/// <reference types="cypress" />

const enum Routes {
  HOME = '/',
  ABOUT = '/about-us',
  FORMS = '/forms',
}

const SEARCH_BAR_SELECTOR = 'input';
const CARD_SELECTOR = '[data-testid="card"]';
const BTN_SELECTOR = '[data-testid="search-button"]';
const MODAL_CROSS_SELECTOR = '[data-testid="modal-cross"]';

describe('e2e tests for application', () => {
  const isHeadingContans = (route: Routes, value: string) => {
    cy.visit(route);
    cy.get('[data-testid="heading"]').contains(value);
  };

  const isUrlInclude = (link: string, route: Routes) => {
    cy.contains(link).click();
    cy.url().should('include', route);
  };

  it('Visit Home page', () => {
    const SEARCH_VALUE = 'rick';

    isHeadingContans(Routes.HOME, 'Home');

    cy.get(CARD_SELECTOR).should(($cards) => expect($cards).to.have.length(20));

    cy.get(`${CARD_SELECTOR}:first`).click();
    cy.contains('2017-11-04T18:48:46.250Z');
    cy.get(MODAL_CROSS_SELECTOR).click();

    const searchBar = cy.get(SEARCH_BAR_SELECTOR);
    searchBar.type(SEARCH_VALUE);
    searchBar.should('have.value', SEARCH_VALUE);

    cy.get(BTN_SELECTOR).click();
    cy.get(CARD_SELECTOR).should(($cards) => {
      $cards.map(($card) => expect($cards).to.contain($card));
    });
  });

  it('Visit AboutUs page', () => {
    isHeadingContans(Routes.ABOUT, 'About Us');
  });

  it('Visit Forms page', () => {
    isHeadingContans(Routes.FORMS, 'Forms');
    const firstNameInput = cy.get('[data-testid="fist-name-input"]');
    const lastNameInput = cy.get('[data-testid="last-name-input"]');
    firstNameInput.type('Vitaly');
    firstNameInput.should('have.value', 'Vitaly');

    lastNameInput.type('Bakov');
    lastNameInput.should('have.value', 'Bakov');
  });

  it('is navigation works clearly', () => {
    cy.visit(Routes.HOME);

    isUrlInclude('Forms', Routes.FORMS);
    isUrlInclude('About Us', Routes.ABOUT);
    isUrlInclude('Home', Routes.HOME);
  });
});
