describe("Primer test",()=>{
  it("probando", ()=>{
    cy.visit("https://www.google.com/")//Ingresa a la pagina que se le indica
    cy.wait(1000)//Se indica la cantidad de tiempo que se quiere esperar para que se siga ejecutando
    cy.get("#APjFqb").type("Naza")//selecciona un input como en este caso y el type escribe dentro de ese input
  })
})