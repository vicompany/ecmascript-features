// Using SymbolhasInstance to mimick enums
const InstrumentTrendEnum = {
	positive: Symbol('positive'),
	negative: Symbol('negative'),

	[Symbol.hasInstance](instance) {
		return Object.values(InstrumentTrendEnum).includes(instance);
	},
};

module.exports = () => {
	const trend = InstrumentTrendEnum.positive;

	console.log('trend instanceof InstrumentTrendEnum             ', trend instanceof InstrumentTrendEnum);
	console.log('Symbol(\'positive\') instanceof InstrumentTrendEnum', Symbol('positive') instanceof InstrumentTrendEnum);
};
