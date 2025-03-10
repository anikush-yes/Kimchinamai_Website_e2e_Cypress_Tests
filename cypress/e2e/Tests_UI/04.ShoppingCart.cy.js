/// <reference types="cypress" />

describe('Shopping Cart', () => {

    it('Should add a product to the cart and verify it', () => {

cy.launchBrowser();

cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

//04.1 Click Į krepšelį on a product.

cy.get('a[href="#ce-action=addToCart"]')  // Pasirinkite mygtuką pagal href atributą
  .should('be.visible')  // Patikrina, ar mygtukas matomas
  .first()
  .click({ force: true });

  //4.2 Open the Krepšelis page on the modal 
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.reload();
  
//NEVEIKIA, ATIDARO TUSCIA KREPSELI NORS PRODUKTAS BUVO IDETAS

  cy.get('.elementor-button--view-cart').eq(0).click({ force: true });
  cy.wait(500);

});
});