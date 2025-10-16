describe("Validar a API de cadastro de usuário", () => {
  let emailFaker = `teste${Math.floor(Math.random() * 1000000)}@gmail.com`;
  it("Criação de usuário com sucesso", () => {
    cy.api({
      method: "POST",
      url: "users",
      body: {
        name: "Luany Teste Cypress",
        email: emailFaker,
        password: "123",
        isAdmin: true,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Usuário criado com sucesso.");
    });
  });

  it("Criação de usuário com erro - email duplicado", () => {
    let emailFaker2 = `teste-duplicado${Math.floor(
      Math.random() * 1000000
    )}@gmail.com`;
    cy.cadastrarUsuario("Luany", emailFaker2, "teste@123");
    cy.cadastrarUsuario("Luany", emailFaker2, "teste@123").then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Email já cadastrado.");
    });
  });

  it("Criação de usuário com erro - email duplicado - Segunda forma", () => {
    cy.api("users").then((response) => {
      let email = response.body[2].email;
      cy.log(email);

      cy.cadastrarUsuario("Luany", email, "teste@123")
        .its("body.message")
        .should("eq", "Email já cadastrado.");
    });
  });

  it("Criação de usuário com sucesso - usando fixture", () => {
    cy.fixture("usuario").then((user) => {
      user.email = `teste${Date.now()}@gmail.com`;
      cy.cadastrarUsuario(user.name, user.email, user.password, user.isAdmin)
        .its("body.message")
        .should("eq", "Usuário criado com sucesso.");
    });
  });

  it("Criação de usuário com sucesso - Usando fixture - Segunda forma", () => {
    cy.fixture("usuario").then((body) => {
      body.email = `teste${Date.now()}@gmail.com`;
      cy.api({
        method: "POST",
        url: "users",
        body,
      })
        .its("body.message")
        .should("eq", "Usuário criado com sucesso.");
    });
  });
});
