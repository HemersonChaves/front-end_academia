import { defineConfig } from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      console.log(config) // see everything in here!
      
      // modify config values
      config.defaultCommandTimeout = 10000
      config.baseUrl = 'http://http://localhost:5173/'
      
      // modify env var value
      config.env.ENVIRONMENT = 'staging'
      
      // IMPORTANT return the updated config object
      return config
    }
  }
})