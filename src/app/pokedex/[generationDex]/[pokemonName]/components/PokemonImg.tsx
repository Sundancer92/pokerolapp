import Image from "next/image";

interface pokemonId {
	pokeImgUrl: string;
}

export default function PokemonImg({ pokeImgUrl }: pokemonId) {
	return (
		<Image src={pokeImgUrl} width={125} height={125} alt="pokemonSprite" />
	);
}
