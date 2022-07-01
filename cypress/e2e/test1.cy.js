/// <reference types="cypress" />

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('form > input').should('be.visible').should('be.enabled').type('tarea 1{enter}')
    cy.get('th').should('be.visible')
  })
})

