import NavBar from './components/NavBar/NavBar';
import { GlobalStyles } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

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
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
