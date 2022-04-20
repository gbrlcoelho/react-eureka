import React from "react";
import { Link } from "react-router-dom";
import { Container, Loader, PrimaryButton } from "../Styled";

export function Carregando() {
	return (
		<>
			<Container>
				<Loader style={{ textAlign: "center" }}></Loader>
				<h3>Carregando resultados..</h3>
				<Link to={"/"}>
					<PrimaryButton>CANCELAR</PrimaryButton>
				</Link>
			</Container>
		</>
	);
}
