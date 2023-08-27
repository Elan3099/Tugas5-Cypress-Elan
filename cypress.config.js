const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://kasirdemo.belajarqa.com/',
    specPattern: ['Support/Scenario/Scenario_01_Login.spec.js','Support/Scenario/Scenario_02_KategoriFeature.spec.js','Support/Scenario/Scenario_03_ProductFeature.spec.js'],
    supportFile : false,
  },
});
