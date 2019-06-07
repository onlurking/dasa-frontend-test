describe('Search characters', () => {
  beforeEach(() => {
    cy.seedAndVisit('fixture:complete')
  })
  it('Visit the app', () => {
    cy.focused().should('have.class', 'search__field')
  })

  it('Search for Rick', () => {
    const searchValue = 'rick'
    cy.get('.search__field').type(searchValue)
    cy.get('.results > div > .card').should('have.length', 4)
  })

  it('Found nothing', () => {
    const searchValue = 'whatever'
    cy.get('.search__field').type(searchValue)
    cy.get('.results > div > .card').should('not.exist')
  })
})
