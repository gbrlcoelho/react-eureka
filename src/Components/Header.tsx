import { EurekaHeader } from "../Styled";
import Logo from "../Assets/logo.png";

export function Header() {
	return (
		<>
			<EurekaHeader>
				<img style={{ width: "300px" }} src={Logo} alt="logo" />
			</EurekaHeader>
		</>
	);
}
