import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../Styled";

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
						<Button>NOVA CONSULTA</Button>
					</Link>
				</div>
			</Container>
		</>
	);
}
