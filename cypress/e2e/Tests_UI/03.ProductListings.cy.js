/// <reference types="cypress" />

describe('Product Listings', () => {
    it('Should verify product details are correct', () => {

        cy.launchBrowser();

        cy.get('.pk-nav-link').contains('PARDUOTUVĖ').click({ force: true });
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve');

        // 3.3 Select a product from the list

        cy.get('h3.ce-product-name a')
            .contains('Tradicinis kimchi su jūros gėrybėmis')
            .click();


        //3.4 Verify the product name, price, description, "Į krepšelį"(Add to Cart) button, additional description "Aprašymas" "Prekių pristatymas" (Delivery) are correct.

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


        //Contains 'Į KREPŠELĮ' button 

        cy.contains('Į KREPŠELĮ').should('be.visible');


        //Checking if additional description available in dropdown menu "Aprašymas"

        cy.contains('Aprašymas').click();

        cy.get('#elementor-tab-content-1091')
            .should('be.visible')
            .and('contain', 'Sudėtis')
            .and('contain', 'Grynasis kiekis: 500 g')
            .and('contain', 'Pagaminta Lietuvoje');



        //Checking if delivery infromation available in dropdown menu "Prekių pristatymass"

        cy.contains('Prekių pristatymas').click();
        cy.get('#elementor-tab-content-1092')
            .should('be.visible')
            .and('contain', 'Užsakymus įprastai išsiunčiame pirmadieniais ir ketvirtadieniais')
            .and('contain', 'pristatymas užtrunka vieną darbo dieną')
            .and('contain', 'kimchi pristatomi sufasuoti į tam pritaikytą pakuotę');


    });
});