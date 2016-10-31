import webpack from"webpack";
import HtmlWebpackPlugin from"html-webpack-plugin";
import autoprefixer from"autoprefixer";
import path from"path";
import * as hosts from"./src/constants/Hosts";

export default {
  resolve: {
   extensions: ["",".js",".jsx", ".json", ".scss"]
  },
  debug: true,
  devtool:"eval-source-map", // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: ["babel-polyfill","whatwg-fetch","./src/webpack-public-path","webpack-hot-middleware/client?reload=true",
    path.resolve(__dirname,"./src/apps/development.js") // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  target:"web", // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname,"dist"), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath:"/",
    filename:"bundle.js"},
  plugins: [
    // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify("development"),
    "process.env.HOST": JSON.stringify(hosts.DEVELOPMENT),
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template:"src/index.ejs",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader:"babel"},
      {test: /\.jsx$/, exclude: /node_modules/, loader:"babel"},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader:"file"},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader:"url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader:"url?limit=10000&mimetype=image/svg+xml"},
      {test: /\.(jpe?g|png|gif)$/i, loader:"file?name=[name].[ext]"},
      {test: /\.json$/, loader: "json"},
      {test: /\.ico$/, loader:"file?name=[name].[ext]"},
      {test: /(\.css|\.scss)$/, loaders: ["style","css?sourceMap","postcss","sass?sourceMap"]}
    ]
  },
  postcss: ()=> [autoprefixer]
};
