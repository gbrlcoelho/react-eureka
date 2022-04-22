import React from "react";
import { Link } from "react-router-dom";
import { CEPDados } from "../Components/CEPdados";
import { Container, PrimaryButton } from "../Styled";

interface ResultProps {
	result: object;
}

export function Resultados(props: ResultProps) {
	const result = props.result;
	return (
		<>
			<Container>
				<div>
					<h3>Resultados para o CEP</h3>
					<CEPDados cepDados={result} />
					<Link to={"/"}>
						<PrimaryButton style={{ marginTop: "20px" }}>
							NOVA CONSULTA
						</PrimaryButton>
					</Link>
				</div>
			</Container>
		</>
	);
}
