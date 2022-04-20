import { EurekaHeader } from "../Styled";
import Logo from "../Assets/logo.png";

export function Header() {
	return (
		<>
			<EurekaHeader>
				<img src={Logo} alt="logo" />
			</EurekaHeader>
		</>
	);
}
