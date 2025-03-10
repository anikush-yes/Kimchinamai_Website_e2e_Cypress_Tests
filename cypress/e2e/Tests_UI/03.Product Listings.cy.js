/// <reference types="cypress" />

describe('Product Listings', () => {
    it('Should verify product details are correct', () => {

        cy.launchBrowser();

        cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

        // 3.1 Select a product from the list

        cy.get('h3.ce-product-name a')
            .contains('Tradicinis kimchi su jūros gėrybėmis')
            .click();


        //3.2 Verify the product name, price, and description are correct.
        cy.get('h1.ce-product-name').should('have.text', 'Tradicinis kimchi su jūros gėrybėmis');
        cy.get('div.ce-product-price span')
            .contains('10,20 €')
            .should('be.visible');
        cy.wait(1000);


        cy.get('div.ce-product-description-short p')
            .should('be.visible')
            .invoke('text')
            .then((text) => {

                const normalizedText = text.replace(/\s+/g, ' ').trim();
                const expectedText = 'Tradicinis - tikra kimchi klasika. Gamyboje naudojami kokybiškas ančiuvių padažas, fermentuotos saeujeot krevetės bei gochugaru pipirai suteikia mūsų receptui autentišką skonių paletę. Būtina paragauti visiems norintiems susidaryti nuomonę apie klasikinio paruošimo kimchi.';


                expect(normalizedText).to.equal(expectedText);
            });
    });
});