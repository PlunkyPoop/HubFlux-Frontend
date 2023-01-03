describe('Add record', () => {
    it('adds a new record when the button is clicked', () => {
      // Visit the page that contains data
      cy.visit('http://localhost:3000/settings');
  
      //Save how much records there are at the moment
      cy.get('.MuiTableBody-root tr').then(($rows) => {
        const amountofServicesBefore = $rows.length;

      // Go to the page to add service 
      //Sadly I have to do it like this cause the id dissapears because of MaterialUI
      cy.contains('Add Streaming service').click(); 

      // Fill in the name input
      cy.get('#nameinput').type('Cypress Service test');

      // Fill in the image location
      cy.get('#imageLocation').type('https://www.cypress.io/static/8fb8a1db3cdc0b289fad927694ecb415/cypress-io-logo-social-share.png');
      
      // Fill in the image location
      cy.get('#imdbMovie').type('tt-test');


      // Go to the page to add service
      cy.contains('Add').click(); 

        //Count the new rows
        cy.get('.MuiTableBody-root tr').then(($rows) => {
        const amountofServicesAfter = $rows.length;
  
          // Assert that the number of records increased by 1
          expect(amountofServicesAfter).to.equal(amountofServicesBefore + 1);
        });
      });
    });   
});
