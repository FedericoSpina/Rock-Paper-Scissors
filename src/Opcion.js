import React from "react";

const Opcion = (props) => {
  return (
    <div className="opcion" onClick={props.elegir}>
      {props.valor.eleccion}
    </div>
  );
};

export default Opcion;
