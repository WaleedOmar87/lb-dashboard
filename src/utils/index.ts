export function getRandomColor() {
	const productColors = [
		"#FF8B64",
		"#55C2E6",
		"#FF5E7D",
		"#FF8B64",
		"#55C2E6",
		"#55C2E6",
		"#7335D2",
		"#F1C75B",
		"#4BCF82",
		"#7335D2",
	];
	return productColors[Math.floor(Math.random() * productColors.length)];
}
