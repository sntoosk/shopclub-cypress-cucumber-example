import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que o usuário acessa a home do site da SC-BR", () => {
  cy.visit("https://www.shopclub.com.br/");
});

When("ele clica no icone da conta", () => {
  cy.get(".electrolux-shopclub-login-1-x-triggerLogin > .vtex-button > .vtex-button__label").click();
});

When("ele digita {string} no campo de e-mail", (email) => {
  cy.get('#shopclub-login-email').type(email);
});

When("ele clica no botao de acessar", () => {
  cy.get('.electrolux-shopclub-login-1-x-loginLayoutButton').click();
});
