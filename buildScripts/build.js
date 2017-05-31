/*eslint-disable no-console*/

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating production bundle...'))

webpack(webpackConfig).run((error, stats) => {
	if (error) {
		console.log(chalk.red(error));
		return 1;
	}
	console.log(`Webpack stats: ${stats}`);
	console.log(chalk.green('done!'));
	return 0;
});