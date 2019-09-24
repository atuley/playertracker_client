describe('Unfollow Player -- ', function() {
  it.skip('Pressing x on player card unfollows player', function() {
    cy.visit('/')
    cy.wait(1000)
    cy.get('.search__field').type('ste')
    cy.get('.qa-follow-201939').click()
    cy.wait(1000)
    expect(cy.get('.qa-details-201939'))
    cy.get('.qa-x-201939').click()
    cy.get('.qa-details-201939').should('not.exist')
  })
})
