/// <reference types="cypress" />

const enum Routes {
  HOME = '/',
  ABOUT = '/about-us',
  FORMS = '/forms',
}

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
    const SEARCH_BAR_SELECTOR = 'input';
    const VALUE = 'rick';

    isHeadingContans(Routes.HOME, 'Home');
    const searchBar = cy.get(SEARCH_BAR_SELECTOR);
    searchBar.type(VALUE);
    searchBar.should('have.value', VALUE);
  });

  it('Visit AboutUs page', () => {
    isHeadingContans(Routes.ABOUT, 'About Us');
  });

  it('Visit forms page', () => {
    isHeadingContans(Routes.FORMS, 'Forms');
  });

  it('is navigation works clearly', () => {
    cy.visit(Routes.HOME);

    isUrlInclude('Forms', Routes.FORMS);
    isUrlInclude('About Us', Routes.ABOUT);
    isUrlInclude('Home', Routes.HOME);
  });
});
