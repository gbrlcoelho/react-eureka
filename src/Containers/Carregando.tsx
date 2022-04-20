import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Loader } from "../Styled";

export function Carregando() {
	return (
		<>
			<Container>
				<Loader style={{ textAlign: "center" }}></Loader>
				<h3>Carregando resultados..</h3>
				<Link to={"/"}>
					<Button>CANCELAR</Button>
				</Link>
			</Container>
		</>
	);
}
