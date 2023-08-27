const { defineConfig } = require('cypress')

module.exports = defineConfig ({
    e2e: {
            baseUrl : 'https://kasirdemo.belajarqa.com/',
            integrationFolder: 'cypress/integration',
            spec: ['Support/Scenario/Scenario_01_Login.spec.js', 'Support/Scenario/Scenario_02_KategoriFeature.spec.js'],
            supportFile: false,
    },
})