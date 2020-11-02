const { format } = require("path");

module.exports = () => {
	const now = new Date();
	const formatter = new Intl.DateTimeFormat('nl-NL', {
		dateStyle: 'short',
		timeStyle: 'long',
	});

	console.log(formatter.format(now), '=', formatter.formatToParts(now));
};
