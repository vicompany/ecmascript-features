module.exports = async () => {
	console.log('Start chain 1\n');

	await Promise.resolve()
		.finally(() => console.log('Finally 1'))
		.then(() => console.log('Then 1'))
		.finally(() => console.log('Finally 2'))
		.then(() => console.log('Then 2'));


	console.log('\nStart chain 2\n');

	await Promise.reject(new Error('foo'))
		.finally(() => console.log('Finally 1'))
		.catch(() => console.log('Catch 1'))
		.then(() => console.log('Then 1'))
		.finally(() => console.log('Finally 2'))
		.catch(() => console.log('Catch 2'))
		.then(() => console.log('Then 2'));
};
