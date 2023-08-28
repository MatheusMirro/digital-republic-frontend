import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #D3D3D3;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    flex-direction: column-reverse;
    display: flex;
    justify-content: center;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }


`;

export default GlobalStyle;
