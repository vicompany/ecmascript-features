const people = [
	{
		name: 'John Doe',
		birth: {
			date: '1968-07-14T12:13:00Z',
			location: 'Rotterdam',
		},
		death: {
			date: '2020-02-17T06:58:00Z',
			location: 'Rotterdam',
		},
	},
	{
		name: 'Jane Doe',
		birth: {
			date: '1972-03-02T03:53:00Z',
			location: 'Rotterdam',
		},
		death: null,
	},
];

module.exports = () => {
	for (const person of people) {
		console.log(`Person ${person.name} died in ${person?.death?.location}`);
	}
};
