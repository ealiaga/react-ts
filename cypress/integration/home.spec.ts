describe('Home', () => {
  it('Visit home', () => {
      cy.visit('/');
      cy.get('.App-title').should('be.visible');
  });
})

