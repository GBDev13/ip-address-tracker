import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    outline: none;

    :root {
      --gray900: hsl(0, 0%, 17%);
      --gray700: hsl(0, 0%, 59%);
    }

  }
`;
 
export default GlobalStyle;