import { Components, Theme } from '@mui/material';

export const MuitTextField: Components<Theme>['MuiTextField'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.spacing(1),
    }),
  },
};
