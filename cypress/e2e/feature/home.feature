Feature: Acessar Home SC-BR

  Scenario: O usuário insere um e-mail válido para login
    Given que o usuário acessa a home do site da SC-BR
    When ele clica no icone da conta
    And ele digita "Juliano.santos88@icloud.com" no campo de e-mail
    And ele clica no botao de acessar
