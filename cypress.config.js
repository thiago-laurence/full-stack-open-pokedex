const { defineConfig } = require('cypress')

const PORT = process.env.PORT || 5000 // 8080 for local dev and 5000 for production

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `http://localhost:${PORT}`,
  },
})