import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import useMedia from 'hooks/useMedia';

import { IcoCheckBold } from 'components/@icons';

import CustomImage from '../CustomImage';
import { Description, Section, SectionLeft, SectionRight, SectionTitle } from '.';
import { TypeAnimation } from 'react-type-animation';
import { theme } from 'theme';

interface Props {
  icon?: React.ReactElement;
  tagline?: I18nKey;
  title: I18nKey;
  subTitle: I18nKey;
  description?: I18nKey;
  checks?: I18nKey[];
  primaryCta?: { label: I18nKey; url: React.ComponentProps<typeof Link>['href'] };
  secondaryCta?: { label: I18nKey; url: React.ComponentProps<typeof Link>['href'] };
  img?: StaticImageData;
  imgAlt?: string;
  imgCircle?: boolean;
  margin?: 'top' | 'bottom' | 'both';
  headerSize?: 'small' | 'large';
  titleMaxWidth?: string;
  isHeroSection?: boolean;
  inverted?: boolean;
  invertedMobile?: boolean;
  isTitleAnimation?: boolean;
}

const DefaultSection = ({
  icon,
  tagline,
  title,
  subTitle,
  description,
  checks,
  primaryCta,
  secondaryCta,
  img,
  imgAlt,
  imgCircle,
  margin = 'both',
  headerSize = 'small',
  titleMaxWidth = 'none',
  isHeroSection = false,
  inverted = false,
  invertedMobile = false,
  isTitleAnimation = false,
}: Props) => {
  const { isSmall, isMedium } = useMedia();

  const IcoCheckBoldGreen = styled(IcoCheckBold)(({ theme }) => ({
    color: theme.palette.success.main,
    minWidth: '24px',
    minHeight: '24px',
  }));

  return (
    <Section component="section" $margin={margin}>
      <SectionLeft
        {...(!isMedium
          ? {
              order: inverted ? 1 : 0,
            }
          : {
              order: invertedMobile ? 1 : 0,
            })}
        $fullWidth={!img}
      >
        <>
          {tagline && (
            <Stack
              direction="row"
              gap={1}
              sx={(theme) => ({
                color: theme.palette.neutral01[400],
                fill: theme.palette.neutral01[400],
              })}
            >
              {icon && React.cloneElement(icon, { style: { width: '32px', height: '32px' } })}
              <Typography variant="heading04">
                <FormattedMessage id={tagline} />
              </Typography>
            </Stack>
          )}
          {subTitle && (
            <Description variant="heading04">
              <FormattedMessage id={subTitle} />
            </Description>
          )}
          {isTitleAnimation ? (
            <SectionTitle
              gutterBottom
              variant={tagline || headerSize === 'large' ? 'heading01' : 'heading02'}
              {...(isHeroSection && { component: 'h1' })}
              maxWidth={titleMaxWidth}
            >
              <FormattedMessage id={title} />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Hoang Phuc',
                  4000, //
                  'Software Engineer',
                  4000,
                ]}
                wrapper="span"
                speed={7}
                style={{ marginLeft: theme.spacing(0.3) }}
                repeat={Infinity}
              />
            </SectionTitle>
          ) : (
            <SectionTitle
              gutterBottom
              variant={tagline || headerSize === 'large' ? 'heading01' : 'heading02'}
              {...(isHeroSection && { component: 'h1' })}
              maxWidth={titleMaxWidth}
            >
              <FormattedMessage id={title} />
            </SectionTitle>
          )}

          {description && (
            <Description variant="paragraph01">
              <FormattedMessage id={description} />
            </Description>
          )}
          {checks && (
            <Stack gap={1}>
              {checks.map((check, index) => (
                <Stack direction="row" gap={1} key={index}>
                  <IcoCheckBoldGreen />
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.text.secondary,
                    })}
                    variant="paragraph02"
                  >
                    <FormattedMessage id={check} />
                  </Typography>
                </Stack>
              ))}
            </Stack>
          )}
          {(primaryCta || secondaryCta) && (
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {primaryCta && (
                <Link href={primaryCta.url}>
                  <Button fullWidth={secondaryCta ? false : isSmall} size="large">
                    <FormattedMessage id={primaryCta.label} />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.url}>
                  <Button size="large" variant="outlined">
                    <FormattedMessage id={secondaryCta.label} />
                  </Button>
                </Link>
              )}
            </Stack>
          )}
        </>
      </SectionLeft>
      {img && (
        <SectionRight
          {...(!isMedium
            ? {
                order: inverted ? 0 : 1,
              }
            : {
                order: invertedMobile ? 0 : 1,
              })}
          sx={{
            justifyContent: !inverted ? 'flex-end' : 'flex-start',
            ...(isMedium && { justifyContent: 'center' }),
            ...(isSmall && { justifyContent: 'center' }),
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: isHeroSection ? '564px' : '465px',
            }}
          >
            <CustomImage
              src={img}
              width={isHeroSection ? '364' : '265'}
              alt={imgAlt || ''}
              isCircle={imgCircle}
            />
          </Box>
        </SectionRight>
      )}
    </Section>
  );
};

export default DefaultSection;
