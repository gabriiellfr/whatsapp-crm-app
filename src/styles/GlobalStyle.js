// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${(props) => props.theme.paddingMedium};
    font-family: ${(props) => props.theme.fontFamily};
  }

  p {
    margin-bottom: ${(props) => props.theme.paddingSmall};
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    transition: color ${(props) => props.theme.transition};
    
    &:hover {
      color: ${(props) => props.theme.primaryDark};
      text-decoration: underline;
    }
  }

  button {
    font-family: ${(props) => props.theme.fontFamily};
    cursor: pointer;
    transition: background-color ${(props) => props.theme.transition};
    
    &:hover {
      background-color: ${(props) => props.theme.primaryDark};
    }
  }

  input, textarea {
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: ${(props) => props.theme.borderRadiusSmall};
    padding: ${(props) => props.theme.paddingSmall};
  }

  /* Scrollbar styles for webkit browsers */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.light};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.primary};
    border-radius: ${(props) => props.theme.borderRadiusSmall};
    border: 3px solid ${(props) => props.theme.light};
  }
`;

export default GlobalStyle;
