const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
    core: './src/core/index.ts',
    materials: './src/materials/index.ts'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./src/core/package.json", to: "./core/package.json" },
        { from: "./src/materials/package.json", to: "./materials/package.json" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/inline'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: (file) => file.chunk.name === 'index' ? 'index.js' : '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'RubiksCube',
    libraryTarget: 'umd',
  },
  externals: ['three'],
};
