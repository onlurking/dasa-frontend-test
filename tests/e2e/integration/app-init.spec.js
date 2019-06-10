describe('App initialization', () => {
  it('Should display results from API on load', () => {
    cy.seedAndVisit()
    cy.get('.results > div > .card').should('have.length', 2)
  })
})
