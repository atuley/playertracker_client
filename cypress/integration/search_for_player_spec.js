describe('Player Search -- ', function() {
  it('Displays relevant players after the second character', function() {
    cy.visit("/")
    cy.get("search__field").type("ste")
    expect(
      cy.get("search__results").contains("Stephen Curry")
    )
  })
})
