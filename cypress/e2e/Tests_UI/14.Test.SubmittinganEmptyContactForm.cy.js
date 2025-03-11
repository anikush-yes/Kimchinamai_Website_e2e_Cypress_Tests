/// <reference types="cypress" />

describe('Submitting an Empty Contact Form', () => {

    it('The system should display validation errors when submitting an empty contact form.', () => {

        // 14.1 Open the homepage and verify that it loads successfully.
        cy.launchBrowser();

        // 14.2 Click on the "Kontaktai" (Contact) link in the navigation menu.
        cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-326c126 > :nth-child(1) > :nth-child(1) > .elementor-element-00ee875 > :nth-child(1) > .pk-ce-widget-wrapper > .pk-ce-widget > .pk-nav > .pk-nav-ul > :nth-child(4) > .flex-container > .pk-nav-link').click({ force: true });

        // 14.3 Verify that the contact page loads correctly.
        cy.url().should('eq', 'https://kimchinamai.lt/susisiekite-su-mumis');
        cy.contains('SUSISIEKITE SU MUMIS').should('be.visible');

        // 14.4 Leave all fields blank.
        cy.get('#id-contact-184cc202')
            .select('Vartotojų pagalba')
            .should('have.value', '2');

        cy.get('input[name="from"]')
            .clear(); // Leave email field empty

        cy.get('textarea[name="message"]')
            .clear(); // Leave message field empty

        // 14.5 Click submit.
        cy.get('.elementor-field-type-submit > .elementor-button').click();

        // 14.6 Verify the error message appears after submission.
        ///Not working
        cy.contains('Please fill out this field')
            .should('be.visible');

    });
})