import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const InfoContent = styled(Box)(({ theme }) => ({
  maxWidth: 855,
  paddingBlock: theme.spacing(15),

  [theme.breakpoints.down('md')]: {
    paddingBlock: theme.spacing(6),
  },
}));
