const chalk = require('chalk');

const relativeValues = [-3, -1, 0, 1, 3, 10];
const relativeUnits = ['second', 'month'];

module.exports = () => {
	const locales = ['en', 'fy'];
	const formatOptionList = [
		{
			numeric: 'always',
			style: 'long',
		},
		{
			numeric: 'always',
			style: 'narrow',
		},
		{
			numeric: 'auto',
			style: 'long',
		},
	];

	for (const locale of locales) {
		for (const options of formatOptionList) {
			const formatter = new Intl.RelativeTimeFormat(locale, options);

			console.log(chalk.yellow(`new Intl.RelativeTimeFormat("${locale}", ${JSON.stringify(options, null, '  ')})\n`));

			for (const unit of relativeUnits) {
				for (const value of relativeValues) {
					console.log(`format(${value.toString().padStart(2, ' ')}, "${unit}")`.padEnd(20, ' '), '=', formatter.format(value, unit));
				}

				console.log();
			}
		}
	}
};
