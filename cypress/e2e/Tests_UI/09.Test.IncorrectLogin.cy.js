/// <reference types="cypress" />

describe('Incorrect Login', () => {
        it('Should show an error message with incorrect login credentials', () => {
                //9.1
                cy.launchBrowser();

                //9.2 
                cy.get('a[href="https://kimchinamai.lt/mano-paskyra"]').first().click({ force: true });

                //9.3
                cy.contains('Prisijungti prie paskyros');

                //9.4
                cy.get('input[name="email"]').first().type('wrongemail@example.com');
                cy.get('input[name="password"]').type('rongpassword123');

                //9.5

                cy.get('.elementor-field-type-submit')
                        .find('.elementor-button-text')
                        .contains('Prisijungti')
                        .click();
                //9.6
                cy.get('.ce-login-form > .elementor-alert')
                        .should('be.visible')
                        .and('contain.text', 'Identifikavimas nepavyko');

        });
});
