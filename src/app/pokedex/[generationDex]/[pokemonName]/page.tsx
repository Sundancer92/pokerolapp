import { getPokemon } from "@/lib/pokemonAPI";

//Custom Component
import PokemonDisplay from "./components/PokemonDisplay";
// Font
import styles from "../[pokemonName]/page.module.css";

export default async function Pokemon({
	params,
}: {
	params: { pokemonName: string };
}) {
	const pokemonName = params.pokemonName;

	const pokemonDetails = await getPokemon(pokemonName);
	// console.log(pokemonDetails);

	return (
		<div className={styles.pokeGameFont}>
			<div>
				<PokemonDisplay pokeData={pokemonDetails} />
			</div>
		</div>
	);
}
