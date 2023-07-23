import { Components, Theme } from '@mui/material';

export const MuiAccordionDetails: Components<Theme>['MuiAccordionDetails'] = {
  styleOverrides: {
    root: () => ({
      paddingInline: 0,
    }),
  },
};
