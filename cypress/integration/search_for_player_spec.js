describe('Player Search -- ', function() {
  it('Displays relevant players after the second character', function() {
    cy.visit('/')
    cy.wait(1000)
    cy.get('.search__field').type('ste')
    expect(cy.get('.search__results').contains('Stephen Curry'))
  })
  it('Allows user to follow a player', function() {
    cy.visit('/')
    cy.wait(1000)
    cy.get('.search__field').type('ste')
    cy.get('.qa-follow-201939').click()
    cy.wait(1000)
    expect(cy.get('.qa-details-201939'))
  })
})
