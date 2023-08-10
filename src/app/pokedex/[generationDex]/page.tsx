import { getPokemonByRegion } from "@/lib/pokemonAPI";
// Custom Components
import { PokemonDexGrid } from "./components/PokemonDexGrid";
// MUI
import { CircularProgress } from "@mui/material";
// FONT
import styles from "./[pokemonName]/page.module.css";

export default async function RegionName({
	params,
}: {
	params: { generationDex: string };
}) {
	const generation = params.generationDex;

	const generationDex = await getPokemonByRegion(generation);

	return (
		<div>
			<div className={styles.pokeGameFont}>
				<h1>Region de {generationDex.main_region.name}</h1>
				<PokemonDexGrid
					customList={generationDex}
					generation={generationDex.main_region.name}
				/>
			</div>
		</div>
	);
}
