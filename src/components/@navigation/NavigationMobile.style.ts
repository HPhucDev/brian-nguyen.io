import { AppBar, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

interface Props {
  $isOpen: boolean;
  $height: number;
}

interface AppBarProps {
  $scrollDirection: 'up' | 'down' | 'inherit';
}

const TRANSITION_DURATION = '.3s';

export const MobileAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== '$scrollDirection',
})<AppBarProps>(({ theme, $scrollDirection }) => ({
  transition: `transform ${TRANSITION_DURATION} ease-in-out`,
  transform: `translateY(${['inherit', 'up'].includes($scrollDirection) ? '0' : '-100%'})`,
  backgroundColor: theme.palette.neutral01[700],
  zIndex: 1000,
}));

export const MenuMobile = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== '$isOpen' && prop !== '$scrollDirection' && prop !== '$height',
})<Props>(({ theme, $isOpen, $height }) => ({
  height: `calc(${$height}px - 58px)`,
  width: '100vw',
  position: 'fixed',
  top: 57,
  right: 0,
  backgroundColor: theme.palette.neutral01[700],
  zIndex: 10,
  transition: `transform ${TRANSITION_DURATION} ease-in, opacity 0s ease-in ${TRANSITION_DURATION}`,
  opacity: 0,
  overflow: 'hidden',
  transform: 'translateY(-100%)',
  willChange: 'transform',

  ...($isOpen && {
    transition: `transform ${TRANSITION_DURATION} ease-out, opacity 0s ease-in`,
    maxHeight: 'calc(100vh - 58px)',
    opacity: 1,
    borderRadius: 0,
    transform: 'translateY(0)',
  }),
}));

export const MenuIcon = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const MenuMobileContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3, 2),
  height: '100%',
  width: '100%',
  color: theme.palette.text.primary,
  overflowY: 'scroll',
}));

export const MenuMobileLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));
export const MenuMobileSubLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));
