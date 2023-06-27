/// <reference types="Cypress" />

//Reference sirve para que funcionen los comandos

describe("Validando titulo",()=>{
    it("test para validad titulo de la pagina", ()=>{
      cy.visit("https://testingqarvn.com.es/")
      cy.title().should("eq","TestingQaRvn | Mundo del Testing") //Funcion para validar que el titulo este bien escrito como se pide
      cy.log("Ok")
      //TestingQaRvn | Mundo del Testing
    })
  })