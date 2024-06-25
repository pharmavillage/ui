const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const { getRemoteURL } = require('lib');
const { VueLoaderPlugin } = require('vue-loader');
const pkg = require('./package.json');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 62621,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.vue', '.jsx', '.js', '.json'],
    alias: {
      vue: '@vue/runtime-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  //http://localhost:3002/remoteEntry.js
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      remotes: {
        react_counter: `react_counter@${getRemoteEntryUrl(
          [58841],
          `/remoteEntry.js`,
          pkg
        )}`,
        store: `store@${getRemoteURL([55955], `/remoteEntry.js, ${pkg}`)}`,
        vue_counter: `vue_counter@${getRemoteEntryUrl(
          [51997],
          `/remoteEntry.js`,
          pkg
        )}`,
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        vue: { singleton: true, requiredVersion: pkg.dependencies.vue },
        effector: { singleton: true },
        'effector-react': { singleton: true },
        'effector-vue': { singleton: true },
        'styled-components': { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
  ],
};

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}
