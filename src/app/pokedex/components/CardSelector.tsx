import Link from "next/link";
//MUI
import { Box, Card } from "@mui/material";
// Font
import styles from "../[generationDex]/[pokemonName]/page.module.css";

interface CardSelectorProps {
	itemName: string;
	itemValue: any;
}

export function CardSelector(props: CardSelectorProps) {
	return (
		<Box
			component="span"
			sx={{ mx: 1 }}
			style={{ textAlign: "center" }}
			className={styles.pokeGameFont}>
			<Link
				href={"pokedex/" + props.itemValue}
				key={props.itemValue + "Card"}>
				<Card sx={{ minWidth: 275 }}>
					<h2>{props.itemName}</h2>
				</Card>
			</Link>
		</Box>
	);
}
