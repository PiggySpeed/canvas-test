const path = require('path');
const webpack = require('webpack');

const LAUNCH_COMMAND = process.env.NODE_ENV;

const environmentPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(LAUNCH_COMMAND)
});

const devConfig = {
  devtool: 'source-map',
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    environmentPlugin,
    new webpack.NamedModulesPlugin(), // make it easier to see which dependencies are being patched
    new webpack.HotModuleReplacementPlugin()
  ]
};

const base = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.less$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  },
  resolve: {
    alias: {
      Components: path.join(__dirname, 'src/components/'),
      Pages: path.join(__dirname, 'src/pages/')
    },
    modules: [path.resolve(__dirname, '/'), 'node_modules'],
    extensions: ['.js', '.less']
  }
};

module.exports = Object.assign({}, base, devConfig);
