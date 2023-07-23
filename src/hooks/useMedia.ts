import { useMediaQuery, useTheme } from '@mui/material';

const useMedia = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return { isLarge, isMedium, isSmall };
};

export default useMedia;
