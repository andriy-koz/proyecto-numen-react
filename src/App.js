import "./App.css";
import Experiencia from "./componentes/Experiencia";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>EXPERIENCIAS RECOMENDADAS</h1>
        <Experiencia
          nombre="Almuerzo"
          lugar="San Rafael"
          imagen="uno"
          oferta="*Oferta valida hasta el 31 de diciembre de 2022"
          experiencia="¡DISFRUTÁ EL ASADOR ENTRE VIÑEDOS! Asado a la leña y vinos elaborados en nuestra bodega. Una perfecta combinación. Los vinos finos de la bodega de Algodon son una adición esencial a cada comida. Una joya escondida considerado por muchos como uno de los secretos mejores guardados de la Ruta del Vino Argentina."
        />
        <Experiencia
          nombre="Bodega Zuccardi"
          lugar="Valle de Uco"
          imagen="dos"
          oferta="*Oferta valida hasta el 31 de diciembre de 2022"
          experiencia="Bodega Familia Zuccardi es una empresa familiar fundada en 1963. Desde sus viñedos ubicados en Maipú, Santa Rosa, y Vista Flores en la provincia de Mendoza, esta bodega argentina hacedora de grandes vinos (Zuccardi Serie A Malbec o Zuccardi Q Cabernet Franc 2019 entre otros) tiene un claro compromiso con la calidad y la innovación."
        />
        <Experiencia
          nombre="Ruta del Vino"
          lugar="Luján de Cuyo"
          imagen="tres"
          oferta="*Oferta valida hasta el 31 de diciembre de 2022"
          experiencia="Los invitamos a descubrir la Ruta del Vino en la cual visitaremos dos Bodegas, una de gran escala y reconocimiento a nivel internacional (Norton o Chandon) y otra familiar galardonada con los premios más importantes por prestigiosos concursos mundiales (Carmine Granta o Hilbing Franke Disttillery)."
        />
      </div>
    </div>
  );
}

export default App;
