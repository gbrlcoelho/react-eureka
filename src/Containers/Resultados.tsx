import React from "react";
import { Link } from "react-router-dom";
import { CEPDados } from "../Components/CEPdados";
import { Button, Container } from "../Styled";

export function Resultados(props: any) {
	const result = props.result;
	return (
		<>
			<Container>
				<div>
					<h3>Resultados para o CEP</h3>
					<CEPDados cepDados={result} />
					<Link to={"/"}>
						<Button style={{ marginTop: "20px" }}>NOVA CONSULTA</Button>
					</Link>
				</div>
			</Container>
		</>
	);
}
