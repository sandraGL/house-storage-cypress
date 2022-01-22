import {When, Then} from 'cypress-cucumber-preprocessor/steps';

When('I visit the house storage app', () => {
    cy.visit("/");
})

Then('I should see the login page', () => {
    cy.url().should('include', '/login');
});