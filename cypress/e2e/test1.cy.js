/// <reference types="cypress" />

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('form > input').should('be.visible').should('be.enabled').type('tarea 1{enter}').wait(200)
    cy.get('th').should('be.visible').wait(200)
    cy.get('.bg-slate-500 > .px-2 > .px-10').click().wait(200)
    cy.get('.bg-gray-100').click().wait(200)
  })
})

