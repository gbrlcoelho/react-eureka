import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Qual CEP você deseja pesquisar ?</p>
          <input type="number" />
          <button>CONSULTAR</button>
        </header>
      </div>
    </>
  );
}

export default App;
