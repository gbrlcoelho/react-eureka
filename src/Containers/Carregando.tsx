import React from "react";
import { Link } from "react-router-dom";

export function Carregando() {
  return (
    <>
      <p>Carregando resultados..</p>
      <Link to={"/"}>
        <button>CANCELAR</button>
      </Link>
    </>
  );
}
