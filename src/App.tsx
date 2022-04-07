import React from "react";
import "./App.css";
import { Pesquisa } from "./Containers/Pesquisa";
import { Resultados } from "./Containers/Resultados";
import { Carregando } from "./Containers/Carregando";
import { Erro } from "./Containers/Erro";

function App() {
  return (
    <>
      <div>
        <Resultados
          result={{
            RUA: "Rua São Paulo",
            CIDADE: "Maringá",
            ESTADO: "PR",
          }}
        />
      </div>
    </>
  );
}

export default App;
