const chalk = require('chalk');

const countList = [-1, 0, 1, 2, 10, 21];

const labels = {
	cy: {
		zero: 'cathod',
		one: 'gath',
		two: 'gath',
		few: 'cath',
		many: 'chath',
		other: 'cath',
	},
	nl: {
		one: 'kat',
		other: 'katten',
	},
};

module.exports = () => {
	const pluralRulesList = [
		new Intl.PluralRules('nl', { type: 'cardinal' }),
		new Intl.PluralRules('cy', { type: 'cardinal' }),
	];

	for (const pluralRules of pluralRulesList) {
		const { locale } = pluralRules.resolvedOptions();

		console.log(`\nLocale: ${chalk.yellow(locale)}`);
		console.log('Count | Rule  | Label');
		console.log('------|-------|-------');

		for (const count of countList) {
			const pluralRule = pluralRules.select(count);

			console.log(
				count.toString().padStart(5, ' '),
				'|',
				chalk.green(pluralRule.padEnd(5)),
				'|',
				labels[locale][pluralRule],
			);
		}
	}
};
