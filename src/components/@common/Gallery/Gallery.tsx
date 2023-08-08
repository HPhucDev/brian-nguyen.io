import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, MotionProps } from 'framer-motion';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import cn from 'clsx';
import localFont from '@next/font/local';

import myworld from '../../../../public/images/gallery/ME-THAO.jpeg';
import mypasssion from '../../../../public/images/gallery/mypasssion.jpeg';
import coder from '../../../../public/images/gallery/coder.jpeg';
import codesleep from '../../../../public/images/gallery/code-sleep.jpeg';
import Halo from './Halo';
import { theme } from 'theme';
import useMedia from 'hooks/useMedia';

const ticketingFont = localFont({
  src: '../../../../public/ticketing.woff2',
  display: 'swap',
});

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: 'left' | 'right';
  children?: ReactNode;
} & MotionProps;

const StyledAbsoluteDiv = styled(motion.div)({
  cursor: 'grab',
  '&:hover:before': {
    content: "''",
    display: 'block',
    width: 'calc(100% + 55px)',
    height: '300px',
    position: 'absolute',
    top: '-8px',
    left: '-7px',
  },
});

const StyledImage = styled(Image)(({ theme }) => ({
  inset: 0,
  objectFit: 'cover',
  background: 'gray',
  pointerEvents: 'none',
  borderRadius: theme.spacing(3),
}));

const StyledMotionDiv = styled(motion.div)({
  transformStyle: 'preserve-3d',
  position: 'relative',
  width: '100%',
  height: '100%',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(3),
  willChange: 'transform',
});

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  marginY: theme.spacing(15),
}));

const StyledHaloOverlay = styled('span')({
  position: 'absolute',
  width: '500px',
  height: '500px',
  background: "url('/photopaper.png') repeat",
  rotate: '-20deg',
  backgroundSize: '280px',
  zIndex: 0,
});

const StyledInfoContainer = styled('div')({
  position: 'absolute',
  zIndex: 1,
  padding: '0 6px',
});

const StyledInfoText = styled(Typography)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  textTransform: 'uppercase',
});

function Photo({
  src,
  meta,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  children,
  ...rest
}: PhotoProps) {
  const fileName =
    filename || (typeof src !== 'string' && `${src.src.split('/').at(-1)?.split('.')[0]}.jpg`);

  return (
    <StyledAbsoluteDiv
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: 'spring',
          bounce: 0.2,
          duration: index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: 'grabbing' }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
      whileHover="flipped"
      {...rest}
    >
      <StyledMotionDiv
        transition={{ type: 'spring', duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === 'right' ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backfaceVisibility: 'hidden',
          }}
        >
          <StyledImage src={src} alt={alt} width={width} height={height} priority />
          {children}
        </div>
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: theme.spacing(3),
            backgroundColor: '#FFFAF2',
          }}
        >
          <Halo strength={50}>
            <StyledHaloOverlay />

            <StyledInfoContainer>
              <StyledInfoText
                className={cn(ticketingFont.className)}
                variant="body2"
                color="textSecondary"
              >
                {fileName}
              </StyledInfoText>
              {meta && (
                <StyledInfoText
                  className={cn(ticketingFont.className)}
                  variant="body2"
                  color="textSecondary"
                >
                  {meta}
                </StyledInfoText>
              )}
            </StyledInfoContainer>
          </Halo>
        </div>
      </StyledMotionDiv>
    </StyledAbsoluteDiv>
  );
}

export default function Gallery() {
  const { isSmall, isMedium } = useMedia();
  return (
    <StyledContainer>
      <Photo
        src={myworld}
        meta="2022-10-09"
        alt="Phuc and Thao"
        width={324}
        height={239}
        rotate={-6}
        left={-86}
        index={1}
      />

      <Photo
        src={coder}
        meta="2020-07-04"
        alt="Software Engineer"
        width={230}
        height={250}
        rotate={6.3}
        left={188}
        index={2}
        flipDirection="left"
      />

      {!isMedium && (
        <>
          {' '}
          <Photo
            src={mypasssion}
            meta="2021-05-20"
            alt="My Passion"
            width={280}
            height={235}
            rotate={-5.4}
            left={343}
            index={3}
          />
          <Photo
            src={codesleep}
            meta="2018-10-10"
            alt={'A boy dreams to create value for others via software products'}
            width={220}
            height={260}
            rotate={7.6}
            left={557}
            index={4}
            flipDirection="left"
          />
        </>
      )}
    </StyledContainer>
  );
}
