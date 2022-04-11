import React from "react";
import { Link } from "react-router-dom";
interface Endereco {
  rua: string;
  cidade: string;
  estado: string;
}
interface ResultProps {
  result: Endereco[];
}

export function Resultados(props: ResultProps) {
  return (
    <>
      <p>Resultados para o CEP 87301-050</p>
      {props.result.map((value: Endereco, index: number) => (
        <>
          <span key={index}>
            <b>RUA: {value.rua}</b>
          </span>
          <span key={index}>
            <b>CIDADE: {value.cidade}</b>
          </span>
          <span key={index}>
            <b>ESTADO: {value.estado}</b>
          </span>
        </>
      ))}
      <Link to={"/"}>
        <button>NOVA CONSULTA</button>
      </Link>
    </>
  );
}
