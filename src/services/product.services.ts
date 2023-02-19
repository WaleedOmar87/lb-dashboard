export async function getProducts() {
	let products = await fetch("https://fakestoreapi.com/products?limit=10");
	return await products.json();
}
