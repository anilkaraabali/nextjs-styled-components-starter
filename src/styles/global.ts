import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
${normalize}
${reset}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

html,
body {
    max-width: 100vw;
    overflow-x: hidden;
}

body {
    font-size: 16px;
    line-height: 28px;
    font-kerning: normal;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
}

button {
    cursor: pointer;
}
`;

export { GlobalStyle };
