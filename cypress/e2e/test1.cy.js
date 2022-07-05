/// <reference types="cypress" />

describe('load page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    
  })

  it('title is correct', () => {
    cy.title().should('eq','Tasks')
    cy.get('form > input').should('be.visible').should('be.enabled').type('tarea 1{enter}').wait(200)
    cy.get('th').should('be.visible').wait(200)
    cy.get('.bg-slate-500 > .px-2 > .px-10').click().wait(200)
    cy.get('.bg-gray-100').click().wait(200)
    cy.get('#root > section > article > div.bg-gray-400.flex.items-center.justify-evenly.py-2 > button')
      .should('be.visible')
      .should('be.enabled')
      .click()
    cy.on('window:confirm', (t) => { // para validar la alerta de confirmacion que lanza el navegador al interntar borrar las tareas completadas
      expect(t).to.equal('Are you sure you want to delete it?')
      return true // en el return indicamos la accion a realizar

    })
  })

  it.only('create new notes', () => {
    cy.get('form > input').should('be.visible').should('be.enabled').type('tarea 1{enter}').wait(200)
    cy.get('form > input').should('be.visible').should('be.enabled').type('tarea 2{enter}').wait(200)
    cy.get('form > input').should('be.visible').should('be.enabled').type('tarea 3{enter}').wait(200)
    cy.get('form > input').should('be.visible').should('be.enabled').type('tarea 4{enter}').wait(200)

    // marcar completado algunas tareas
    cy.get(':nth-child(2) > .bg-slate-200 > .px-2 > input').check()
    cy.get(':nth-child(3) > .bg-slate-500 > .px-2 > .px-10').click()
    // mostrar tareas completadas
    cy.get('#root > section > article > div.bg-gray-400.flex.items-center.justify-evenly.py-2 > label').click().wait(200)

    // verificar si el texto es el deseado
    cy.get(':nth-child(4) > tbody > :nth-child(1) > .bg-slate-500 > .px-2 > .px-10').should('have.text','tarea 2')
    cy.get(':nth-child(4) > tbody > :nth-child(1) > .bg-slate-500 > .px-2 > .px-10').should('have.css','text-decoration-line')
    // cy.get(':nth-child(4) > tbody > :nth-child(1) > .bg-slate-500 > .px-2 > .px-10').should('contain','line-through')

    
    
  })
})

