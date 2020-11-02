module.exports = () => {
	const locale = 'nl';
	const values = [
		1337.42,
		-666.666,
		0,
		-0,
	];

	for (const value of values) {
		// 1. Unit style
		console.log('\n{ style: "unit" }                 ', value.toLocaleString(locale, {
			style: 'unit',
			unit: 'meter-per-second',
			unitDisplay: 'short',
		}));

		// 2. Scientific notation
		console.log('{ notation: "scientific" }        ', value.toLocaleString(locale, {
			notation: 'scientific',
		}));

		// 3. Engineering notation
		console.log('{ notation: "engineering" }       ', value.toLocaleString(locale, {
			notation: 'engineering',
		}));

		// 3. Compact notation
		console.log('{ notation: "compact" }           ', value.toLocaleString(locale, {
			compactDisplay: 'short',
			notation: 'compact',
		}));

		// 4. Sign display
		console.log('{ signDisplay: "always" }         ', value.toLocaleString(locale, {
			signDisplay: 'always',
		}));

		console.log('{ signDisplay: "exceptZero" }     ', value.toLocaleString(locale, {
			signDisplay: 'exceptZero',
		}));

		// 5. Accounting currency sign
		console.log('{ currencySign: "accounting" }    ', value.toLocaleString(locale, {
			currency: 'USD',
			currencySign: 'accounting',
			currencyDisplay: 'narrowSymbol',
			style: 'currency',
		}));

		// 5. Compact currency symbol
		console.log('{ currencyDisplay: "narrowSymbol" }', value.toLocaleString(locale, {
			currency: 'USD',
			currencyDisplay: 'narrowSymbol',
			style: 'currency',
		}), `(default currencyDisplay yields ${value.toLocaleString(locale, {
			currency: 'USD',
			style: 'currency',
		})})`);
	}
};
