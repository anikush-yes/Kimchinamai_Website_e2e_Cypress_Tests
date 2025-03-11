/// <reference types="cypress" />

describe('Submitting a Contact Form', () => {

        it('The contact form should be successfully submitted.', () => {

                //13.1

                cy.launchBrowser();



                //13.2
                cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-326c126 > :nth-child(1) > :nth-child(1) > .elementor-element-00ee875 > :nth-child(1) > .pk-ce-widget-wrapper > .pk-ce-widget > .pk-nav > .pk-nav-ul > :nth-child(4) > .flex-container > .pk-nav-link').click({ force: true });

                //13.3
                cy.url().should('eq', 'https://kimchinamai.lt/susisiekite-su-mumis');
                cy.contains('SUSISIEKITE SU MUMIS').should('be.visible');

                const randomText = `Message ${Math.random().toString(36).substring(2, 15)}`;
                //13.4
                cy.get('#id-contact-184cc202')
                        .select('Vartotojų pagalba')
                        .should('have.value', '2');

                cy.get('input[name="from"]')
                        .type('e97h8z9gepr@example.com')
                        .should('have.value', 'e97h8z9gepr@example.com');

                cy.get('textarea[name="message"]')
                        .type(randomText)
                        .should('have.value', randomText);

                //13.5
                cy.get('.elementor-field-type-submit > .elementor-button').click();
                //13.6
                cy.get('.elementor-message')
                        .should('be.visible')
                        .and('contain.text', 'Jūsų žinutė sėkmingai nusiųsta mūsų komandai.');

        });
});