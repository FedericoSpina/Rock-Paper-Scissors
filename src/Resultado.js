import React from "react";

const Resultado = (props) => {
  let resultadoFinal;
  if (
    props.jugador.derrota === props.maquina.eleccion &&
    props.jugador.eleccion
  ) {
    resultadoFinal = (
      <>
        <h1> Winner : Player!!! 🧑🧑🧑 </h1>
      </>
    );
  } else if (
    props.maquina.derrota === props.jugador.eleccion &&
    props.maquina.eleccion
  ) {
    resultadoFinal = (
      <>
        <h1> Winner : Machine! 🤖🤖🤖 </h1>
        <h4> Good luck next time... 😔</h4>
      </>
    );
  } else if (
    props.maquina.eleccion === props.jugador.eleccion &&
    props.maquina.eleccion
  ) {
    resultadoFinal = (
      <>
        <h1> Draw 🧑🤝🤖 </h1>
      </>
    );
  }

  return <h1>{resultadoFinal}</h1>;
};

export default Resultado;
