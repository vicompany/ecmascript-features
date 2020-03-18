module.exports = {
	nightmare(seconds) {
		return new Promise((resolve, reject) => {
			setTimeout(() => reject(new Error('Nasty dream')), 1000 * seconds);
		});
	},

	sleep(seconds) {
		return new Promise((resolve) => {
			setTimeout(() => resolve(), 1000 * seconds);
		});
	},
};
