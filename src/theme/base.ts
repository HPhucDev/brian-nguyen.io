import { createTheme } from '@mui/material/styles';

export const baseTheme = createTheme({
  palette: {
    mode: 'light',
    divider: '#F0F1FA',
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#0A0B0F',
      secondary: '#666875',
      disabled: '#A1A2B2',
    },
    primary: {
      light: '#8FAFFF',
      main: '#000000',
      dark: '#000000',
    },
    secondary: {
      light: '#F0F1FA',
      main: '#D8D9E3',
      dark: '#A1A2B2',
    },
    global01: {
      '100': '#000947',
      '200': '#000C61',
      '300': '#1C287A',
      '400': '#3349E8',
      '500': '#8FAFFF',
      '600': '#D9E4FF',
      '700': '#F5F8FF',
      '800': '#c1c1c132',
    },
    neutral01: {
      '100': '#000000',
      '200': '#0A0B0F',
      '300': '#666875',
      '400': '#A1A2B2',
      '500': '#D8D9E3',
      '600': '#F0F1FA',
      '700': '#FFFFFF',
    },
    error: {
      light: '#FFE3E5',
      main: '#ED1826',
      dark: '#D0021B',
    },
    warning: {
      contrastText: '#FFF9F0',
      light: '#FFC56D',
      main: '#EE8A2B',
      dark: '#792C00',
    },
    success: {
      light: '#BCEBCE',
      main: '#00A843',
      dark: '#006629',
    },
    info: {
      light: '#F5F8FF',
      main: '#D9E4FF',
      dark: '#000C61',
    },
  },
});
