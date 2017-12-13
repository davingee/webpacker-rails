const { environment } = require('@rails/webpacker')

environment.config.merge({
  module: {
    rules: [
      environment.loaders.get('erb')
    ]
  }
})

environment.loaders.delete('erb')

module.exports = environment
