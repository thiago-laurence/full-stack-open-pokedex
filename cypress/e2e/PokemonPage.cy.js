const PORT = 8080
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit(`http://localhost:${PORT}`)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})