import React from "react";
import "./App.css";
import { Pesquisa } from "./Containers/Pesquisa";
import { Resultados } from "./Containers/Resultados";
import { Carregando } from "./Containers/Carregando";
import { Erro } from "./Containers/Erro";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Pesquisa />} />
          <Route
            path="/result"
            element={
              <Resultados
                result={[{ rua: "São Paulo", cidade: "Maringá", estado: "PR" }]}
              />
            }
          />
          <Route path="/loading" element={<Carregando />} />
          <Route
            path="/erro"
            element={<Erro errorMessage="Erro na pesquisa" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
