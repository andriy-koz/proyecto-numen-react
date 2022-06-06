import { createContext, useState } from 'react';
import { GlobalStyles } from './components/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero/Hero';
import Contador from './components/Contador/Contador';
import Wines from './components/Wines';
import Gallery from './components/Carousel';
import './styles/carousel.css';
import Form from './components/Form/Form';
import { FooterContainer } from './containers/footer';
import ModalAge from './components/ModalAge/ModalAge';

export const ContadorContext = createContext();

function App() {
  const [cont, setCount] = useState(0);
  const [modalAgeOpen, setModalAgeOpen] = useState(true);
  const modalAgeHandler = () => setModalAgeOpen(false);

  const theme = {
    color: {
      primary: '#161314',
      secondary: '#2B2628',
      tertiary: '#F4F3F3',
    },
    font: 'Cormorant',
    colors: {
      primary: '#FF8126',
      body: '#FFFFFF',
      warning: {
        background: '#C2E8CE',
        text: '#1F1F1F',
      },
      button: '#FFFFFF',
      latestOffers: {
        background: '#F7F5F0',
        oldPrice: '#656565',
      },
      ourPartner: '#6090C3',
    },
    fonts: {
      primary: "'Poppins', sans-serif",
      secondary: "'Cormorant', serif",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContadorContext.Provider value={{ cont, setCount }}>
        <NavBar />
        <Hero />
        <Contador />
        <Wines />
        <Gallery />
        <Form />
        <FooterContainer />
        {modalAgeOpen && <ModalAge onConfirm={modalAgeHandler} />}
      </ContadorContext.Provider>
    </ThemeProvider>
  );
}

export default App;
