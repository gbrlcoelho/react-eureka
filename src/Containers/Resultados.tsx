import React from "react";
import { Link } from "react-router-dom";
import { CEPDados } from "../Components/CEPdados";

export function Resultados(props: any) {
	const result = props.result;
	return (
		<>
			<p>Resultados para o CEP</p>
			<CEPDados cepDados={result} />
			<Link to={"/"}>
				<button>NOVA CONSULTA</button>
			</Link>
		</>
	);
}
