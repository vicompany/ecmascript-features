const chalk = require('chalk');
const globby = require('globby');
const slash = require('slash');

const args = process.argv.slice(2);

const PATTERN_FILTER = args.length > 0 ? slash(args[0].toLocaleLowerCase()) : null;

function withIndex(iterable) {
	return Object.entries(iterable).map(([index, value]) => [
		Number.parseInt(index, 10),
		value,
	]);
}

(async () => {
	const files = await globby([
		'ES+([0-9])/*/*.js',
		'ECMAScript Internationalization API/+([0-9])/*/*.js',
	]);

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

		if (typeof fn === 'function') {
			// eslint-disable-next-line no-await-in-loop
			await fn();
		} else {
			console.error(`File "${file}" does not export a function`);
		}

		process.stdout.write('\n');
	}
})();
