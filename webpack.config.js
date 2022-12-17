const path = require('path')
const webpack = require('webpack')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = {
  mode: 'production',
  entry: './src/browser.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.browser.js',
    library: {
      name: 'tailwindcss',
      type: 'window',
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          // loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env'],
          //   // plugins: ['@babel/plugin-transform-runtime'],
          //   // sourceType: 'unambiguous',
          // },
          loader: 'esbuild-loader',
          options: {
            // loader: 'jsx', // Remove this if you're not using JSX
            target: 'es2020', // Syntax to compile to (see options below for possible values)
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs'],
    fallback: {
      fs: require.resolve('memfs'),
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      console: require.resolve('console-browserify'),
      constants: require.resolve('constants-browserify'),
      crypto: require.resolve('crypto-browserify'),
      domain: require.resolve('domain-browser'),
      events: require.resolve('events'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      punycode: require.resolve('punycode'),
      process: require.resolve('process/browser'),
      querystring: require.resolve('querystring-es3'),
      stream: require.resolve('stream-browserify'),
      // eslint-disable-next-line camelcase
      string_decoder: require.resolve('string_decoder'),
      sys: require.resolve('util'),
      timers: require.resolve('timers-browserify'),
      tty: require.resolve('tty-browserify'),
      url: require.resolve('url'),
      util: require.resolve('util'),
      vm: require.resolve('vm-browserify'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: path.resolve(path.join(__dirname, './process-browser.js')),
    }),
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2020', // Syntax to compile to (see options below for possible values)
      }),
    ],
  },
}
