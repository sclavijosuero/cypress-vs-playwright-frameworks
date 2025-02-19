const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: { grepFilterSpecs: true, grepOmitFiltered: true },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('@bahmutov/cy-grep/src/plugin')(config);
      // IMPORTANT: return the config object
      return config;
    },
  },
});
