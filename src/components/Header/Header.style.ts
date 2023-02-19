import styled from "styled-components";
export const HeaderStyle = styled.header`
	background-color: rgba(0, 0, 0, 0.08);
	.header-container {
		max-width: var(--body-width);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		padding: 30px 0;
		.navigation {
			ul {
				display: flex;
				align-items: center;
				gap: 30px;
				li {
					font-size: 300;
					a:hover {
						color: var(--button-font-color);
					}
				}
			}
		}
		.mobile-navigation {
			display: none;
			.closed {
				font-size: var(--body-font-size);
				font-weight: 600;
			}
			ul {
				&.opened {
					opacity: 1;
					visibility: visible;
					z-index: 99;
				}
				z-index: -9;
				opacity: 0;
				visibility: hidden;
				transition: all var(--animation-speed);
				position: fixed;
				min-height: 200px;
				margin: 0 auto;
				background-color: var(--card-background-color);
				padding: 10vw;
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 30px;
				flex-direction: column;
				left: 0;
				right: 0;
				top: 80px;
			}
		}
		@media all and (max-width: 640px) {
			padding: 30px 15px;
			.navigation {
				display: none;
			}
			.mobile-navigation {
				display: block;
			}
		}
	}
`;
