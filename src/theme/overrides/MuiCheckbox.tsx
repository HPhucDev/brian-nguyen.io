import { checkboxClasses, Components, Theme } from '@mui/material';

import { IcoCheckboxChecked, IcoCheckboxUnchecked } from 'components/@icons';

export const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
    color: 'primary',
    icon: <IcoCheckboxUnchecked width="24px" height="24px" />,
    checkedIcon: <IcoCheckboxChecked width="24px" height="24px" />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 2,
      marginLeft: theme.spacing(1),
      color: theme.palette.neutral01[300],
      svg: {
        fill: theme.palette.neutral01[300],
      },
      [`&.${checkboxClasses.checked}`]: {
        color: theme.palette.neutral01[300],
        svg: {
          fill: theme.palette.neutral01[300],
        },
      },
      [`&.${checkboxClasses.disabled}`]: {
        cursor: 'not-allowed',
        '& *': {
          color: theme.palette.neutral01[300],
          fill: theme.palette.neutral01[300],
        },
      },
    }),
  },
};

export const MuiFormControlLabel: Components<Theme>['MuiFormControlLabel'] = {
  styleOverrides: {
    label: ({ theme }) => ({
      ...theme.typography.webParagraph01,
      color: theme.palette.neutral01[300],
      cursor: 'pointer',
    }),
  },
};
