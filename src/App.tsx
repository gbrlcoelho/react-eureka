import "./App.css";
import { Pesquisa } from "./Containers/Pesquisa";
import { Resultados } from "./Containers/Resultados";
import { Carregando } from "./Containers/Carregando";
import { Erro } from "./Containers/Erro";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Components/Header";

function App() {
	const [resultado, setResultado] = useState<object>({});
	const [errorMessage, setErrorMessage] = useState<string>("");

	return (
		<>
			<body>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Pesquisa
								setResultado={setResultado}
								setErrorMessage={setErrorMessage}
							/>
						}
					/>
					<Route path="/result" element={<Resultados result={resultado} />} />
					<Route path="/loading" element={<Carregando />} />
					<Route path="/erro" element={<Erro errorMessage={errorMessage} />} />
				</Routes>
			</body>
		</>
	);
}

export default App;
