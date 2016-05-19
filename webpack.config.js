module.exports = {
  entry: './client/index.tsx',
  output: {
    path: 'build/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules!sass'
      }
    ]
  },
  devtool: "#source-map"
};