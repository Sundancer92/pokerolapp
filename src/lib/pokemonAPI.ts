const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonByRegion(region: string) {
	const response = await fetch(POKEMON_API + "generation/" + region);
	const data = await response.json();
	return data;
}

export async function getPokemon(name: string) {
	const response = await fetch(POKEMON_API + "pokemon/" + name);
	const data = await response.json();
	return data;
}

export async function getPokemonDescription(pokeId: number) {
	const response = await fetch(POKEMON_API + "pokemon-species/" + pokeId);
	const data = await response.json();
	const spanish = data.flavor_text_entries.filter(
		(language: any) => language.language.name === "en",
	);
	return spanish;
}
