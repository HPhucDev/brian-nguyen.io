import { Components, menuItemClasses, Theme } from '@mui/material';

export const MuiSelect: Components<Theme>['MuiSelect'] = {
  styleOverrides: {
    select: {
      padding: '6px 14px',
    },
  },
};

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  defaultProps: {
    disableTouchRipple: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      ...theme.typography.paragraph01,
      color: theme.palette.text.secondary,
      [`&.${menuItemClasses.selected}, &.${menuItemClasses.selected}:hover`]: {
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: 'transparent',
        },
        backgroundColor: 'transparent',
        fontWeight: 700,
        color: theme.palette.primary.dark,
      },
      [` &.${menuItemClasses.selected}:hover svg`]: {
        fill: theme.palette.primary.dark,
      },
      [`&:hover, &.${menuItemClasses.focusVisible}`]: {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
      },
      '&:hover svg': {
        fill: theme.palette.primary.main,
      },
      '&:empty': {
        display: 'none',
      },
    }),
  },
};
