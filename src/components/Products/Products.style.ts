import styled from "styled-components";

export const ProductStyle = styled.section`
	margin: 200px auto 0 auto;
	max-width: var(--body-width);
	display: flex;
	flex-wrap: nowrap;
	gap: 30px;
	align-items: top;
	.lead-image {
		padding: 30px 50px 20px 50px;
		background-color: var(--lead-background-color);
		border-radius: 15px;
		position: relative;
		z-index: 1;
		.lead-image-container {
			display: flex;
			justify-content: center;
			margin-bottom: 30px;
			img {
				text-align: center;
				border-radius: 100px;
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
				border: 3px solid #fff;
			}
		}
		span {
			font-size: var(--base-font-size);
			color: var(--base-font-color);
			line-height: 1em;
			margin-bottom: 15px;
			display: block;
		}
		h1 {
			font-size: var(--h1-font-size);
			font-weight: 300;
			letter-spacing: 12px;
		}
	}
	.lead-categories {
		margin-top: -15px;
		padding: 40px 30px 30px 30px;
		background-color: var(--card-background-color);
		border-radius: 0px 0px 15px 15px;
		ul {
			display: flex;
			flex-direction: column;
			gap: 20px;
			li {
				button {
					color: var(--button-font-color);
					font-size: 18px;
					line-height: 1em;
					font-weight: 300;
					text-transform: capitalize;
					cursor: pointer;
					&:hover,
					&:active {
						color: var(--body-font-color);
					}
				}
			}
		}
	}
	.products-container {
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
		width: 100%;
		.product {
			flex: 0 0 calc(25% - 30px);
			border-radius: 15px;
			display: flex;
			flex-direction: column;
			.product-heading {
				display: block;
				height: 50px;
				border-radius: 15px 15px 0 0;
			}
			.product-content {
				background-color: var(--card-background-color);
				padding: 35px 30px;
				border-radius: 15px;
				margin-top: -10px;
				.category {
					margin-bottom: 30px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.category-name {
						font-size: --var(--card-heading-font-size);
						line-height: 1em;
					}
					.category-menu {
						cursor: pointer;
					}
				}
				.price {
					font-size: var(--h1-font-size);
					line-height: 1em;
					margin-bottom: 20px;
					font-weight: 300;
				}
				.meta {
					display: flex;
					justify-content: space-around;
					font-size: var(--meta-font-size);
					align-items: center;
					line-height: 1.2em;
					.title {
						color: var(--base-font-color);
					}
					.stock {
						max-width: 45px;
						display: flex;
						flex-direction: column;
						align-items: center;
					}
				}
			}
		}
	}

	@media all and (max-width: 640px) {
		margin-top: 50px;
		padding: 0 15px;
		flex-direction: column;
		.lead-image {
			padding: 30px;
			display: flex;
			align-items: center;
			gap: 20px;
			.lead-image-container {
				justify-content: flex-start;
				margin-bottom: 0px;
				img {
					width: 100px;
					height: 100px;
				}
			}
			span {
				margin-bottom: 5px;
			}
			h1 {
				font-size: 22px;
				letter-spacing: 1px;
			}
		}
		.lead-categories {
			ul {
				display: flex;
				flex-direction: row;
				gap: 20px;
				justify-content: space-between;
			}
		}
		.products-container {
			.product {
				flex: 100%;
				.product-content {
					padding: 30px 25px;
					.meta-container {
						display: flex;
						justify-content: space-between;
						align-items: center;
						gap: 10px;
						.price {
							margin-bottom: 0px;
						}
						.meta {
							align-items: flex-start;
							justify-content: flex-end;
							.title {
								font-size: 12px;
								max-width: 150px;
							}
							.stock {
								display: none;
							}
						}
					}
				}
			}
		}
	}
	@media all and (min-width: 1600px) {
		.products-container {
			.product {
				flex: 0 0 calc(20%);
				width: 20%;
			}
		}
	}
`;
