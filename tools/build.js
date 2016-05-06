// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.

import webpack from 'webpack';
import config from '../webpack.config.prod';
import colors from 'colors'; // eslint-disable-line no-unused-vars

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

console.log('Generating minified production bundle. This will take a moment...'.blue); // eslint-disable-line no-console

webpack(config).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(err.bold.red); // eslint-disable-line no-console
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red)); // eslint-disable-line no-console
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow); // eslint-disable-line no-console
    jsonStats.warnings.map(warning => console.log(warning.yellow)); // eslint-disable-line no-console
  }

  console.log(`Webpack stats: ${stats}`); // eslint-disable-line no-console

  // if we got this far, the build succeeded.
  console.log('Your app is compiled in production mode in /dist. It\'s ready to roll!'.green); // eslint-disable-line no-console

  return 0;
});