import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  font-family: 'Cormorant', sans-serif;
}
`;
