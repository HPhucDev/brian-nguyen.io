import { Components, Theme } from '@mui/material';

export const MuiAccordionSummary: Components<Theme>['MuiAccordionSummary'] = {
  styleOverrides: {
    root: () => ({
      padding: 0,
    }),
    content: ({ theme }) => ({
      margin: theme.spacing(2, 1.5, 2, 0),
    }),
  },
};
