const { environment } = require('@rails/webpacker')
// const merge = require('webpack-merge')
//
// const myCssLoaderOptions = {
//   modules: true,
//   sourceMap: true,
//   localIdentName: '[name]__[local]___[hash:base64:5]'
// }
//
// const CSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'css-loader')
//
// CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions)
//
// module.exports = environment

// console.log(environment.loaders)
const erb = environment.loaders.get('erb')
// const newErb = {
//   test: /\.erb$/,
//   enforce: 'pre',
//   loader: 'rails-erb-loader',
//   exclude: /node_modules/,
//   // test: /\.erb$/,
//   // enforce: 'pre',
//   // use: [ { loader: 'rails-erb-loader', options: [Object] } ]
// }
//
// console.log(environment.loaders)
// Re-insert back again but before babel loader

// console.log(environment.loaders)
environment.loaders.insert('erb', erb, { before: 'babel' })
// const bable = environment.loaders.get('babel')
// bable.query =  { presets: ['es2015']}
//
// environment.loaders.insert('erb', erb, { before: 'babel' })

console.log(environment.loaders.get('babel'))
console.log('--------------------')
console.log(environment)
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
