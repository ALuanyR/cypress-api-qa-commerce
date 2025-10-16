describe("Validar a API de delete de usuário", () => {
  let tkn;
  beforeEach(() => {
    cy.login("luanycypress123@gmail.com", "123").then((token) => {
      tkn = token;
    });
  });

  it("log token", () => {
    cy.log(tkn);
  });

  it("Deleta usuário com sucesso", () => {
    cy.cadastrarUsuario("Luany", "email@delete.com", "teste@123").then(
      (response) => {
        let id = response.body.id;

        cy.api({
          method: "DELETE",
          url: "/users/" + id,
          headers: {
            Authorization: tkn,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.eq("Usuário deletado com sucesso.");
        });
      }
    );
  });
  it("Deleta usuário com erro 401", () => {
    cy.api({
      method: "DELETE",
      url: "/users/66",
      headers: {
        Authorization: "",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq("Token ausente.");
    });
  });
});
