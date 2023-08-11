//MUI
import { Box, Grid, Typography, Paper, Divider, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//Custom Comp
import PokemonImg from "./PokemonImg";
//Constant
import { typeColors } from "@/app/constants/typeColors";
// Custom Helpers
import { formatString } from "@/helpers/formatString";
import { getPokemonDescription, getPokemonSpecies } from "@/lib/pokemonAPI";
import { PokemonDescription } from "./PokemonDescription";
// Font
import styles from "../page.module.css";
//Next
import Link from "next/link";

interface PokemonData {
	pokeData: any;
}

// export default function PokemonDisplay({ pokeData }: PokemonData) {
export default async function PokemonDisplay(params: PokemonData) {
	const pokemon = params.pokeData;

	// const pokeDescription = await getPokemonDescription(pokemon.id);

	const pokeDescriptionData = getPokemonDescription(pokemon.id);
	const speciesData = getPokemonSpecies(pokemon.id);

	const [pokemonSpecie, pokeDescription] = await Promise.all([
		speciesData,
		pokeDescriptionData,
	]);

	return (
		<Box
			sx={{ bgcolor: "white", height: "auto", pb: 1 }}
			className={styles.pokeGameFont}>
			<Grid container>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					xs={12}
					sx={{
						bgcolor: "red",
						borderBottom: 1,
						borderColor: "orange",
					}}>
					<Grid item>
						<Grid item xs={4} sx={{ ml: 1 }}>
							<Link href={"/pokedex/" + pokemonSpecie.generation.name}>
								<Button sx={{ color: "white" }} size="small">
									<ArrowBackIcon />
								</Button>
							</Link>
						</Grid>
					</Grid>
					<Grid item>
						<Typography sx={{ mr: 4 }} className={styles.pokeGameFont}>
							INFO
						</Typography>
					</Grid>
				</Grid>
				<Grid container sx={{ my: 2 }} justifyContent="space-evenly">
					<Grid item xs={4} sx={{}}>
						<Paper sx={{ width: "125px", height: "125px", border: 1 }}>
							<PokemonImg pokeImgUrl={pokemon.sprites.front_default} />
						</Paper>
					</Grid>
					<Grid item xs={6} sx={{ ml: 1 }}>
						<Paper>
							<Grid item sx={{ mb: 0.3 }}>
								<Typography
									style={{ fontSize: "12px" }}
									className={styles.pokeGameFont}>
									#{pokemon.id} - {formatString(pokemon.name)}
								</Typography>
							</Grid>
							<Grid item sx={{ mb: 1 }}>
								<Typography
									style={{ fontSize: "10px", textAlign: "center" }}
									className={styles.pokeGameFont}>
									{formatString(pokemonSpecie.genera[7].genus)}
								</Typography>
							</Grid>
						</Paper>
						{/* <Divider variant="middle" sx={{ color: "red", my: 0.5 }} /> */}
						<Grid item sx={{ mb: 1 }}>
							<Grid container justifyContent="space-evenly">
								{pokemon.types?.map((pokeType: any) => {
									return (
										<Grid key={pokeType.type.name}>
											<Grid
												item
												xs={12}
												sx={{
													px: 1,
													py: 0.2,
													bgcolor: typeColors.find(
														(color: {
															name: string;
															color: string;
														}) =>
															color.name === pokeType.type.name,
													)?.color,
													borderRadius: "10px",
												}}>
												{formatString(pokeType.type.name)}
											</Grid>
										</Grid>
									);
								})}
							</Grid>
						</Grid>
						<Grid item>
							<Paper>
								<Grid container sx={{ borderBottom: "dashed gray" }}>
									<Grid item xs={6} sx={{ pl: 1 }}>
										HEIGHT:
									</Grid>
									<Grid item xs={6} sx={{ textAlign: "center" }}>
										{pokemon.height}
									</Grid>
								</Grid>
								<Grid container>
									<Grid item xs={6} sx={{ pl: 1 }}>
										WEIGHT:
									</Grid>
									<Grid item xs={6} sx={{ textAlign: "center" }}>
										{pokemon.weight}
									</Grid>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				sx={{
					mx: 1,
					mb: 1,
					px: 1.5,
					py: 0.5,
					bgcolor: "red",
					borderRadius: "10px",
				}}>
				<Paper>
					<PokemonDescription descriptionList={pokeDescription} />
				</Paper>
			</Grid>
		</Box>
	);
}
