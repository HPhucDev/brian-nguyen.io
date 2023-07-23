import { Components, Theme } from '@mui/material';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: `
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-overflow-scrolling: touch;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/proximanova-regular-webfont.woff2') format('woff2'),
      url('/fonts/proximanova-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/proximanova-bold-webfont.woff2') format('woff2'),
      url('/fonts/proximanova-bold-webfont.woff') format('woff');
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/proximanova-extrabold-webfont.woff2') format('woff2'),
      url('/fonts/proximanova-extrabold-webfont.woff') format('woff');
    font-weight: 800;
    font-style: bolder;
    font-display: swap;
  }


  html,
  body,
  #root {
    height: 100%;
    font-family: "Proxima Nova", sans-serif;
    line-height: 28px;
  }

  body {
    overflow: overlay;
    margin: 0;
    overflow: overlay;
    min-height: -webkit-fill-available;
  }

  html {
    color: #222;
    font-weight: 100;
    font-size: 18px;
    font-family: "Proxima Nova", sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    text-decoration: none;
  }

  em {
    font-style: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: inherit;
  }

  button {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;
    box-shadow: inset 0 0 10px 10px transparent;
    border: solid 3px transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    box-shadow: inset 0 0 10px 10px #dbdbdb;
    border: solid 3px transparent;
  }

  /*
  * Disable webkit input type search styles
  */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
  * Remove text-shadow in selection highlight:
  * https://twitter.com/miketaylr/status/12228805301
  *
  * These selection rule sets have to be separate.
  * Customize the background color to match your design.
  */

  ::-moz-selection {
    color:  #000000;
    background: #ebecf5;
    text-shadow: none;
  }

  ::selection {
    color: #000000;
    background: #ebecf5;
    text-shadow: none;
  }

  /*
  * A better looking default horizontal rule
  */

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }

  /*
  * Remove the gap between audio, canvas, iframes,
  * images, videos and the bottom of their containers:
  * https://github.com/h5bp/html5-boilerplate/issues/440
  */

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  /*
  * Remove default fieldset styles.
  */

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  /*
  * Remove default input type="number" styles.
  */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /*
  * Allow only vertical resizing of textareas.
  */

  textarea {
    resize: vertical;
  }

  /*
  * Browser upgrade prompt
  * ========================================================================== */

  :global(.browserupgrade) {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
  }

  strong {
    fon
  `,
};
