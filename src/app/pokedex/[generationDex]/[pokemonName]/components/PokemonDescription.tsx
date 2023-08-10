"use client";

// FOnts
import styles from "../page.module.css";
// const pokemonGameFont = localFont({ src: "@/app/fonts/pokemon_game_font" });
// MUI
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
//react
import { useState } from "react";

interface PokemonDescriptions {
	descriptionList: any;
}

export function PokemonDescription(props: PokemonDescriptions) {
	const pokedexEntries = props.descriptionList;
	const [value, setValue] = useState(pokedexEntries[0].version.name);

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{ width: "100%", typography: "body1" }}
			className={styles.pokeGameFont}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						variant="scrollable"
						scrollButtons="auto"
						onChange={handleChange}
						aria-label="lab API tabs example">
						{pokedexEntries.map((entrie: any) => {
							return (
								<Tab
									className={styles.pokeGameFont}
									label={entrie.version.name}
									value={entrie.version.name}
									key={entrie.version.name}
								/>
							);
						})}
					</TabList>
				</Box>
				{pokedexEntries.map((entrie: any) => {
					return (
						<TabPanel
							value={entrie.version.name}
							key={entrie.version.name + entrie.language.name}>
							<h5>{entrie.flavor_text}</h5>
						</TabPanel>
					);
				})}
			</TabContext>
		</Box>
	);
}
