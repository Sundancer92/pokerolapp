//MUI
import { Box, Grid } from "@mui/material";
//Components
import { CardSelectorGrid } from "./components/CardSelectorGrid";
// FONT
import styles from "./[generationDex]/[pokemonName]/page.module.css";

export default function Podekex() {
	const regions = [
		{ name: "Kanto", regionId: "generation-i" },
		{ name: "Johto", regionId: "generation-ii" },
		{ name: "Hoenn", regionId: "generation-iii" },
		{ name: "Sinnoh", regionId: "generation-iv" },
		{ name: "Unova / Teselia", regionId: "generation-v" },
		{ name: "Kalos", regionId: "generation-vi" },
		{ name: "Alola", regionId: "generation-vii" },
		{ name: "Galar", regionId: "generation-viii" },
		{ name: "Paldea", regionId: "generation-ix" },
	];

	return (
		<Box
			sx={{ m: 2 }}
			className={styles.pokeGameFont}
			style={{ textAlign: "center" }}>
			<Grid sx={{ mb: 2 }}>
				<h1>REGION</h1>
			</Grid>
			<CardSelectorGrid customList={regions} />
		</Box>
	);
}
