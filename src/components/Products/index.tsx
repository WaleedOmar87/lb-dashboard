import { useProducts } from "@/hooks";
import { Product } from "./common/Product";
import { Loading } from "./common/Loader";
import { ProductStyle } from "./Products.style";
import Image from "next/image";
export function Products() {
	const { products, loading, error } = useProducts();
	const leadCategories = ["daily", "weekly", "monthly"];
	return (
		<ProductStyle>
			<div className="products-lead">
				<div className="lead-image">
					<div className="lead-image-container">
						<Image
							src="/lead-image.png"
							alt="lead-image"
							width={138}
							height={138}
						/>
					</div>
					<div className="lead-content">
						<span>Report To</span>
						<h1>Best Sales</h1>
					</div>
				</div>
				<div className="lead-categories">
					<ul>
						{leadCategories.map((category, index) => {
							return (
								<li className="lead-category" key={index}>
									<button name={category}>{category}</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="products-container">
				{loading && <Loading />}
				{!loading &&
					products.length &&
					products.map((product: any) => {
						return <Product key={product.id} {...product} />;
					})}
			</div>
		</ProductStyle>
	);
}
