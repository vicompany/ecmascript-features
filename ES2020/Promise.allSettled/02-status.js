const chalk = require('chalk');
const fetch = require('node-fetch');

async function loadPageContent(url) {
	const response = await fetch(url);

	if (!response.ok) {
		return Promise.reject({
			url,
			error: new Error(`Unable to fetch "${url}": ${response.statusCode}`),
		});
	}

	return {
		url,
		content: await response.text(),
	};
}

module.exports = async () => {
	const results = await Promise.allSettled([
		loadPageContent('https://vicompany.nl'),
		loadPageContent('https://www.vicompany.nl/front-end-forever'),
		loadPageContent('https://www.vicompany.nl/jobs'),
	]);

	const print = {
		fulfilled(result) {
			console.log(`${chalk.green('✓')} ${result.value.url}`);
		},

		rejected(result) {
			console.log(`${chalk.red('✗')} ${result.reason.url}`);
		},
	};

	for (const result of results) {
		print[result.status](result);
	}
};
