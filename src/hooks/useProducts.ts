import { useState, useEffect, useContext } from "react";
import { AppContext } from "@/store";
import { getProducts } from "@/services";

export const useProducts = () => {
	const [error, setError] = useState({ code: 0, message: "" });
	const { products, loading, dispatchAction } = useContext(AppContext);

	/* Fetch Products and Remove Loading Screen */
	useEffect(() => {
		dispatchAction("loading", true);
		(async () => {
			let productsList = await getProducts();
			if (!productsList || products.hasOwnProperty("error")) {
				setError({ code: 500, message: productsList.errorMessage });
			} else {
				setError({ code: 0, message: "" });
				dispatchAction("products", productsList);
				dispatchAction("loading", false);
			}
		})();
	}, []);

	return {
		loading,
		products,
		error,
	};
};
