import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When("ele faz login com {string}", (email) => {
  cy.loginFake(email);
});

Then("ele deve ver seu nome de usuário no topo da página", () => {
  cy.get('.electrolux-shopclub-login-1-x-triggerLogout').should('be.visible');
});

When("ele clica no botão da conta logada", () => {
  cy.get('.electrolux-shopclub-login-1-x-triggerLogout > .vtex-button > .vtex-button__label').click();
  cy.get('.electrolux-shopclub-login-1-x-containerMenuOpened > :nth-child(1)').click();
});

When("ele clica na opção de entrar com e-mail e senha", () => {
  cy.get(':nth-child(2) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label > span').click();
});

When("ele digita {string} no campo de login VTEX", (email) => {
  cy.get('.vtex-login-2-x-inputContainerEmail input').type(email);
});

When("ele digita {string} no campo de password", (password) => {
  cy.get('.relative input[type="password"]').type(password);
});

When("ele clica no botao de entrar com credenciais", () => {
  cy.get('.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label').click();
});
