const chalk = require('chalk');
const glob = require('glob');

const args = process.argv.slice(2);

const PATTERN_FILTER = args.length > 0 ? args[0].toLocaleLowerCase() : null;

function withIndex(iterable) {
	return Object.entries(iterable).map(([index, value]) => [
		Number.parseInt(index, 10),
		value,
	]);
}

glob('ES+([0-9])/**/*.js', async (error, files) => {
	if (error) {
		throw error;
	}

	const filesFiltered = PATTERN_FILTER
		? files.filter(f => f.toLocaleLowerCase().includes(PATTERN_FILTER))
		: files;

	process.stdout.write('\n');

	for (const [index, file] of withIndex(filesFiltered)) {
		if (PATTERN_FILTER && !file.toLocaleLowerCase().includes(PATTERN_FILTER)) {
			return;
		}

		process.stdout.write(chalk.blue.bold(`${file} (${1 + index}/${filesFiltered.length})\n`));

		// eslint-disable-next-line global-require
		const fn = require(`./${file}`);

		// eslint-disable-next-line no-await-in-loop
		await fn();

		process.stdout.write('\n');
	}
});
