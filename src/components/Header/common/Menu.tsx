import { useState } from "react";
const menuItems = [
	{
		title: "Home",
		url: "#",
	},
	{
		title: "About",
		url: "#",
	},
	{
		title: "Products",
		url: "#",
	},
];
export function Menu() {
	const [menuOpened, setMenuOpened] = useState(false);
	return (
		<>
			<nav className="navigation">
				<ul>
					{menuItems.map((menu, index) => {
						return (
							<li key={index}>
								<a href={menu.url}>{menu.title}</a>
							</li>
						);
					})}
				</ul>
			</nav>
			<nav className="mobile-navigation">
				<button
					onClick={() => {
						setMenuOpened(!menuOpened);
					}}
					className={`navigation-toggle ${!menuOpened && "closed"}`}
				>
					{menuOpened ? "Close" : "..."}
				</button>
				<ul className={`${menuOpened && "opened"}`}>
					{menuItems.map((menu, index) => {
						return (
							<li key={index}>
								<a href={menu.url}>{menu.title}</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}
