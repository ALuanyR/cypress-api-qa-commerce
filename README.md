# 🔍 Cypress API QA Commerce

Projeto desenvolvido como parte dos estudos no curso de **Qualidade de Software** da **Impacta Digital**.

Este repositório tem como objetivo demonstrar **testes automatizados de API**, utilizando o **Cypress** e o **JavaScript**, aplicando na prática os conceitos estudados em **validação de endpoints** e **automação de testes**.  
O projeto teve início com a criação e validação das requisições no **Postman**, e em seguida, a automação dos mesmos cenários no **VS Code** com o **Cypress**.

---

## 🎯 Objetivo do Projeto

O objetivo principal deste projeto é **praticar e consolidar o aprendizado em automação de testes de API**, construindo um fluxo completo de validação de endpoints — desde o cadastro até a exclusão de usuários — com verificação de **cenários de sucesso e de erro**.

---

## 🧩 Escopo dos Testes

Foram criados testes automatizados cobrindo os principais **métodos HTTP** e cenários reais encontrados em APIs RESTful:

| Método | Cenário | Descrição |
|--------|----------|-----------|
| **POST** | Cadastro de usuário | Verifica o sucesso no cadastro e o comportamento quando o e-mail já existe (erro de duplicidade). |
| **GET** | Consulta de usuário | Valida se os dados retornados estão corretos e se o endpoint responde adequadamente. |
| **PUT** | Alteração de usuário | Testa a atualização de dados e o retorno de sucesso. |
| **DELETE** | Exclusão de usuário | Verifica se a exclusão é feita corretamente e o sistema responde com o status esperado. |

### ⚠️ Cenários de erro testados:
- E-mail duplicado  
- Token ausente ou inválido  
- Campos obrigatórios faltando  
- Requisição com dados incorretos  

---

## 🧠 Aprendizados e Conceitos Praticados

Durante o desenvolvimento deste projeto, foram explorados conceitos fundamentais da **qualidade de software e automação de testes**, como:

- Criação e envio de **requisições HTTP (GET, POST, PUT, DELETE)**  
- Validação de **status codes** (200, 201, 400, 401, 404, etc.)  
- Verificação de **estrutura e conteúdo de respostas JSON**  
- Simulação de **cenários de erro** (autenticação, duplicidade e dados inválidos)  
- Transição do **Postman para o Cypress** (reaproveitamento de casos manuais em automação)  
- Estruturação de testes organizados e legíveis com **JavaScript**  

---

## ⚙️ Ferramentas e Tecnologias Utilizadas

| Ferramenta | Função |
|-------------|--------|
| **Postman** | Criação e execução inicial dos testes de API de forma manual |
| **Cypress** | Automação dos testes de API e execução de forma programática |
| **JavaScript (Node.js)** | Linguagem de desenvolvimento dos scripts de teste |
| **VS Code** | Editor de código utilizado no desenvolvimento |
| **Git & GitHub** | Controle de versão e hospedagem do projeto |

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ALuanyR/cypress-api-qa-commerce.git

2. **Acesse a pasta do projeto:**
   ```bash
   cd cypress-api-qa-commerce

3. **Instale as dependências:**
   ```bash
   npm install

4. **Execute os testes no modo interativo (com interface do Cypress):**
    ```bash
    npx cypress open

5. **Ou execute os testes diretamente pelo terminal (modo headless):**
   ```bash
   npx cypress run

📚 Contexto Educacional

Este projeto foi desenvolvido com fins educacionais, durante o curso de Qualidade de Software da Impacta Digital.
O foco é demonstrar o processo de evolução dos testes manuais para automação, aplicando boas práticas de escrita, organização e validação de APIs.

💬 Contato

Se quiser trocar ideias sobre automação de testes ou QA, entre em contato comigo:

💼 LinkedIn
 (https://www.linkedin.com/in/luany-rudic/)

📧 luany-r@hotmail.com

“Automatizar não é apenas economizar tempo — é garantir qualidade e confiança a cada entrega.” ⚙️💻


