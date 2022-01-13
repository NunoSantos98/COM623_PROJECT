import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    text-rendering: optimizeLegibility;
    font-family: Arial, sans-serif;
  }

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
    margin:35px;
  }

  
  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
  p {
    text-align:left;
    width: 242px;
    line-height: 24px;
    

  }
  title {
    text-align: left;
  }
`
