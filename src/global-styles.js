import { createGlobalStyle } from 'styled-components';

const mainFont = 'Rubik';
const codeFont = 'Fira Code';

export const theme = {
  display: {
    desktop: 960,
    tablet: 600,
    phone: 480,
  },
  colors: {
    pink: '#ff8396',
    black: '#262626',
    gray: '#808080',
    white: '#f5f5f5',
  },
  text: {
    title: {
      type: 'p',
      style: {
        fontSize: '1.5rem',
        fontFamily: mainFont,
        marginBottom: '10px',
      },
    },
    subtitle: {
      type: 'p',
      style: {
        fontSize: '1.1rem',
        fontFamily: mainFont,
      },
    },
    body: {
      type: 'p',
      style: {
        fontSize: '0.9rem',
        fontFamily: mainFont,
      },
    },
    subscript: {
      type: 'span',
      style: {
        fontSize: '0.7rem',
        fontFamily: mainFont,
      },
    },
    code: {
      type: 'p',
      style: {
        fontSize: '0.9rem',
        fontFamily: codeFont,
      },
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  /* rubik-300 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    src: local('Rubik Light'), local('Rubik-Light'),
         url('../fonts/rubik-v9-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('../fonts/rubik-v9-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* rubik-regular - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: local('Rubik'), local('Rubik-Regular'),
         url('../fonts/rubik-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('../fonts/rubik-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* rubik-700 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: local('Rubik Bold'), local('Rubik-Bold'),
         url('../fonts/rubik-v9-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('../fonts/rubik-v9-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* fira-code-regular - latin */
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 400;
    src: local(''),
         url('../fonts/fira-code-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('../fonts/fira-code-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* fira-code-700 - latin */
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 700;
    src: local(''),
         url('../fonts/fira-code-v8-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('../fonts/fira-code-v8-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background: ${theme.colors.black};
  }
`;
