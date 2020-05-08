const fetch = require('node-fetch');

async function getPokemon(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();

	return data;
}

async function* getPokemonIterator(start, count) {
	for (let i = start + 1; i <= start + count; i++) {
		// eslint-disable-next-line no-await-in-loop
		const { name, id } = await getPokemon(i);

		yield { name, id };
	}
}

module.exports = async () => {
	for await (const { id, name } of getPokemonIterator(0, 9)) {
		console.log(`${id.toString().padStart(4, '0')} - ${name}`);
	}
};
