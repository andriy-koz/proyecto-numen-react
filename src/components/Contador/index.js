import React, { useContext, useState } from 'react';
import { ContadorContext } from '../../App';
import { Modal } from '../modal';

//importacion de styled react
import { Contenido, ContenedorBotones, Boton, BotonAdd } from './Contador.styled';
//importacion de estilos css
//import './style-contador.css'
const Contador = ()  => {
  const {cont,setCount} = useContext(ContadorContext);

  const[estadoModal1, cambiarEstadoModal1] = useState(false);

  function confirmarCompra(){
    cambiarEstadoModal1(!estadoModal1);
    setCount(cont + 1);
  }


  return (
    <>
    <ContenedorBotones>
      <BotonAdd onClick={() => cambiarEstadoModal1(!estadoModal1)}>COMPRAR</BotonAdd>
    </ContenedorBotones>
    <Modal
				estado = {estadoModal1}
				cambiarEstado = {cambiarEstadoModal1}
				titulo = "Hola!"
				mostrarHeader = {false}
				mostrarOverlay = {true}
				posicionModal = {'center'}
				padding = {'20px'}

			>	
				<Contenido>
					<h1>CONFIRMAR COMPRA</h1>
          <p>¿Está seguro que quiere comprar este producto?</p>
					<Boton onClick={() => confirmarCompra()}>Confirmar</Boton>
					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Cancelar</Boton>
				</Contenido>
			</Modal>
    </>
  );
}
export  default Contador;