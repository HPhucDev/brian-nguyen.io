import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral01[200],
  margin: 0,
}));

export const Description = styled(Typography)(({ theme }) => ({
  maxWidth: '466px',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '343px',
  },
}));
