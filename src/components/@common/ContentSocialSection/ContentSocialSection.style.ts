import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContentSocialSection = styled(Box)(({ theme }) => ({
  display: 'grid',
  flexDirection: 'row',
  gap: theme.spacing(1),
  marginX: theme.spacing(10),
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: `repeat(2, 1fr)`,

  '& > a button  svg': {
    width: 38,
    height: 38,
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' start',
    fill: theme.palette.neutral01[100],
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));
