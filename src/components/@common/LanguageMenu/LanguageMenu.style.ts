import { Button, buttonClasses, Menu, menuClasses, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
  $variant: 'text' | 'default';
}

export const DropDownButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== '$variant',
})<Props>(({ theme, $variant }) => ({
  justifyContent: 'space-between',
  borderRadius: theme.spacing(0.5),
  minWidth: 172,
  width: 'fit-content',
  backgroundColor: theme.palette.neutral01[300],
  padding: theme.spacing(1),
  [`.${buttonClasses.endIcon}`]: {
    fill: theme.palette.neutral01[700],
    height: 16,
    width: 16,
    svg: {
      height: 16,
      width: 16,
      transformOrigin: 'right center',
      transform: 'scale(1.5)',
    },
  },

  ...($variant === 'text' && {
    fontWeight: 400,
    height: 20,
    backgroundColor: 'transparent',
    minWidth: 'auto',
    color: theme.palette.neutral01[300],
    padding: theme.spacing(0),

    '&:hover': {
      backgroundColor: 'transparent',
    },
    [`.${buttonClasses.endIcon}`]: {
      fill: theme.palette.neutral01[300],
    },
  }),
}));

DropDownButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
};

export const DropDownMenu = styled(Menu)(({ theme }) => ({
  [`& .${menuClasses.paper}`]: {
    borderRadius: theme.spacing(0.5),
  },
}));

export const DropDownItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== '$selected',
})<{ $selected?: boolean }>(({ theme, $selected }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.global01[400],
  },
  ...(!!$selected && {
    color: theme.palette.global01[200],
    fontWeight: 700,
  }),
}));
