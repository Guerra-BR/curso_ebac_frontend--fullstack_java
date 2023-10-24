/// <reference types="cypress" />

describe('Testes para a lista de contatos da EBAC', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve renderizar a pagina com sucesso', () => {
        cy.get('.sc-dmqHEX').should('have.length', 3)
    })

    it('Deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('JavaFox')
        cy.get('input[type="email"]').type('JavaFox@fullstack.com')
        cy.get('input[type="tel"]').type(15991234567)
        cy.get('.adicionar').click()

        cy.get('.sc-dmqHEX').should('have.length', 4)
    })

    it('Deve alterar um contato', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear().type('The Fox')
        cy.get('input[type="email"]').clear().type('TheFox@fullstack.com')
        cy.get('input[type="tel"]').clear().type(11991234567)

        cy.get('.alterar').click()

        cy.get('body').should('contain.text', 'The Fox')
    })

    it('Deve deletar o contato', () => {
        cy.get('.delete').last().click()
        cy.get('.sc-dmqHEX').should('have.length', 3)
    })
})