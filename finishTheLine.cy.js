/// <reference types="cypress" />

describe('My first test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // should be on a new URL which include '/commands/action'
        cy.url().should('include', '/commands/actions')

        // get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    });
});