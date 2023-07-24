import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material';
import { Fade as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import useScreenHeight from 'hooks/useScreenHeight';
import useScrollDirection from 'hooks/useScrollDirection';

import LanguageMenu from 'components/@common/LanguageMenu';
import { LogoHPhucColored } from 'components/@icons';

import {
  MenuIcon,
  MenuMobile,
  MenuMobileContent,
  MenuMobileLink,
  MenuMobileSubLink,
  MobileAppBar,
} from './NavigationMobile.style';

const NavigationMobile = () => {
  const router = useRouter();
  const scrollDirection = useScrollDirection();
  const screenHeight = useScreenHeight();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (open: boolean | undefined = undefined) => {
    setIsMenuOpen((prev) => open ?? !prev);
  };

  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? 'hidden' : overflow;
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    toggleMenu(false);
  }, [router.pathname, router.locale]);

  return (
    <MobileAppBar
      $scrollDirection={scrollDirection}
      elevation={0}
      position="sticky"
      sx={(theme) => ({
        backgroundColor: theme.palette.neutral01[700],
        borderBottom: `1px solid ${theme.palette.neutral01[600]}`,
      })}
    >
      <Box
        sx={(theme) => ({
          height: { xs: 56, md: 64 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1001,
          backgroundColor: theme.palette.neutral01[700],
          padding: theme.spacing(1, 2),
        })}
      >
        <Link href="/">
          <LogoHPhucColored style={{ width: '132px', height: '32px' }} />
        </Link>

        <MenuIcon aria-expanded={isMenuOpen} aria-label="Open the menu">
          <Hamburger duration={0.2} size={24} toggled={isMenuOpen} toggle={() => toggleMenu()} />
        </MenuIcon>
      </Box>
      <MenuMobile $height={screenHeight} $isOpen={isMenuOpen}>
        <MenuMobileContent>
          <Stack marginY={2} gap={2} direction="column">
            <MenuMobileLink href="/about">
              <Typography variant="heading05">
                <FormattedMessage id="navigation.about" />
              </Typography>
            </MenuMobileLink>
            <MenuMobileLink href="/packages">
              <Typography variant="heading05">
                <FormattedMessage id="navigation.blog" />
              </Typography>
            </MenuMobileLink>
            <MenuMobileLink href="/projects">
              <Typography variant="heading05">
                <FormattedMessage id="navigation.project" />
              </Typography>
            </MenuMobileLink>
            <MenuMobileLink href="/gear">
              <Typography variant="heading05">
                <FormattedMessage id="navigation.gear" />
              </Typography>
            </MenuMobileLink>
          </Stack>
          <MenuMobileLink href="/packages">
            <Typography variant="heading05">
              <FormattedMessage id="navigation.reading_list" />
            </Typography>
          </MenuMobileLink>

          <Stack justifyContent="flex-end" mt={4} gap={2} flexGrow={1} direction="column">
            <MenuMobileLink href="/packages">
              <Button fullWidth size="large">
                <FormattedMessage id="navigation.button.get_in_touch" />
              </Button>
            </MenuMobileLink>
          </Stack>
        </MenuMobileContent>
      </MenuMobile>
    </MobileAppBar>
  );
};

export default NavigationMobile;
