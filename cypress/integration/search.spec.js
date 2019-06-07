describe('Search characters', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Visit the app', () => {
    cy.focused().should('have.class', 'search__field')
  })

  it('Search', () => {
    const searchValue = 'rick'
    cy.get('.search__field')
      .type(searchValue)
      .should('have.value', searchValue)
  })
})
