describe('delete record', () => {
    it('deletes the last record when the delete button is clicked', () => {
      // Visit the page that contains data
      cy.visit('http://localhost:3000/settings');
  
      //Save how much records there are at the moment
      cy.get('.MuiTableBody-root tr').then(($rows) => {
        const amountofServicesBefore = $rows.length;


      // Click the button to delete the last record
      cy.get('.MuiTableBody-root tr:last-child .css-ancrnh-MuiButtonBase-root-MuiIconButton-root svg[data-testid=DeleteIcon]').click();
      
     //Has to wait a little bit so the backend can actually delete the record
      cy.wait(500);

        //Count the new rows
        cy.get('.MuiTableBody-root tr').then(($rows) => {
        const amountofServicesAfter = $rows.length;
  
          // Assert that the number of records decreased by 1
          expect(amountofServicesAfter).to.equal(amountofServicesBefore - 1);
        });
      });
    });   
});