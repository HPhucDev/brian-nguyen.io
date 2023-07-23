import { AppBar, Box, Button, Container, Stack, Theme, Typography } from '@mui/material';
import Link from 'next/link';
import posthog from 'posthog-js';
import { useCallback, useMemo, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PostHogEvent } from 'utils/posthog-events';

import useIsTouchDevice from 'hooks/useIsTouchDevice';
import useScrollDirection from 'hooks/useScrollDirection';

import LanguageMenu from 'components/@common/LanguageMenu';
import {
  IcoAnalysis,
  IcoArrow,
  IcoMagazine,
  IcoPressreview,
  LogoHPhucColored,
} from 'components/@icons';

import {
  NavigationButton,
  NavigationLinks,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
} from './Navigation.style';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const { isTouchDevice } = useIsTouchDevice();
  const scrollDirection = useScrollDirection();

  const menuHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = useCallback(() => {
    if (menuHoverTimeout.current) clearTimeout(menuHoverTimeout.current);
    setIsMenuOpen(true);
  }, []);

  const handleMouseLeave = useCallback(
    (force: boolean = false) => {
      if (menuHoverTimeout.current) {
        clearTimeout(menuHoverTimeout.current);
      }

      menuHoverTimeout.current = setTimeout(() => {
        (!isMenuHovered || force) && setIsMenuOpen(false);
      }, 75);
    },
    [isMenuHovered],
  );

  const useCases = {
    consume: 'consume',
    curate: 'curate',
    analyse: 'analyse',
  };

  const IconLookup = {
    [useCases.consume]: <IcoMagazine style={{ width: '32px', height: '32px' }} />,
    [useCases.curate]: <IcoPressreview style={{ width: '32px', height: '32px' }} />,
    [useCases.analyse]: <IcoAnalysis style={{ width: '32px', height: '32px' }} />,
  };

  const navTransform = useMemo(() => {
    if (['inherit', 'up'].includes(scrollDirection)) return '0px';
    if (scrollDirection === 'down') return '-100%';
  }, [scrollDirection]);

  return (
    <>
      <AppBar
        elevation={0}
        position="sticky"
        sx={(theme) => ({
          backgroundColor: theme.palette.neutral01[700],
          borderBottom: `1px solid ${theme.palette.neutral01[600]}`,
          transition: `transform .3s ease-in-out`,
          transform: `translateY(${navTransform})`,
        })}
      >
        <Container
          component="nav"
          sx={{
            position: 'relative',
          }}
        >
          <Box
            sx={{
              height: 32,
              alignItems: 'center',
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <LanguageMenu variant="text" />
          </Box>

          <Box
            sx={{
              height: { xs: 56, md: 64 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link href="/" aria-label="Go home">
              <LogoHPhucColored style={{ width: '132px', height: '32px' }} />
            </Link>
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              display="flex"
              justifyContent="center"
              flex={1}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {/* <NavigationButton
                endIcon={<IcoArrow />}
                variant="text"
                sx={(theme) => ({ color: theme.palette.text.primary, overflow: 'visible' })}
                onPointerDown={toggleMenu}
                onPointerEnter={() => !isTouchDevice && handleMouseEnter()}
                onPointerLeave={() => !isTouchDevice && handleMouseLeave()}
              >
                <Typography variant="webParagraph01" fontWeight={600}>
                  <FormattedMessage id="home.topnav.use_cases" />
                </Typography>
              </NavigationButton> */}
              <Link href="/about">
                <NavigationButton
                  variant="text"
                  sx={(theme: Theme) => ({ color: theme.palette.text.primary })}
                >
                  <Typography variant="webParagraph01" fontWeight={600}>
                    <FormattedMessage id="navigation.about" />
                  </Typography>
                </NavigationButton>
              </Link>
              <Link href="/packages">
                <NavigationButton
                  variant="text"
                  sx={(theme: Theme) => ({ color: theme.palette.text.primary })}
                >
                  <Typography variant="webParagraph01" fontWeight={600}>
                    <FormattedMessage id="navigation.blog" />
                  </Typography>
                </NavigationButton>
              </Link>
              <Link href="/packages">
                <NavigationButton
                  variant="text"
                  sx={(theme: Theme) => ({ color: theme.palette.text.primary })}
                >
                  <Typography variant="webParagraph01" fontWeight={600}>
                    <FormattedMessage id="navigation.project" />
                  </Typography>
                </NavigationButton>
              </Link>
              <Link href="/packages">
                <NavigationButton
                  variant="text"
                  sx={(theme: Theme) => ({ color: theme.palette.text.primary })}
                >
                  <Typography variant="webParagraph01" fontWeight={600}>
                    <FormattedMessage id="navigation.gear" />
                  </Typography>
                </NavigationButton>
              </Link>
              <Link href="/packages">
                <NavigationButton
                  variant="text"
                  sx={(theme: Theme) => ({ color: theme.palette.text.primary })}
                >
                  <Typography variant="webParagraph01" fontWeight={600}>
                    <FormattedMessage id="navigation.reading_list" />
                  </Typography>
                </NavigationButton>
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              display="flex"
              justifyContent="flex-end"
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Link href="/packages">
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => posthog.capture(PostHogEvent.Login_Click)}
                >
                  <FormattedMessage id="navigation.button.get_in_touch" />
                </Button>
              </Link>
            </Stack>
          </Box>
        </Container>
        <NavigationMenu
          onMouseOver={() => {
            menuHoverTimeout.current && clearTimeout(menuHoverTimeout.current);
            setIsMenuHovered(true);
          }}
          onMouseLeave={() => {
            setIsMenuHovered(false);
            handleMouseLeave(true);
          }}
          $isOpen={isMenuOpen}
        >
          <NavigationMenuContent>
            {Object.keys(useCases).map((useCase, index) => (
              <NavigationMenuItem
                onClick={() => setIsMenuOpen(false)}
                href={`/${useCase.toLowerCase()}`}
                key={index}
              >
                <Stack gap={1} direction="row" alignItems="center">
                  {IconLookup[useCase]}
                  <Typography fontWeight={700} variant="heading04">
                    <FormattedMessage id={`common.${useCase}` as I18nKey} />
                  </Typography>
                </Stack>
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.text.secondary,
                  })}
                  variant="paragraph01"
                >
                  <FormattedMessage id={`home.use_cases.${useCase}.description` as I18nKey} />
                </Typography>
              </NavigationMenuItem>
            ))}
          </NavigationMenuContent>
        </NavigationMenu>
      </AppBar>
    </>
  );
};

export default Navigation;
