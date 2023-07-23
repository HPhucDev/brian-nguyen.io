import { Components, outlinedInputClasses, Theme } from '@mui/material';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      [`&.${outlinedInputClasses.multiline}`]: {
        minHeight: '100px',
        alignItems: 'flex-start',
        padding: 0,
      },

      [`&.${outlinedInputClasses.root}`]: {
        ...theme.typography.paragraph01,
        height: ownerState.multiline ? undefined : '40px',
        borderRadius: '8px',
        color: theme.palette.neutral01[300],
        backgroundColor: theme.palette.neutral01[700],
      },
      [`& .${outlinedInputClasses.input}`]: {
        padding: '7px 14px',
      },
    }),
  },
};
