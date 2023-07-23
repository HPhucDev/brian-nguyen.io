import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SectionProps {
  $margin: 'top' | 'bottom' | 'both';
}

export const Section = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$margin',
})<SectionProps>(({ theme, $margin }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: ['both', 'top'].includes($margin) ? theme.spacing(15) : 0,
  marginBottom: ['both', 'bottom'].includes($margin) ? theme.spacing(15) : 0,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginTop: ['both', 'top'].includes($margin) ? theme.spacing(6) : 0,
    marginBottom: ['both', 'bottom'].includes($margin) ? theme.spacing(6) : 0,
    gap: theme.spacing(4),
  },
}));

export const SectionLeft = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$fullWidth',
})<{ $fullWidth: boolean }>(({ theme, $fullWidth }) => ({
  width: $fullWidth ? '100%' : '50%',
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const SectionRight = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

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
