import { Logo } from "./common/Logo";
import { Menu } from "./common/Menu";
import { HeaderStyle } from "./Header.style";
export function Header() {
	return (
		<HeaderStyle>
			<div className="header-container">
				<Logo />
				<Menu />
			</div>
		</HeaderStyle>
	);
}
