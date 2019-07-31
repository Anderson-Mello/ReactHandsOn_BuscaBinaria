import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//Element
const elementEnunciado = (
  <div>
    <h2>Jogo - Pense num número entre 0 e 300</h2>
  </div>
);

//Component
function App(props) {
  /*CODIGO ANTIGO: const [i, setI] = useState(1);
  // const increment = () => {
  //   setI(i + 1);
  // };*/

  //Estados: ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setPalpite(150);
    setNumPalpites(1);
    setMin(0);
    setMax(300);
  };

  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  const reiniciaJogo = () => {
    //setEstado("ENTRADA");
    iniciarJogo();
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  } else if (estado === "FIM") {
    if (numPalpites > 1) {
      return (
        <div>
          <p>
            Acertou o número {palpite} com {numPalpites} chutes!
          </p>
          <button onClick={reiniciaJogo}>Jogar novamente</button>
        </div>
      );
    } else {
      //Singular
      return (
        <div>
          <p>
            Acertou o número {palpite} com {numPalpites} chute!
          </p>
          <button onClick={reiniciaJogo}>Jogar novamente</button>
        </div>
      );
    }
  }

  //Entre 0 e 300
  return (
    <div className="App">
      {elementEnunciado}
      <p>O seu número é {palpite}?</p>
      {/* <p>
        Min = {min} / Max = {max}
      </p> */}
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
      {/* CODIGO ANTIGO: {i}
      <button onClick={increment}>Increment</button>
      <h1>Hello {props.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
  {element} */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Anderson" />, rootElement);
