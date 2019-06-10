describe('Search characters', () => {
  beforeEach(() => {
    cy.seedAndVisit('fixture:complete')
  })
  it('Should visit the app', () => {
    cy.focused().should('have.class', 'search__field')
  })

  it('Should search for Rick and find 4 results', () => {
    const searchValue = 'rick'
    cy.get('.search__field').type(searchValue)
    cy.get('.results > div > .card').should('have.length', 4)
  })

  it('Should search for "whatever" and find nothing', () => {
    const searchValue = 'whatever'
    cy.get('.search__field').type(searchValue)
    cy.get('.results > div > .card').should('not.exist')
  })
})
