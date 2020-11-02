module.exports = () => {
	// Offocial extension list: https://www.unicode.org/reports/tr35/#u_Extension
	// Probably supported ones: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#Instance_properties
	const locale = new Intl.Locale('ar', {
		numberingSystem: 'latn',
	});

	const price = 1337.42;
	const formatOptions = {
		currency: 'EUR',
		style: 'currency',
	};

	const numberFormatterArab = new Intl.NumberFormat('ar', formatOptions);
	const numberFormatterArabLatinCode = new Intl.NumberFormat('ar-u-nu-latn', formatOptions);
	const numberFormatterArabLatinApi = new Intl.NumberFormat(locale.toString(), formatOptions);

	console.log('ar                                             ', numberFormatterArab.format(price));
	console.log('ar-u-nu-latn                                   ', numberFormatterArabLatinCode.format(price));
	console.log('Intl.Locale("ar", { numberingSystem: "latn" }) ', numberFormatterArabLatinApi.format(price));
};
