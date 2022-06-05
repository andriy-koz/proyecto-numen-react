import React from "react";
import "../hojas-de-estilo/Experiencia.css";

function Experiencia(props) {
  return (
    <div className="contenedor-experiencia">
      <img
        className="imagen-experiencia"
        src={require(`../imagenes/experiencia-${props.imagen}.png`)}
        alt="Foto"
      />
      <div className="contenedor-texto-experiencia">
        <p className="nombre-experiencia">
          <strong>{props.nombre} en {props.lugar}</strong>
        </p>
        <hr></hr>
        <p className="texto-experiencia">{props.experiencia}</p>
        <p className="texto-oferta">{props.oferta}</p>
        <button className="comprar">Comprar</button> 
      </div>
    </div>
  );
}

export default Experiencia;
