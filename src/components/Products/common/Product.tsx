import { getRandomColor } from "@/utils";
export interface IProduct {
	id: string | number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

export function Product(props: IProduct) {
	return (
		<div className="product" key={props.id}>
			<div
				className="product-heading"
				style={{
					backgroundColor: getRandomColor(),
				}}
			></div>
			<div className="product-content">
				<div className="category">
					<span className="category-name">{props.category}</span>
					<span className="category-menu">...</span>
				</div>
				<div className="meta-container">
					<div className="price">{props.price}$</div>
					<div className="meta">
						<div className="title">{props.title}</div>
						<div className="stock">
							<span>InStore</span>
							<span>120</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
