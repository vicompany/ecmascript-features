module.exports = () => {
	console.log('Nap time!');

	return Promise.reject(new Error('Can\'t sleep'))
		.then(() => console.log('Waking up'))
		.catch(error => console.error('ERROR', error.message))
		.finally(() => console.log('Ready for the next big thing'));
};
