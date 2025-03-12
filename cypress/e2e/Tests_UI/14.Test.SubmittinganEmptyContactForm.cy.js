/// <reference types="cypress" />

describe('Submitting an Empty Contact Form', () => {

    it('The system should display validation errors when submitting an empty contact form.', () => {

        // 14.1 
        cy.launchBrowser();

        // 14.2 
        cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-326c126 > :nth-child(1) > :nth-child(1) > .elementor-element-00ee875 > :nth-child(1) > .pk-ce-widget-wrapper > .pk-ce-widget > .pk-nav > .pk-nav-ul > :nth-child(4) > .flex-container > .pk-nav-link').click({ force: true });

        // 14.3 
        cy.url().should('eq', 'https://kimchinamai.lt/susisiekite-su-mumis');
        cy.contains('SUSISIEKITE SU MUMIS').should('be.visible');

        // 14.4 
        cy.get('#id-contact-184cc202')
            .select('Vartotojų pagalba')
            .should('have.value', '2');

        cy.get('input[name="from"]')
            .clear(); 

        cy.get('textarea[name="message"]')
            .clear(); 

        // 14.5 
        cy.get('.elementor-field-type-submit > .elementor-button').click();

        // 14.6 
    
        cy.get('input:invalid, textarea:invalid').should('have.length', 3);

        
        cy.get('input[name="from"]').then(($input) => {
          expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
        
    
        cy.get('textarea[name="message"]').then(($textarea) => {
          expect($textarea[0].validationMessage).to.eq('Please fill out this field.');

    });
});
});