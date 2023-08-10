export function formatString(inputString: string): string {
	// Dividir la cadena en palabras utilizando los guiones como separadores
	const words = inputString.split("-");

	// Capitalizar la primera letra de cada palabra y unirlas con espacios en blanco
	const formattedString = words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return formattedString;
}
