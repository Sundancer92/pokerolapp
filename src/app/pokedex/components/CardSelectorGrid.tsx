"use client";
//Custom Components
import { CardSelector } from "./CardSelector";
// MUI
import { Box, Grid } from "@mui/material";
// REACT
import { useState } from "react";

interface CardSelectorGridProps {
	customList: any;
}

export function CardSelectorGrid({ customList }: CardSelectorGridProps) {
	return (
		<Box>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="flex-start"
				rowGap={2}>
				{customList.map((item: any) => {
					return (
						<CardSelector
							itemName={item.name}
							itemValue={item.regionId}
							key={item.name + "card"}
						/>
					);
				})}
			</Grid>
		</Box>
	);
}
