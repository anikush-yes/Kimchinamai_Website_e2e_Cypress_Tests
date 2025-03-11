/// <reference types="cypress" />



describe('Test Scenario 5: Removing a Product from the Cart', () => {
    it('Should remove a product from the cart', () => {

        //5.1.-5.2
cy.launchBrowser();

cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

//5.3

cy.get('a[href="#ce-action=addToCart"]')
.should('be.visible')  
.each(($el) => { 
    cy.wrap($el).click({ force: true });  
    cy.wait(1000);  
});

// 5.4
cy.get('.elementor-button--view-cart').eq(0).click({ force: true });
cy.wait(500);

//5.5
cy.get('.remove-from-cart')
.each(($el) => {
    cy.wrap($el).click({ force: true }); // Kiekvieną mygtuką paspaudžiame
    cy.wait(500);  // Palaukiame, kad veiksmas būtų atliktas
});

// 5.6
cy.contains('Jūsų krepšelyje nėra prekių')  // Tikriname, ar tekstas rodomas
            .should('be.visible');
});
});
