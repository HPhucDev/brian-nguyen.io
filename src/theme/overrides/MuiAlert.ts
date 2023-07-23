import { Components, Theme } from '@mui/material';

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    message: ({ theme }) => ({
      ...theme.typography.webParagraph01,
      whiteSpace: 'pre-wrap',
      fontWeight: 600,
      width: '100%',
    }),
    icon: {
      display: 'flex',
      alignItems: 'center',
    },
    standardError: ({ theme }) => ({
      backgroundColor: theme.palette.error.light,
      '& .MuiAlert-icon': { color: theme.palette.error.dark },
      '& .MuiAlert-message': { color: theme.palette.error.dark },
    }),
    standardSuccess: ({ theme }) => ({
      backgroundColor: theme.palette.success.light,
      '& .MuiAlert-icon': { color: theme.palette.success.dark },
      '& .MuiAlert-message': { color: theme.palette.success.dark },
    }),
    standardWarning: ({ theme }) => ({
      backgroundColor: theme.palette.warning.light,
      '& .MuiAlert-icon': { color: theme.palette.warning.dark },
      '& .MuiAlert-message': { color: theme.palette.warning.dark },
    }),
    standardInfo: ({ theme }) => ({
      backgroundColor: theme.palette.info.light,
      '& .MuiAlert-icon': { color: theme.palette.info.dark },
      '& .MuiAlert-message': { color: theme.palette.info.dark },
    }),
  },
};
