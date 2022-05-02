import NavBar from './Components/NavBar/NavBar';
import { GlobalStyles } from './Components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = {
    color: {
      primary: '#012a4a',
      secondary: '#013a63',
      tertiary: '#a9d6e5',
    },
    font: 'Roboto',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
