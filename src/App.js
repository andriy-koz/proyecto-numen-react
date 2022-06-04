import { ThemeProvider } from 'styled-components';

const theme = {
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

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
}

export default App;
