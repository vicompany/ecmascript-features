const data = ['ä', 'z'];

const collatorGerman = new Intl.Collator('de');
const collatorSwedish = new Intl.Collator('sv');

module.exports = () => {
	// Sorting of letter viarants varies per culture
	console.log('German', data.sort(collatorGerman.compare));
	console.log('Swedish', data.sort(collatorSwedish.compare));
};
