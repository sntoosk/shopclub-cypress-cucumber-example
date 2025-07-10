const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  video: true,
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 180000,
  e2e: {
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    baseUrl: 'https://www.shopclub.com.br/',
  },
})