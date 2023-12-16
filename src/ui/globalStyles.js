import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
    -webkit-text-size-adjust: 100%; 
    -ms-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  #root {
    display: flex;
    justify-content: center;
    height: 100dvh;
  }

  *, *::before, *::after {
    --default-font-size: 16px;
    
    --dark-mode-background: #201F24;
    --dark-mode-start-page-background: #2D2C36;
    
    --primary-purple: #5946D2;
    --on-dark-primary-purple: #9373FF;
    
    --light-primary-purple: #F2EFFB;
    --light-primary-purple-variant: #B0A2F2;
    --light-primary-purple-inverse: #C8BFFF;
    
    --dark-primary-purple-variant: #544794;
    --dark-primary-purple-inverse: #5946D2;
    
    --secondary-purple: #E5DEFF;
    --over-secondary-purple: #160067;

    --on-dark-light-purple: #C8BFFF14;

    --outline-grey: #79747E;
    --input-light-grey: #FAF9FB;
    --light-grey: #1C1B1F1F;
    --over-light-grey: #1C1B1F61;
    --over-light-surface-grey: #1C1B1F29;
    
    --dark-grey: #E6E1E514;
    --over-dark-grey: #E6E1E599;
    --over-dark-grey-variant: #E6E1E561;
    --over-dark-surface-grey: #E6E1E529;

    --over-light-grey-opaque-variant: #A5A0AC;
    --over-dark-grey-opaque-variant: #CAC4D0;

    --light-pink: #F85977;
    --dark-pink: #D9415E;

    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Roboto, sans-serif;
    font-size: var(--default-font-size);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  *:not(input) {
    caret-color: transparent;
  }

  :focus,
  a:active,
  a:hover,
  button:focus,
  input:focus,
  select:focus {
    outline: 0;
  }

  button {
    border: 0;
    outline: 0;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
  }

  button:active,
  button:focus,
  button:hover {
    outline: 0;
  }

  button,
  input,
  select,
  textarea {
    font-size: 100%;
    margin: 0; 
    vertical-align: baseline;
  }

  button,
  input {
    line-height: normal;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    appearance: button;
    cursor: pointer; 
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  img {
    vertical-align: middle;
  }

  input:disabled, textarea:disabled, input:disabled::placeholder, textarea:disabled::placeholder {
    -webkit-text-fill-color: currentColor;
    opacity: 1;
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  ::-moz-selection,
  ::selection {
    text-shadow: none;
  }

  ${'' /* @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  } */}
`

export default GlobalStyle