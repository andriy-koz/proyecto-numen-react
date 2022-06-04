import { createContext, useState } from 'react';
import { GlobalStyles } from './components/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero/Hero';
import Contador from './components/Contador/Contador';
import Wines from './components/Wines';

export const ContadorContext = createContext();

function App() {
  const [cont, setCount] = useState(0);

  const theme = {
    color: {
      primary: '#161314',
      secondary: '#2B2628',
      tertiary: '#F4F3F3',
    },
    font: 'Cormorant',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContadorContext.Provider value={{ cont, setCount }}>
        <NavBar />
        <Hero />
        <Wines />
        <Contador />
      </ContadorContext.Provider>
    </ThemeProvider>
  );
}

export default App;
