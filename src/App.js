import { GlobalStyles } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero/Hero';

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
      <Hero />
    </ThemeProvider>
  );
}

export default App;
