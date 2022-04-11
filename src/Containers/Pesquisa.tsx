import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Pesquisa() {
  const [cepNumber, setCepNumber] = useState<number>(0);

  return (
    <>
      <p>Qual CEP você deseja pesquisar?</p>
      <input
        value={cepNumber}
        onChange={(event) => setCepNumber(parseInt(event.target.value))}
        type="number"
        required
        placeholder="00000-000"
      />
      <Link to={"/loading"}>
        <button>CONSULTAR</button>
      </Link>
    </>
  );
}
