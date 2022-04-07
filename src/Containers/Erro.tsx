import React from "react";

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
    <div className="App">
      <header className="App-header">
        <p>Erro na consulta</p>
        <p>{props.errorMessage}</p>
      </header>
    </div>
  );
}
