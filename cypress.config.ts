import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://copilot.microsoft.com/?showconv=1",
    includeShadowDom: true,
    defaultCommandTimeout: 50000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: false,
    },
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
