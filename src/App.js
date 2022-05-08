import { GlobalStyles } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ModalAge from './components/ModalAge/ModalAge';

function App() {
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
      <ModalAge />
    </ThemeProvider>
  );
}

export default App;
