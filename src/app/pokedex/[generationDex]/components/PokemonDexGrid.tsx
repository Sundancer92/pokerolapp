"use client";
//Custom Components
import { PokemonCard } from "./PokemonCard";
// MUI
import { Box, Grid } from "@mui/material";
// REACT
import { useState } from "react";
// Helper
import getIdFromURL from "@/helpers/getIdFromURL";

interface PokemonDexGridProps {
	customList: any;
	generation: string;
}

export function PokemonDexGrid({
	customList,
	generation,
}: PokemonDexGridProps) {
	customList.pokemon_species.sort(
		(a: any, b: any) =>
			Number(getIdFromURL(a.url)) - Number(getIdFromURL(b.url)),
	);

	return (
		<Box>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				columnGap={1}
				rowGap={1}>
				{customList.pokemon_species.map((item: any) => {
					return (
						<Grid
							item
							key={item.name + "card"}
							xs={3}
							sx={{ border: "" }}>
							<PokemonCard
								itemName={item.name}
								itemValue={item.url}
								generation={generation}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}
