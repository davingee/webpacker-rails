const { environment } = require('@rails/webpacker')
const erb = environment.loaders.get('erb')

// Re-insert back again but before babel loader
environment.loaders.insert('erb', erb, { before: 'babel' })

console.log(environment)
environment.config.merge({
  module: {
    rules: [
      environment.loaders.get('erb')
    ]
  }
})

environment.loaders.delete('erb')

module.exports = environment


