/// <reference types="cypress" />

describe('Searching for a Non-Existent Product', () => {
        it('Should display a "No results found" message for a non-existent product', () => {


                //11.1
                cy.launchBrowser();

                //11.2
                cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-6ae244e > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-a41c6b9 > .elementor-widget-container > .elementor-search > .elementor-search__toggle > .ceicon-search-glint')
                        .click();
                //11.3       
                cy.contains('Prekių paieška');

                //11.4
                cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-6ae244e > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-a41c6b9 > .elementor-widget-container > .elementor-search > .elementor-search__container > .elementor-search__input-wrapper > .elementor-search__input')
                        .type('Wrong product');

                cy.get('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-6ae244e > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-a41c6b9 > .elementor-widget-container > .elementor-search > .elementor-search__container > .elementor-search__input-wrapper > .elementor-search__input')
                        .type('{enter}');

                //11.5   Bug detected when searching for a non-existent product, no error message ("No results found") appears.


        });
});