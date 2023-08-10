export default function getIdFromURL(pokeURL: string) {
	const parts = pokeURL.split("/");
	return parts[6];
}
