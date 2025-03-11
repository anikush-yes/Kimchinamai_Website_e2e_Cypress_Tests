/// <reference types="cypress" />

describe('User Login', () => {
        it('should successfully log in with valid credentials', () => {
                //8.1
                cy.launchBrowser();

                //8.2 
                cy.get('a[href="https://kimchinamai.lt/mano-paskyra"]').first().click({ force: true });

                //8.3
                cy.contains('Prisijungti prie paskyros');

                //8.4
                cy.get('input[name="email"]').first().type('e97h8z9gepr@example.com');
                cy.get('input[name="password"]').type('Pass3124!');

                //8.5
                cy.get('.elementor-field-type-submit')
                        .find('.elementor-button-text')
                        .contains('Prisijungti')
                        .click();
                //8.6
                cy.get('a[href="https://kimchinamai.lt/mano-paskyra"]')
                        .find('span')
                        .should('be.visible')
                        .and('contain.text', 'Pavasare');

        });
});
