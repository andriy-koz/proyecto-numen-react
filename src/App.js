import { GlobalStyles } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ModalAge from './components/ModalAge/ModalAge';
import { useState, useEffect } from 'react';

function App() {
  const theme = {
    color: {
      primary: '#161314',
      secondary: '#2B2628',
      tertiary: '#F4F3F3',
    },
    font: 'Cormorant',
  };

  const [modalAgeOpen, setModalAgeOpen] = useState(true);

  const modalAgeHandler = () => setModalAgeOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {modalAgeOpen && <ModalAge onConfirm={modalAgeHandler} />}
    </ThemeProvider>
  );
}

export default App;
