/// <reference types="cypress" />

describe('Verifies that the navigation menu functions correctly by ensuring each menu item redirects to the appropriate page', () => {

    it('Redirects the user without errors to the correct page: Pagrindinis, Parduotuvė, Tinklaraštis, Kontaktai, and the content of the page should be displayed properly.', () => {

        //1.1

        cy.launchBrowser();

        //1.2-1.3

        // PAGRINDINIS (Main page link)
        cy.get('.pk-nav-link').contains('PAGRINDINIS').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/');

        // PARDUOTUVĖ (Store page link)
        cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

        // TINKLARAŠTIS (Blog page link)
        cy.get('.pk-nav-link').contains('TINKLARAŠTIS').click({ force: true });
        cy.contains('h1', 'AR ŽINOJOTE?').should('exist').and('be.visible');

        // Clearing cookies, localStorage, and reloading the page
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();

        // KONTAKTAI (Contacts page link) - using `cy.get()` for `.pk-nav-link`
        cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-326c126 > :nth-child(1) > :nth-child(1) > .elementor-element-00ee875 > :nth-child(1) > .pk-ce-widget-wrapper > .pk-ce-widget > .pk-nav > .pk-nav-ul > :nth-child(4) > .flex-container > .pk-nav-link').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/susisiekite-su-mumis');
        cy.contains('SUSISIEKITE SU MUMIS').should('be.visible');



    });
});
