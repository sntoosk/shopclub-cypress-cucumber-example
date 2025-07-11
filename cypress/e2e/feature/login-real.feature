Feature: Login Real SC-BR

Scenario: Login completo usando comando reutilizável
  When ele faz login com "Juliano.santos88@icloud.com"
  Then ele deve ver seu nome de usuário no topo da página
  When ele clica no botão da conta logada
  And ele clica na opção de entrar com e-mail e senha
  And ele digita "Juliano.santos88@icloud.com" no campo de login VTEX
  And ele digita "Jul!@ninho0" no campo de password
  And ele clica no botao de entrar com credenciais

