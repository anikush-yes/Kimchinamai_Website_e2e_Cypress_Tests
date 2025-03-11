/// <reference types="cypress" />


describe('User Registration', () => {
        it('Should successfully register a new user', () => {

                //7.1
                cy.launchBrowser();

                //7.2

                cy.get('a[href="https://kimchinamai.lt/mano-paskyra"]').first().click({ force: true });

                //7.3
                cy.contains('Prisijungti prie paskyros');

                //7.4

                cy.contains('Sukurti paskyrą').click({ force: true });

                //7.5

                const randomFirstName = 'Pavasare';
                const randomLastName = 'Pavasareele';
                const randomEmail = `${Math.random().toString(36).substring(2, 15)}@example.com`;
                const randomPassword = `Pass${Math.floor(Math.random() * 10000)}!`;
                const randomBirthday = `199${Math.floor(Math.random() * 10)}-0${Math.floor(Math.random() * 9) + 1}-1${Math.floor(Math.random() * 9) + 1}`;  // Atsitiktinė gimimo data

                cy.get('input[name="firstname"]').type(randomFirstName);
                cy.get('input[name="lastname"]').type(randomLastName);
                cy.get('input[name="email"]').first().type(randomEmail);
                cy.get('input[name="password"]').type(randomPassword);
                cy.get('input[name="birthday"]').type(randomBirthday);

                //7.6 
                cy.get('input[name="psgdpr"]').check();
                cy.get('input[name="customer_privacy"]').check();

                //7.7 
                cy.get('.elementor-button-content-wrapper')
                        .find('.elementor-button-text')
                        .contains('Sukurti paskyrą')
                        .click();

                //7.8
                cy.get('a[href="https://kimchinamai.lt/mano-paskyra"]')
                        .find('span')
                        .should('be.visible')
                        .and('contain.text', 'Pavasare');
        });
});





