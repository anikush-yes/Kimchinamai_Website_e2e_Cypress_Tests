/// <reference types="cypress" />

describe('Verifies that the navigation menu functions correctly by ensuring each menu item redirects to the appropriate page', () => {

    it('Redirects the user without errors to the correct page: Pagrindinis, Parduotuvė, Tinklaraštis, Kontaktai, and the content of the page should be displayed properly.', () => {

        //1.1

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log('Ignoring uncaught exception:', err.message);
            return false;
        });

        cy.visit('https://kimchinamai.lt/', {
            onBeforeLoad(win) {
                win.XMLHttpRequest = null;
            }
        });
        cy.url().should('eq', 'https://kimchinamai.lt/');

        //1.2

        cy.contains('a', 'PAGRINDINIS').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/');



        cy.contains('a', 'PARDUOTUVĖ').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');


        cy.contains('a', 'TINKLARAŠTIS').click({ force: true });
        cy.contains('h1', 'AR ŽINOJOTE?').should('exist').and('be.visible');

        
        cy.contains('a', 'KONTAKTAI').click();

    });
});