const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: Infinity,
          },
        }, ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: (file) => file.chunk.name === 'index' ? 'index.js' : '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '@curtishughes/rubiks-cube',
    libraryTarget: 'umd',
  },
  externals: ['three'],
};
