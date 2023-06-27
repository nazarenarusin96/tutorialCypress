/// <reference types="Cypress" />

describe("enter y click",()=>{
    it("Funcion para ingresar datos mediante enter o haciendo click en un enlace", ()=>{
      cy.visit("https://www.google.com")
      cy.get("[name='q']").type("cypress io {enter}") //ingresa un input e inmediatamente pulsa enter
      cy.wait(1000) //espera el tiempo establecido
      cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click()//se copia el selector por consola, lo busca y hace click en el enlace
    })
  })
