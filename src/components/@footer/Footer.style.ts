import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

import { LogoHPhuc as LogoHPhucWhite } from 'components/@icons';

export const FooterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.neutral01[700],
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {},
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  padding: theme.spacing(3, 24, 3),
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2, 3),
    gap: theme.spacing(5),
    gridTemplateRows: 'repeat(2, auto)',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '100%',
  },

  [theme.breakpoints.between('md', 'lg')]: {
    padding: theme.spacing(6, 4, 15, 4),
  },
}));

FooterContainer.defaultProps = {
  component: 'footer',
};

export const About = styled(FooterSection)(({ theme }) => ({
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1),
  },
}));

export const LogoHPhuc = styled(LogoHPhucWhite)(({ theme }) => ({
  fill: theme.palette.neutral01[700],
  width: '132px',
  height: '32px',
}));

export const SocialMediaIcons = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(1),
  flexDirection: 'row',
  alignItems: 'center',
  color: theme.palette.neutral01[700],
  fill: theme.palette.neutral01[700],

  '& > a svg': {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fill: theme.palette.neutral01[700],
  },
}));

export const Address = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral01[700],
}));

Address.defaultProps = {
  variant: 'caption01',
};

export const FooterLinksContainer = styled(FooterSection)(() => ({}));

export const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.neutral01[700],
  width: 'fit-content',
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.spacing(1),
  fontWeight: 700,
  '&:hover': {
    backgroundColor: theme.palette.global01[100],
  },
}));

export const NewsletterContainer = styled(FooterSection)(({ theme }) => ({
  gridColumn: 'span 2',

  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    gridColumn: 'span 1',
  },
}));

export const NewsletterForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',

  gap: theme.spacing(1),
  marginTop: theme.spacing(2),

  [theme.breakpoints.down(1000)]: {
    flexDirection: 'column',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
  },
}));

export const SubscribeButton = styled(Button)(() => ({
  width: 'fit-content',
}));

export const SubscribeTextFieldContainer = styled(Box)(({ theme }) => ({
  minWidth: 250,
  [theme.breakpoints.down('md')]: {
    minWidth: 'auto',
    maxWidth: 350,
  },
}));

export const Copyright = styled(Box)(({ theme }) => ({
  bottom: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: theme.spacing(3),

  '& > a': {
    color: theme.palette.neutral01[700],
  },

  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 0,
    left: 0,
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
  },

  [theme.breakpoints.between('md', 'lg')]: {
    left: theme.spacing(4),
  },
}));
