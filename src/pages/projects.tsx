import { Box, Container, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { theme } from 'theme';
import { styled } from '@mui/material/styles';
import Fader from 'components/@common/Fader/Fader';
import React from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import Link from 'next/link';
import CustomImage from 'components/@common/CustomImage/CustomImage';

import MEDICAL_NEWS from '../../public/images/projects/medical-news.png';
import ADDY from '../../public/images/projects/addy.png';
import ADDY_CRM from '../../public/images/projects/addy-crm.png';
import YOKO_ANDROID from '../../public/images/projects/yoko-android.png';
import YOKO_IOS from '../../public/images/projects/yoko-ios.png';
import BELGA from '../../public/images/projects/belga.png';
import H_P from '../../public/images/projects/h-p.png';

export const ContentSection = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'top',
  gap: theme.spacing(2),
  marginTop: theme.spacing(8),
  gridTemplateColumns: `repeat(2, 1fr)`,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
}));

export const ContentLeftSection = styled(Box)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    justifyContent: 'center',
  },
}));

interface TimeLineCustomItemProps {
  children: React.ReactNode;
}

const TechnicalButton = ({
  technical,
  backgroundColor,
}: {
  technical: string;
  backgroundColor: string;
}) => {
  return (
    <Typography
      variant={'caption01'}
      sx={{
        fontWeight: '600',
        color: theme.palette.neutral01[100],
        backgroundColor: backgroundColor || theme.palette.neutral01[100],
        paddingX: theme.spacing(1),
        paddingY: theme.spacing(0.5),
        borderRadius: theme.spacing(1),
      }}
    >
      {technical}
    </Typography>
  );
};

const TimeLineCustomItem = ({ children }: TimeLineCustomItemProps) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{children}</TimelineContent>
    </TimelineItem>
  );
};

export default function Projects() {
  return (
    <>
      <Container sx={{ marginTop: theme.spacing(10) }}>
        <Stack sx={{ marginX: theme.spacing(5) }}>
          <Typography variant={'heading03'}>
            <FormattedMessage id={'projects.title'} />
          </Typography>
          <Typography variant={'paragraph01'}>
            <FormattedMessage id={'projects.description_01'} />
          </Typography>
          <Typography variant={'paragraph01'}>
            <FormattedMessage id={'projects.description_02'} />
          </Typography>
        </Stack>
      </Container>
      <Container sx={{ marginTop: theme.spacing(10), display: 'flex', justifyContent: 'left' }}>
        <Timeline position="alternate-reverse">
          {projects.map((project) => (
            <TimeLineCustomItem children={project.content}></TimeLineCustomItem>
          ))}
        </Timeline>
      </Container>
    </>
  );
}

const projects = [
  {
    content: (
      <ContentSection>
        <Link rel="noopener noreferrer" target="_blank" href={'https://h-p-portfolio.vercel.app'}>
          <ContentLeftSection>
            <Typography variant={'heading05'} sx={{ color: theme.palette.neutral01[100] }}>
              h-p-portfolio Website
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'right',
                gap: theme.spacing(1),
              }}
            >
              <TechnicalButton technical="NextJS" backgroundColor={theme.palette.neutral01[600]} />
              <TechnicalButton technical="MUI" backgroundColor={theme.palette.global01[500]} />
              <TechnicalButton technical="Strapi" backgroundColor={theme.palette.global01[600]} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'right',
                gap: theme.spacing(1),
                transition: 'transform .6s',
                '&:hover': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <CustomImage
                src={H_P}
                style={{ maxWidth: '70%', height: '70%' }}
                alt={'Addy CRM Website'}
              />
            </Box>
          </ContentLeftSection>
        </Link>
      </ContentSection>
    ),
  },
  {
    content: (
      <ContentSection>
        <Link rel="noopener noreferrer" target="_blank" href={'https://www-stg.belga.be/home'}>
          <ContentLeftSection>
            <Typography variant={'heading05'} sx={{ color: theme.palette.neutral01[100] }}>
              Belga Staging Website
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                gap: theme.spacing(1),
              }}
            >
              <TechnicalButton technical="NextJS" backgroundColor={theme.palette.neutral01[600]} />
              <TechnicalButton technical="MUI" backgroundColor={theme.palette.global01[500]} />
              <TechnicalButton technical="Strapi" backgroundColor={theme.palette.global01[600]} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                gap: theme.spacing(1),
                transition: 'transform .6s',
                '&:hover': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <CustomImage
                src={BELGA}
                style={{ maxWidth: '70%', height: '70%' }}
                alt={'Addy CRM Website'}
              />
            </Box>
          </ContentLeftSection>
        </Link>
      </ContentSection>
    ),
  },
  {
    content: (
      <ContentSection>
        <ContentLeftSection>
          <Typography variant={'heading05'} sx={{ color: theme.palette.neutral01[100] }}>
            Yoko Spa At Home
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'right',
              gap: theme.spacing(1),
            }}
          >
            <TechnicalButton technical="React Native" backgroundColor={'#eda2fc'} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'right',
              gap: theme.spacing(1),
              transition: 'transform .6s',
              '&:hover': {
                transform: 'scale(1.04)',
              },
            }}
          >
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={'https://apps.apple.com/vn/app/yoko-spa-t%E1%BA%A1i-nh%C3%A0/id6448205819?l'}
            >
              <CustomImage
                src={YOKO_IOS}
                style={{ maxWidth: '70%', height: '100%' }}
                alt={'Yoko Spa At Home - IOS'}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'right',
              gap: theme.spacing(1),
              transition: 'transform .6s',
              '&:hover': {
                transform: 'scale(1.04)',
              },
            }}
          >
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={'https://play.google.com/store/apps/details?id=com.spabookingforuser&pli=1'}
            >
              <CustomImage
                src={YOKO_ANDROID}
                style={{ maxWidth: '70%', height: '100%' }}
                alt={'Yoko Spa At Home - Android'}
              />
            </Link>
          </Box>
        </ContentLeftSection>
      </ContentSection>
    ),
  },
  {
    content: (
      <ContentSection>
        <Link rel="noopener noreferrer" target="_blank" href={'https://ids.addycrm.com/login'}>
          <ContentLeftSection>
            <Typography variant={'heading05'} sx={{ color: theme.palette.neutral01[100] }}>
              Addy CRM Website
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                gap: theme.spacing(1),
              }}
            >
              <TechnicalButton technical="ReactJS" backgroundColor={theme.palette.neutral01[600]} />
              <TechnicalButton technical="SCSS" backgroundColor={theme.palette.error.light} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                gap: theme.spacing(1),
                transition: 'transform .6s',
                '&:hover': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <CustomImage
                src={ADDY_CRM}
                style={{ maxWidth: '70%', height: '70%' }}
                alt={'Addy CRM Website'}
              />
            </Box>
          </ContentLeftSection>
        </Link>
      </ContentSection>
    ),
  },
  {
    content: (
      <ContentSection>
        <Link rel="noopener noreferrer" target="_blank" href={'https://addy.vn'}>
          <ContentLeftSection>
            <Typography variant={'heading05'} sx={{ color: theme.palette.neutral01[100] }}>
              Addy VN Website
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'right',
                gap: theme.spacing(1),
              }}
            >
              <TechnicalButton technical="NextJS" backgroundColor={theme.palette.neutral01[600]} />
              <TechnicalButton technical="SCSS" backgroundColor={theme.palette.error.light} />
              <TechnicalButton technical="Strapi" backgroundColor={theme.palette.global01[600]} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'right',
                gap: theme.spacing(1),
                transition: 'transform .6s',
                '&:hover': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <CustomImage
                src={ADDY}
                style={{ maxWidth: '70%', height: '70%' }}
                alt={'Addy VN Website'}
              />
            </Box>
          </ContentLeftSection>
        </Link>
      </ContentSection>
    ),
  },
  {
    content: (
      <ContentSection>
        <Link rel="noopener noreferrer" target="_blank" href={'https://medical-news.vercel.app'}>
          <ContentLeftSection>
            <Typography variant={'heading05'} sx={{ color: theme.palette.neutral01[100] }}>
              Medical News Website
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                gap: theme.spacing(1),
              }}
            >
              <TechnicalButton technical="NextJS" backgroundColor={theme.palette.neutral01[600]} />
              <TechnicalButton technical="Tailwind" backgroundColor={theme.palette.success.light} />
              <TechnicalButton technical="GraphQL" backgroundColor={theme.palette.warning.light} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                gap: theme.spacing(1),
                transition: 'transform .6s',
                '&:hover': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <CustomImage
                src={MEDICAL_NEWS}
                style={{ maxWidth: '70%', height: '70%' }}
                alt={' Medical News Website'}
              />
            </Box>
          </ContentLeftSection>
        </Link>
      </ContentSection>
    ),
  },
];
