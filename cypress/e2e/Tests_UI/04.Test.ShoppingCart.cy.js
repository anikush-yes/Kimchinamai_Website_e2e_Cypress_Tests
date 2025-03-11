/// <reference types="cypress" />

describe('Shopping Cart', () => {

    it('Should add a product to the cart and verify it', () => {
      
//4.1-4.2

cy.launchBrowser();

cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

//4.3 Click Į krepšelį on a product.

cy.get('a[href="#ce-action=addToCart"]') 
      .should('be.visible') 
      .each(($el, index, $list) => { 
        cy.wrap($el).click({ force: true }); 
        cy.wait(500); 
      });
  
///4.4 Open the Krepšelis (Cart)

  cy.get('.elementor-button--view-cart').eq(0).click({ force: true });
  cy.wait(500);

///4.5 Verify that the selected product appears in the cart.

  cy.get('ul.cart-items')  
  .find('li.cart-item')   
  .should('have.length.greaterThan', 0);

});
});