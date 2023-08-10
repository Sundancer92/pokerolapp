import Link from "next/link";
//MUI
import { Box, Card, Grid } from "@mui/material";
// Custom Component
import PokemonSprite from "./PokemonSprite";
// Custom Helper
import { formatString } from "@/helpers/formatString";
import getIdFromURL from "@/helpers/getIdFromURL";

interface PokemonCardProps {
	itemName: string;
	itemValue: any;
	generation: string;
}

export function PokemonCard(props: PokemonCardProps) {
	const pokemonNumber = getIdFromURL(props.itemValue);
	return (
		<Box sx={{ textAlign: "center", maxWidth: "100px" }}>
			<Link
				href={props.generation + "/" + props.itemName}
				key={props.itemValue + "Card"}>
				<Card>
					<h6>{formatString(props.itemName)}</h6>
					<Grid sx={{}}>
						<PokemonSprite pokeId={pokemonNumber} />
					</Grid>
				</Card>
			</Link>
		</Box>
	);
}
