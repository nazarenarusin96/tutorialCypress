/// <reference types="Cypress" />

require("cypress-plugin-tab")

describe("Funcion para hacer un altabeo automatico",()=>{
    it("name", ()=>{
      cy.visit("https://testingqarvn.com.es/contacto")
      cy.get("#et_pb_contact_name_0").type("Nazarena").tab().
      type("Rusin").tab().
      type("Probando mensaje")
    })
  })

