var config = require('./webpack.config.js')

config.entry = {
  'next-design': './src/index.js'
}

config.output = {
  filename: './dist/[name].js',
  library: 'NextDesign',
  libraryTarget: 'umd'
}

module.exports = config
