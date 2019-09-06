describe('Follow Player -- ', function() {
  it('Pressing following inside of search results follows the player', function() {
    cy.visit('/')
    cy.wait(1000)
    cy.get('.search__field').type('ste')
    cy.get('.qa-follow-201939').click()
    cy.wait(1000)
    expect(cy.get('.qa-details-201939'))

    // Persists changes to localStorage
    cy.reload()
    cy.wait(1000)
    expect(cy.get('.qa-details-201939'))
  })
})
