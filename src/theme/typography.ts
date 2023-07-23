import { createTheme } from '@mui/material/styles';

import { baseTheme } from './base';

export const typography = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: '"Proxima Nova", sans-serif',
    heading01: {
      fontWeight: 800,
      fontSize: '3.052rem',
      lineHeight: '64px',
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '1.802rem',
        lineHeight: '40px',
      },
    },
    heading02: {
      fontWeight: 800,
      fontSize: '2.441rem',
      lineHeight: '48px',
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '1.602rem',
        lineHeight: '32px',
      },
    },
    heading03: {
      fontWeight: 800,
      fontSize: '1.953rem',
      lineHeight: '40px',
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '1.424rem',
        lineHeight: '32px',
      },
    },
    heading04: {
      fontWeight: 700,
      fontSize: '1.563rem',
      lineHeight: '32px',
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '1.266rem',
        lineHeight: '32px',
      },
    },
    heading05: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: '32px',
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '1.125rem',
        lineHeight: '28px',
      },
    },
    paragraph01: {
      fontSize: '1rem',
      lineHeight: '28px',
    },
    paragraph02: {
      fontSize: '0.8rem',
      lineHeight: '24px',
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '0.889rem',
      },
    },
    caption01: {
      fontSize: '0.64rem',
      lineHeight: '16px',
      [baseTheme.breakpoints.down('md')]: {
        lineHeight: '20px',
        fontSize: '0.79rem',
      },
    },
    caption02: {
      fontSize: '0.512rem',
      lineHeight: '16px',
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '0.702rem',
      },
    },

    webHeading01: {
      fontSize: 30,
      lineHeight: '32px',
      fontWeight: 700,
      [baseTheme.breakpoints.down('md')]: {
        fontSize: 28,
      },
    },
    webHeading02: {
      fontFamily: '"Proxima Nova", sans-serif',
      fontSize: 26,
      lineHeight: '32px',
      fontWeight: 700,
      [baseTheme.breakpoints.down('md')]: {
        fontSize: 24,
      },
    },
    webHeading03: {
      fontSize: 22,
      lineHeight: '24px',
      fontWeight: 700,
      [baseTheme.breakpoints.down('md')]: {
        fontSize: 20,
      },
    },
    webHeading04: {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 700,
      [baseTheme.breakpoints.down('md')]: {
        fontSize: 18,
      },
    },
    webHeading05: {
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 700,
      [baseTheme.breakpoints.down('md')]: {
        fontSize: 16,
      },
    },
    webHeading06: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 700,
    },
    webParagraph01: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
    },
    webParagraph02: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    footerHeading05: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: '32px',
    },
  },
}).typography;
