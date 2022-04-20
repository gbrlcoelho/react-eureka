export function CEPDados(props: any) {
	const cepDados = props.cepDados;
	const keys = Object.keys(cepDados);

	return (
		<>
			{keys.map((key) => (
				<span key={key}>
					<br />
					<b>{key}: </b>
					{cepDados[key]}
				</span>
			))}
		</>
	);
}
