import { Button, buttonClasses, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const NavigationButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: theme.palette.global01[800],
    color: theme.palette.global01[100],
  },

  [`& .${buttonClasses.endIcon}`]: {
    fill: theme.palette.global01[400],
  },
  overflow: 'visible',
}));

interface NavigationProps {
  $isOpen: boolean;
}

export const NavigationMenu = styled(Container, {
  shouldForwardProp: (prop) => prop !== '$isOpen',
})<NavigationProps>(({ theme, $isOpen = false }) => ({
  paddingInline: theme.spacing(3),
  minWidth: '100vw',
  maxHeight: 0,
  opacity: 0.5,
  zIndex: 1000,
  transition: 'max-height 0.2s ease-in-out, opacity 0.2s ease-in-out',
  position: 'absolute',
  top: 97,
  left: 0,
  right: 0,
  margin: '0 auto !important',
  backgroundColor: theme.palette.neutral01[700],
  pointerEvents: 'none',
  overflow: 'hidden',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
  ...($isOpen && {
    pointerEvents: 'auto',
    maxHeight: 180,
    opacity: 1,
    color: theme.palette.text.primary,
    fill: theme.palette.text.primary,
  }),
}));

export const NavigationMenuContent = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(5),
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
}));

export const NavigationMenuItem = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.text.primary,
  fill: theme.palette.text.primary,

  '&:hover': {
    [`& > *`]: {
      fill: theme.palette.global01[400],
      color: theme.palette.global01[400],
    },
  },
}));

export const NavigationLinks = styled(Link)(({ theme }) => ({
  color: theme.palette.neutral01[300],
  '&:hover': {
    color: theme.palette.global01[400],
  },
  '&:active': {
    color: theme.palette.global01[400],
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  [`${theme.breakpoints.up('md')}`]: {
    display: 'none',
  },
}));
