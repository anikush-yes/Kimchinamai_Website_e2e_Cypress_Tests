/// <reference types="cypress" />

describe('Product Categories Page', () => {

    it('Should check each category and verify relevant products', () => {

        
        cy.launchBrowser();
    
        
        cy.get('.pk-nav-link')
            .contains('PARDUOTUVĖ')
            .should('not.have.css', 'display', 'none') 
            .trigger('mouseover', { force: true });
           
        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#kimchi"]')
            .contains('KIMCHI')
            .click({ force: true });
        cy.wait(1000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#kimchi');
        
        ////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Čia lūžta!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        cy.get('.pk-nav-link')
            .contains('PARDUOTUVĖ')
            .should('not.have.css', 'display', 'none')
            .trigger('mouseover', { force: true });

        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#rinkiniai"]')
            .contains('RINKINIAI')
            .click({ force: true });
        cy.wait(5000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#rinkiniai');

        cy.get('.pk-nav-link')
            .contains('PARDUOTUVĖ')
            .should('not.have.css', 'display', 'none')
            .trigger('mouseover', { force: true });

        cy.wait(4000);
        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#sultys"]')
            .contains('PROBIOTINĖS SULTYS')
            .click({ force: true });
        cy.wait(4000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#sultys');

        cy.get('.pk-nav-link')
            .contains('PARDUOTUVĖ')
            .should('not.have.css', 'display', 'none')
            .trigger('mouseover', { force: true });

        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#padazai"]')
            .contains('FERMENTUOTI PADAŽAI')
            .click({ force: true });
        cy.wait(4000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#padazai');

        cy.get('.pk-nav-link')
            .contains('PARDUOTUVĖ')
            .should('not.have.css', 'display', 'none')
            .trigger('mouseover', { force: true });

        cy.get('a[href="https://kimchinamai.lt/10-parduotuve#kita"]')
            .contains('KITA')
            .click({ force: true });
        cy.wait(4000);
        cy.url().should('eq', 'https://kimchinamai.lt/10-parduotuve#kita');

    });
});
 
//<a href="https://kimchinamai.lt/10-parduotuve#kimchi">KIMCHI</a>
//<a href="https://kimchinamai.lt/10-parduotuve#rinkiniai">RINKINIAI</a>
//<a href="https://kimchinamai.lt/10-parduotuve#sultys">PROBIOTINĖS SULTYS</a>
//<a href="https://kimchinamai.lt/10-parduotuve#padazai">FERMENTUOTI PADAŽAI</a>
//<a href="https://kimchinamai.lt/10-parduotuve#kita">KITA</a>


