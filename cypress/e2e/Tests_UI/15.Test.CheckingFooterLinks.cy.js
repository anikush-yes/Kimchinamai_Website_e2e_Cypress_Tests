/// <reference types="cypress" />

describe('Checking Footer Links', () => {
    const footerLinks = [
        { name: 'Pagrindinis', url: 'https://kimchinamai.lt/' },
        { name: 'Kontaktai', url: 'https://kimchinamai.lt/susisiekite-su-mumis' },
        { name: 'Privatumo politika', url: 'https://kimchinamai.lt/content/2-privatumo-politika' },
        { name: 'Mano paskyra', expectedUrl: 'https://kimchinamai.lt/prisijungimas?back=my-account', requiresLogin: true },
        { name: 'Sąlygos ir taisyklės', url: 'https://kimchinamai.lt/content/3-salygos-ir-taisykles' },
        { name: 'Prekių pristatymas', url: 'https://kimchinamai.lt/content/1-delivery' },
        { name: 'DUK', url: '#' }
    ];

    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('https://kimchinamai.lt/', { timeout: 10000 });
        cy.wait(2000);
    });

    footerLinks.forEach(link => {
        it(`Should navigate to ${link.name} page correctly`, () => {
            cy.get('ul.elementor-icon-list-items')
                .should('be.visible')
                .contains('li', link.name)
                .click();


        });
    });
});