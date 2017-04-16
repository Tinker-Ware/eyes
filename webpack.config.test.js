import webpack from"webpack";
import HtmlWebpackPlugin from"html-webpack-plugin";
import autoprefixer from"autoprefixer";
import path from"path";
import * as hosts from"./src/constants/Hosts";
import * as integrations from"./src/constants/Integrations";

export default {
  resolve: {
   extensions: ["",".js",".jsx", ".json", ".scss"]
  },
  debug: true,
  devtool:"eval-source-map", // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry:[
    "./src/webpack-public-path",
    "babel-polyfill",
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    "whatwg-fetch",
    path.resolve(__dirname,"./src/index") // Defining path seems necessary for this to work consistently on Windows machines.
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
      new webpack.DefinePlugin(
        {
          "process.env.HOST": JSON.stringify(hosts.DEVELOPMENT),
          "process.env.INTEGRATIONS.DIGITALOCEAN.CLIENTID": JSON.stringify(integrations.DIGITALOCEAN_CLIENTID_DEVELOPMENT),
          "process.env.INTEGRATIONS.DIGITALOCEAN.REDIRECTURI": JSON.stringify(integrations.DIGITALOCEAN_REDIRECTURI_DEVELOPMENT),
          "process.env.INTEGRATIONS.GITHUB.CLIENTID": JSON.stringify(integrations.GITHUB_CLIENTID_DEVELOPMENT),
          "process.env.NODE_ENV": JSON.stringify("development"),
          __DEV__: true
        }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      // Create HTML file that includes references to bundled CSS and JS.
      new HtmlWebpackPlugin(
        {
          favicon:"src/favicon.ico",
          template:"src/index.ejs",
          minify: {
            removeComments: true,
            collapseWhitespace: true
          },
          inject: true
        }),
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
        noInfo: true, // set to false to see a list of every file being bundled.
        options: {
          sassLoader: {
            includePaths: [path.resolve(__dirname, "src", "scss")]
          },
          context: "/",
          postcss: () => [autoprefixer],
        }
      })
    ],
    module: {
      rules: [
        {test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"]},
        {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: "file-loader"},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
        {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"},
        {test: /\.(jpe?g|png|gif)$/i, loader: "file-loader?name=[name].[ext]"},
        {test: /\.ico$/, loader: "file-loader?name=[name].[ext]"},
        {test: /(\.css|\.scss|\.sass)$/, loaders: ["style-loader", "css-loader?sourceMap", "postcss-loader", "sass-loader?sourceMap"]}
      ]
    }
  };
