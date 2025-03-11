/// <reference types="cypress" />

describe('Searching for a Product', () => {
    it('Should return relevant products based on the search query', () => {


//10.1
        cy.launchBrowser();

//10.2
        cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-6ae244e > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-a41c6b9 > .elementor-widget-container > .elementor-search > .elementor-search__toggle > .ceicon-search-glint')
        .click();
//10.3       
        cy.contains('Prekių paieška');

//10.4
        cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-6ae244e > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-a41c6b9 > .elementor-widget-container > .elementor-search > .elementor-search__container > .elementor-search__input-wrapper > .elementor-search__input')
        .type('Kimchi'); 
      
      cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-6ae244e > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-a41c6b9 > .elementor-widget-container > .elementor-search > .elementor-search__container > .elementor-search__input-wrapper > .elementor-search__input')
        .type('{enter}');
  
 //10.5    
      cy.contains('Kimchi') 
        .should('be.visible');

    });
});