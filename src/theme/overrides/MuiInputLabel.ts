import { Components, Theme } from '@mui/material';

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      whiteSpace: 'normal',
      color: theme.palette.neutral01[300],
      fontSize: '10px',
      textTransform: 'uppercase',
      paddingBottom: theme.spacing(1),
      fontWeight: 600,
    }),
  },
};
