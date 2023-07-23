import { buttonClasses, Components, Theme } from '@mui/material';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    variant: 'contained',
    color: 'primary',
    disableElevation: true,
  },
  styleOverrides: {
    sizeLarge: {
      height: '48px',
    },
    root: ({ theme }) => ({
      height: '40px',
      minWidth: 'auto',
      [`&.${buttonClasses.disabled}`]: {
        pointerEvents: 'auto',
        cursor: 'not-allowed',
        color: theme.palette.text.disabled,
      },
      letterSpacing: '0',
      '&:hover': {
        backgroundColor: theme.palette.global01[800],
      },
    }),
    text: ({ theme }) => ({
      ...theme.typography.paragraph02,
      borderRadius: 0,
      textTransform: 'inherit',
      fontStyle: 'inherit',
      padding: 0,
      margin: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
      [`& .${buttonClasses.startIcon}`]: {
        marginRight: 0,
      },
    }),
    outlined: ({ theme }) => ({
      ...theme.typography.paragraph02,
      fontWeight: 'bold',
      padding: '12px 16px',
      textTransform: 'none',
      borderRadius: '8px',
    }),
    contained: ({ theme }) => ({
      ...theme.typography.paragraph02,
      fontWeight: '700',
      padding: '12px 16px',
      textTransform: 'none',
      borderRadius: '8px',
    }),

    textError: ({ theme }) => ({
      '& svg': {
        fill: theme.palette.error.main,
      },
    }),
    textPrimary: ({ theme }) => ({
      borderRadius: 0,
      textTransform: 'inherit',
      fontStyle: 'inherit',
      padding: 0,
      margin: 0,
      color: theme.palette.neutral01[300],
      '&:hover': {
        color: theme.palette.neutral01[400],
        backgroundColor: 'transparent',
        '& svg': {
          fill: theme.palette.neutral01[400],
        },
      },
      '& span': {
        alignItems: 'center',
      },
      '& span > span': {
        marginRight: '0',
      },
      [`&.${buttonClasses.disabled}`]: {
        '& svg': {
          fill: `${theme.palette.neutral01[400]} !important`,
        },
      },
    }),
    textSecondary: ({ theme }) => ({
      borderRadius: 0,
      textTransform: 'inherit',
      fontStyle: 'inherit',
      padding: 0,
      margin: 0,
      color: theme.palette.text.secondary,
      '&:hover': {
        color: theme.palette.global01[400],
        backgroundColor: 'transparent',
        '& svg': {
          fill: theme.palette.global01[400],
        },
      },
      '& svg': {
        fill: theme.palette.text.secondary,
      },
      '& span': {
        alignItems: 'center',
      },
      '& span > span': {
        marginRight: '0',
      },
      [`&.${buttonClasses.disabled}`]: {
        '& svg': {
          fill: `${theme.palette.neutral01[400]} !important`,
        },
      },
    }),
    /* outlinedPrimary: ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
      '& svg': {
        fill: theme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.background.default,
      },
      [`&.${buttonClasses.disabled}`]: {
        '&:hover': {
          backgroundColor: theme.palette.background.default,
        },
        '& svg': {
          fill: theme.palette.text.disabled,
        },
      },
    }), */
    outlinedSecondary: ({ theme }) => ({
      border: `1px solid ${theme.palette.neutral01[700]}`,
      color: theme.palette.neutral01[700],
    }),
    containedSecondary: ({ theme }) => ({
      backgroundColor: theme.palette.neutral01[700],
      color: theme.palette.global01[400],
      fontWeight: '700',
    }),
  },
};
