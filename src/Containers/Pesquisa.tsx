import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import consultarCep from "cep-promise";

function numbersOnly(str: string) {
  return str.replace(/[^\d]/g, "");
}

export function Pesquisa() {
  const [cepNumber, setCepNumber] = useState<string>("");
  function handleSuccess(dadosCEP: number) {}

  function handleError(err: string) {}

  function handleSearch() {
    consultarCep(cepNumber).then(handleSuccess).catch(handleError);
    <Link to={"/result"}></Link>;
  }

  return (
    <>
      <p>Qual CEP você deseja pesquisar?</p>
      <InputMask
        mask="99999-999"
        value={cepNumber}
        onChange={(event) => setCepNumber(numbersOnly(event.target.value))}
        required
        placeholder="00000-000"
      />
      <Link to={"/result"}>
        <button onClick={handleSearch}>CONSULTAR</button>
      </Link>
    </>
  );
}
