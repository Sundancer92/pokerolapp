import Image from "next/image";

interface pokemonId {
	pokeId: string;
}

export default function PokemonSprite({ pokeId }: pokemonId) {
	return (
		<Image
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokeId}.png`}
			width={68}
			height={56}
			alt="pokemonSprite"
		/>
	);
}
