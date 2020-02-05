const query = 'besta';

const data = [
	'bestå',
	'flärdfull',
	'grönkulla',
	'norröra',
	'ödmjuk',
	'smörboll',
];

const locales = ['de', 'en', 'nl', 'se'];
const settings = {
	usage: 'search',
	sensitivity: 'base',
};

for (const locale of locales) {
	const collator = new Intl.Collator(locale, settings);

	console.log(`${locale} >`, data, '=>', data.filter(v => collator.compare(v, query) === 0));
}
