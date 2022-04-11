import React from "react";
import { Link } from "react-router-dom";

export function Erro(props: {
  errorMessage:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <>
      <p>Erro na consulta</p>
      <p>{props.errorMessage}</p>
      <Link to={"/"}>
        <button></button>
      </Link>
    </>
  );
}
