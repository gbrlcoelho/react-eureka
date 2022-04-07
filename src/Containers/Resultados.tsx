import React from "react";

export function Resultados(props: any) {
  const result = props.result;
  const keys = Object.keys(result);
  const elements = keys.map((key) => (
    <span key={key}>
      <b>
        {key}: {result[key]}
      </b>
    </span>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <p>Resultados para o CEP 87301-050</p>
        {elements}
        <button>NOVA CONSULTA</button>
      </header>
    </div>
  );
}
