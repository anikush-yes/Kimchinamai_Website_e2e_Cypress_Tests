// "Tinklaraštis" (Blog) page, the page displayed is identical to the homepage, with no distinction between the two pages.

describe('Page Navigation Test', () => {

    it('Should navigate between the Main Page and Blog page', () => {
  
        cy.launchBrowser();
        
      // PAGRINDINIS (Main page link)
      cy.get('.pk-nav-link').contains('PAGRINDINIS').click({ force: true });
      cy.url().should('eq', 'https://kimchinamai.lt/');
      cy.contains('h1', 'AR ŽINOJOTE?').should('exist').and('be.visible');
  
      // TINKLARAŠTIS (Blog page link)
      cy.get('.pk-nav-link').contains('TINKLARAŠTIS').click({ force: true });
      cy.contains('h1', 'AR ŽINOJOTE?').should('exist').and('be.visible'); 
      
      // Verifying that the URL doesnt change after navigating to the Blog page, the page is the same, the URL remains the same.
      cy.url().should('eq', 'https://kimchinamai.lt/');  
  
      
      
    });
  
  });