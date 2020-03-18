const { sleep } = require('./lib/sleep');

module.exports = () => {
	console.log('Nap time!');

	return sleep(1)
		.then(() => console.log('Waking up'))
		.catch(error => console.error(error))
		.finally(() => console.log('Ready for the next big thing'));
};
