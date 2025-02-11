import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    position:relative;
    display:block;
    width: 100%;
    height: 100%;
    line-height: 1.5;
    margin: 0 auto;
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    word-break: keep-all;
    word-wrap: break-word;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;