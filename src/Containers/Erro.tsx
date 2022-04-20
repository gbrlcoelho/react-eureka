import React from "react";
import { Link } from "react-router-dom";

interface Error {
	errorMessage: string;
}

export function Erro(props: Error) {
	return (
		<>
			<p>{props.errorMessage}</p>
			<Link to={"/"}>
				<button>NOVA CONSULTA</button>
			</Link>
		</>
	);
}
