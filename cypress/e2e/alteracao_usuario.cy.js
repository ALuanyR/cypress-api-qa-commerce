describe("Valida a API de alteração de usuário", () => {
  
  let tkn;
  beforeEach(() => {
    cy.login("luanycypress123@gmail.com", "123").then((token) => {
      tkn = token;
    });
  });

  it("Alteração cadastro com sucesso", () => {
    cy.api({
      method: "PUT",
      url: "users/67",
      body: {
        name: "Luany Teste Cypress",
        email: "luanycypress123@gmail.com",
        password: "123",
        isAdmin: true,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: tkn,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Usuário atualizado com sucesso.");
    });
  });

  it("Alteração de cadastro com erro", () => {
    cy.api({
      method: "PUT",
      url: "users/67",
      body: {
        name: "Luany Teste Cypress",
        email: "luany123@gmail.com",
        password: "123",
        isAdmin: true,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq("Token não fornecido.");
    });
  });
});
