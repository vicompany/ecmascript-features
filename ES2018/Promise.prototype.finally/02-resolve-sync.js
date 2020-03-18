module.exports = () => {
	console.log('Nap time!');

	return Promise.resolve()
		.then(() => console.log('Waking up'))
		.catch(error => console.error(error))
		.finally(() => console.log('Ready for the next big thing'));
};
