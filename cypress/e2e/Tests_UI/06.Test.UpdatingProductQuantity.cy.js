/// <reference types="cypress" />

describe('Test Scenario 6: Updating Product Quantity', () => {
    it('Should update the price when product quantity is changed', () => {

        // 6.1 - 6.4
        cy.launchBrowser();

        cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

        cy.get('a[href="#ce-action=addToCart"]')
            .should('be.visible')
            .each(($el) => {
                cy.wrap($el).click({ force: true });
                cy.wait(1000);
            });

        cy.get('.elementor-button--view-cart').eq(0).click({ force: true });
        cy.wait(500);

        // 6.5


        cy.get('ul.cart-items li.cart-item').first()
            .find('.js-touchspin.js-increase-product-quantity')
            .click({ force: true });

        cy.wait(1000);

        // 6.6
        cy.get('ul.cart-items li.cart-item')
            .first()
            .find('.product-price strong') 
            .contains('20,40 €');

    });

});

