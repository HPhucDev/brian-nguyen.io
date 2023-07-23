import { Components, Theme } from '@mui/material';

export const MuiStepper: Components<Theme>['MuiStepper'] = {
  styleOverrides: {
    root: {
      marginLeft: '-12px',
    },
  },
};

export const MuiStepLabel: Components<Theme>['MuiStepLabel'] = {
  styleOverrides: {
    label: ({ theme }) => ({
      ...theme.typography.webParagraph01,
      '&.Mui-active': {
        fontWeight: 700,
      },
    }),
  },
};

export const MuiStepIcon: Components<Theme>['MuiStepIcon'] = {
  styleOverrides: {
    root: {
      height: '24px',
    },
    text: ({ theme }) => ({
      ...theme.typography.paragraph02,
    }),
  },
};
