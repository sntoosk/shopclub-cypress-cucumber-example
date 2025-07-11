Feature: Login Fake SC-BR

  Scenario: O usuário acessa o Login Fake da SC-BR
    Given que o usuário acessa a home do site da SC-BR
    When ele clica no icone da conta
    And ele digita "Juliano.santos88@icloud.com" no campo de e-mail
    And ele clica no botao de acessar
