import { getPokemonByRegion } from "@/lib/pokemonAPI";
// Custom Components
import { PokemonDexGrid } from "./components/PokemonDexGrid";
// MUI
import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// FONT
import styles from "./[pokemonName]/page.module.css";
// Helper
import { formatString } from "@/helpers/formatString";
// Next
import Link from "next/link";

export default async function RegionName({
	params,
}: {
	params: { generationDex: string };
}) {
	const generation = params.generationDex;

	const generationDex = await getPokemonByRegion(generation);

	return (
		<Box>
			<div className={styles.pokeGameFont}>
				<Grid
					container
					direction="row"
					justifyContent="space-around"
					alignItems="center"
					sx={{ my: 1 }}>
					<Grid item xs={4} sx={{ ml: 1 }}>
						<Link href={"/pokedex"}>
							<Button variant="contained" color="error">
								<ArrowBackIcon />
							</Button>
						</Link>
					</Grid>
					<Grid item>
						<Typography
							style={{ fontSize: "25px" }}
							className={styles.pokeGameFont}>
							{formatString(generationDex.main_region.name)}
						</Typography>
					</Grid>
				</Grid>
				<PokemonDexGrid
					customList={generationDex}
					generation={generationDex.main_region.name}
				/>
			</div>
		</Box>
	);
}
