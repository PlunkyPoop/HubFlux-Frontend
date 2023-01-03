describe('edit record', () => {
    it('edit a record and check if its actually changed', () => {
      // Visit the page that contains the button
      cy.visit('http://localhost:3000/settings');

      cy.wait(500);

      //Save the text of the last stream service inside the table
      cy.get('.MuiTableBody-root tr:last-child .css-1ex1afd-MuiTableCell-root').invoke('text').then((text) => {
       const savedText = text;
    
      // Click the button to edit the last record
      cy.get('.MuiTableBody-root tr:last-child .css-ancrnh-MuiButtonBase-root-MuiIconButton-root svg[data-testid=ModeEditIcon]').click();
      
      // clear the first textfield
      cy.get('#nameinput').clear();

      // Fill in the name input
      cy.get('#nameinput').type('Cypress edited this name');
       
      // Click to change the service name
      cy.contains('Change').click(); 

      //get the new text inside the last row
      cy.get('.MuiTableBody-root tr:last-child .css-1ex1afd-MuiTableCell-root').invoke('text').then((text) => {
        const newsavedText = text;

      //check if it's changed
      expect(savedText).to.not.equal(newsavedText);
      
        });
      });
   
    });
});