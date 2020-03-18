const { nightmare } = require('./lib/sleep');

module.exports = () => {
	console.log('Nap time!');

	return nightmare(1)
		.then(() => console.log('Waking up'))
		.catch(error => console.error('ERROR', error.message))
		.finally(() => console.log('Ready for the next big thing'));
};
