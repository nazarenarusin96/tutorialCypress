/// <reference types="Cypress" />

describe("Navegar por la pagina",()=>{
    it("Funcion para poder navegar arriba a", ()=>{
      cy.visit("https://testingqarvn.com.es/contacto")
      cy.get("#et_pb_contact_message_0").type('{pageup}')
      cy.wait(2500)
    })

    it("Funcion para poder navegar arriba abajo", ()=>{
        cy.visit("https://testingqarvn.com.es/contacto")
        cy.get("#et_pb_contact_message_0").type('{pagedown}')
        cy.wait(2500)
      })

      /*it.only("Funcion para poder navegar arriba abajo", ()=>{
        cy.visit("https://testingqarvn.com.es/contacto")
        cy.get("#et_pb_contact_message_0").type('{pagedown}')
        cy.wait(2500)
      })*/ // only hace que solo la funcion que la contenga se ejecute, las demas se saltean
  })