import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Sofia Sans', sans-serif;
    text-decoration: none;
  }

  body {
    background-image: linear-gradient(to bottom, rgba(131, 147, 219, 1), rgba(173, 187, 249, 0.92));
  }
`;
