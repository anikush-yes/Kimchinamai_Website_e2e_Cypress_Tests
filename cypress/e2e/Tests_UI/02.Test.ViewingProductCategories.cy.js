/// <reference types="cypress" />

describe('Product Categories Page', () => {

    beforeEach(() => { // Fixed arrow function syntax
        cy.launchBrowser();

        cy.get('.pk-nav-link')
            .contains('PARDUOTUVĖ')
            .should('not.have.css', 'display', 'none')
            .trigger('mouseover', { force: true });
    });

    it('Should check Kimchi category and verify relevant products', () => {
        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#kimchi"]')
            .contains('KIMCHI')
            .click({ force: true });
        cy.wait(1000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#kimchi');
    });

    it('Should check Rinkiniai category and verify relevant products', () => {
        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#rinkiniai"]')
            .contains('RINKINIAI')
            .click({ force: true });
        cy.wait(5000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#rinkiniai');
    });

    it('Should check Sultys category and verify relevant products', () => {
        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#sultys"]')
            .contains('PROBIOTINĖS SULTYS')
            .click({ force: true });
        cy.wait(4000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#sultys');
    });

    it('Should check Padažai category and verify relevant products', () => {
        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#padazai"]')
            .contains('FERMENTUOTI PADAŽAI')
            .click({ force: true });
        cy.wait(4000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#padazai');
    });

    it('Should check Kita category and verify relevant products', () => {
        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#kita"]')
            .contains('KITA')
            .click({ force: true });
        cy.wait(4000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#kita');
    });

});