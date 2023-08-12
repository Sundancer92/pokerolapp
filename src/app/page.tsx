//Next
import Link from "next/link";
import Image from "next/image";
//MUI
import { Grid, Box, Paper, Button } from "@mui/material";
// Custom Component
import CustomImg from "./components/CustomImg";

export default function Home() {
	return (
		<main>
			<Box sx={{ m: "auto", sm: { width: "50%" } }}>
				<Paper sx={{ mt: 5 }}>
					<Grid
						container
						direction="column"
						justifyContent="space-around"
						alignItems="center">
						<Grid item sx={{ my: 2 }}>
							<Link href="/pokedex">
								<Button variant="contained">
									Pokedex
									<CustomImg
										fileName="pokedexIcon.png"
										fileAlt="pokedex"
										fileHeight={30}
										fileWidth={30}
									/>
								</Button>
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
