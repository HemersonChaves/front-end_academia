describe('page main', () => {
  beforeEach(() => {
    cy.viewport(1280, 1000)
    })
  test('deve exibir pagina inicial', () => {
    cy.visit('http://192.168.18.16:5173/')
    cy.get('#logo').should('be.visible')
    // cy.title.should('test')
  })
})