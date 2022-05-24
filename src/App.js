import NavBar from './components/NavBar/NavBar';
import { GlobalStyles } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Contador from './components/Contador/Contador';
import {  createContext, useState } from 'react';
export const ContadorContext = createContext(); // creamos el Context  en la variable Contador
function App() {
  const [cont, setCount] = useState(0);

  const theme = {
    color: {
      primary: '#012a4a',
      secondary: '#013a63',
      tertiary: '#a9d6e5',
    },
    font: 'Roboto',
  };
//permitir que los hijos tengan acceso al componente Contador
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContadorContext.Provider value={{cont,setCount}}> 
      <NavBar/>
      <Contador/>
      </ContadorContext.Provider>

    </ThemeProvider>
  );
}

export default App;
