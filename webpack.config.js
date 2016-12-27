module.exports = {
  cache: true,
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "./build/WebToolBarLib.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ["es2015"]
        }
      }
    ]
  },
  plugin: [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })]
};