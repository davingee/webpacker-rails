const { environment } = require('@rails/webpacker')
const erb = environment.loaders.get('erb')

const newErb = {
  test: /\.erb$/,
  enforce: 'pre',
  loader: 'rails-erb-loader',
  exclude: /node_modules/,
  // test: /\.erb$/,
  // enforce: 'pre',
  // use: [ { loader: 'rails-erb-loader', options: [Object] } ]
}

// // console.log(environment.loaders)
// // Re-insert back again but before babel loader
//
// console.log(erb)
environment.loaders.insert('erb', newErb, { before: 'babel' })

console.log(environment.loaders)
// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.erb$/,
//           enforce: 'pre',
//           loader: 'rails-erb-loader'
//         },
//       ]
//     }
//   }
// };

//
// console.log(environment)
// environment.config.merge({
//   module: {
//     rules: [
//       {
//         test: /\.erb$/,
//         enforce: 'pre',
//         loader: 'rails-erb-loader'
//       },
//     ]
//   }
// })

// { test: /\.erb$/,
//   enforce: 'pre',
//   exclude: /node_modules/,
//   use: [ { loader: 'rails-erb-loader', options: [Object] } ] }


// environment.loaders.delete('erb')

module.exports = environment
