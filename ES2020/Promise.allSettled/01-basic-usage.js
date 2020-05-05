module.exports = async () => {
	const results = await Promise.allSettled([
		Promise.resolve(1),
		Promise.reject(new Error('Some error message 1')),
		Promise.resolve(2),
		Promise.reject(new Error('Some error message 2')),
	]);

	for (const [index, result] of Object.entries(results)) {
		console.log(`Promise #${1 + Number.parseInt(index)} was ${result.status}`);

		if (result.status === 'fulfilled') {
			console.log(`Value: ${result.value}\n`);
		} else if (result.status === 'rejected') {
			console.log(`Error message: ${result.reason.message}\n`);
		}
	}
};
