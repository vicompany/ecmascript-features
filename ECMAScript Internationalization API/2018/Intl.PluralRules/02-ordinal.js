const chalk = require('chalk');

const countList = [0, 1, 2, 3, 4, 5];

const ordinalSuffixes = {
	en: {
		one: 'st',
		two: 'nd',
		few: 'rd',
		other: 'th',
	},
	nl: {
		one: 'ste',
		other: 'de',
	},
};

module.exports = () => {
	const pluralRulesList = [
		new Intl.PluralRules('nl', { type: 'ordinal' }),
		new Intl.PluralRules('en', { type: 'ordinal' }),
	];

	for (const pluralRules of pluralRulesList) {
		const { locale } = pluralRules.resolvedOptions();

		console.log(`\nLocale: ${chalk.yellow(locale)}`);
		console.log('Count | Rule  | Result');
		console.log('------|-------|-------');

		for (const count of countList) {
			const pluralRule = pluralRules.select(count);

			console.log(
				count.toString().padStart(5, ' '),
				'|',
				chalk.green(pluralRule.padEnd(5)),
				'|',
				count.toString() + ordinalSuffixes[locale][pluralRule],
			);
		}
	}
};
