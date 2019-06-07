describe('App initialization', () => {
  it('Display results from API on load', () => {
    cy.seedAndVisit()
    cy.get('.results > div > .card').should('have.length', 2)
  })
})
