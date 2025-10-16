describe("Validar a API de consulta de usuário", () => {
  it("Pesquisa usuário com sucesso", () => {
    cy.api({
      method: "GET",
      url: "users",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("Consulta usuário com sucesso - Formato simples", () => {
    cy.api("users").its("status").should("equal", 200);
  });

  it("Validar as propriedades do retorno da consulta", () => {
    cy.api("users")
      .its("body")
      .each((user) => {
        expect(user).to.have.property("id");
        expect(user).to.have.property("name");
        expect(user).to.have.property("email");
        expect(user).to.have.property("isAdmin");
      });
  });
});
