//Next
import Link from "next/link";
//MUI
import { Grid, Box, Paper, Button } from "@mui/material";
//
import PokemonDisplay from "./pokedex/[generationDex]/[pokemonName]/components/PokemonDisplay";

export default function Home() {
	return (
		<main>
			<Box sx={{ m: "auto", width: "50%" }}>
				<Paper sx={{ mt: 5 }}>
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems="center">
						<Grid item sx={{ my: 2 }}>
							<Link href="/pokedex">
								<Button variant="contained">Pokedex</Button>
							</Link>
						</Grid>
						<Grid item sx={{ my: 2 }}>
							<Button variant="contained" disabled>
								Trainer Card
							</Button>
						</Grid>
						<Grid item sx={{ my: 2 }}>
							<Button variant="contained" disabled>
								Catch!
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Box>
		</main>
	);
}
