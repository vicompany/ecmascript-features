const chalk = require('chalk');
const glob = require('glob');

glob('ES+([0-9])/**/*.js', (error, files) => {
	if (error) {
		throw error;
	}

	process.stdout.write('\n');

	files.forEach((file, index) => {
		process.stdout.write(chalk.blue.bold(`${file} (${1 + index}/${files.length})\n`));

		// eslint-disable-next-line global-require
		require(`./${file}`);

		process.stdout.write('\n');
	});
});

