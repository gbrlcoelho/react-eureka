import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, Container } from "../Styled";

interface Error {
	errorMessage: string;
}

export function Erro(props: Error) {
	return (
		<>
			<Container>
				<div>
					<h3>{props.errorMessage}</h3>
					<Link to={"/"}>
						<PrimaryButton>NOVA CONSULTA</PrimaryButton>
					</Link>
				</div>
			</Container>
		</>
	);
}
