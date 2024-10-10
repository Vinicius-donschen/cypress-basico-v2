it('testa a página da política de privacidade de forma independente', function(){
    cy.visit('../src/privacy.html')

    cy.contains('Utilzamos as tecnologias HTML, CSS e JavaScript').should('be.visible')
})