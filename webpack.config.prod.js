import webpack from"webpack";
import ExtractTextPlugin from"extract-text-webpack-plugin";
import WebpackMd5Hash from"webpack-md5-hash";
import HtmlWebpackPlugin from"html-webpack-plugin";
import autoprefixer from"autoprefixer";
import path from"path";
import * as hosts from"./src/constants/Hosts";
import * as integrations from"./src/constants/Integrations";

export default {
  resolve: {
   extensions: ["*",".js",".jsx", ".json", ".scss"]
  },
  devtool:"source-map", // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: ["babel-polyfill", "whatwg-fetch", path.resolve(__dirname,"src/apps/development")],
  target:"web", // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname,"dist"),
    publicPath:"/",
    filename:"[name].[hash].js"},
  plugins: [
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(
      {
        "process.env.HOST": JSON.stringify(hosts.PRODUCTION),
        "process.env.INTEGRATIONS.DIGITALOCEAN.CLIENTID": JSON.stringify(integrations.DIGITALOCEAN_CLIENTID_PRODUCTION),
        "process.env.INTEGRATIONS.DIGITALOCEAN.REDIRECTURI": JSON.stringify(integrations.DIGITALOCEAN_REDIRECTURI_PRODUCTION),
        "process.env.INTEGRATIONS.GITHUB.CLIENTID": JSON.stringify(integrations.GITHUB_CLIENTID_PRODUCTION),
        "process.env.NODE_ENV": JSON.stringify("production"),
        __DEV__: false
      }),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin("[name].css?[hash:5]"),

    // Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      favicon:"src/favicon.ico",
      template:"src/index.ejs",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
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
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: "url-loader?name=[name].[ext]?[hash:5]"},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]?[hash:5]"},
      {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]?[hash:5]"},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]?[hash:5]"},
      {test: /\.(jpe?g|png|gif)$/i, loader: "file-loader?name=[name].[ext]?[hash:5]"},
      {test: /\.ico$/, loader: "file-loader?name=[name].[ext]?[hash:5]"},
      {test: /(\.css|\.scss|\.sass)$/, loader: ExtractTextPlugin.extract("css-loader?sourceMap!postcss-loader!sass-loader?sourceMap")}
    ]
  }
};
