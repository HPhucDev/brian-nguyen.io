import { Box, Container, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import Gallery from 'components/@common/Gallery/Gallery';
import { theme } from 'theme';
import { styled } from '@mui/material/styles';
import ConnectSocialSection from 'components/@common/ContentSocialSection/ContentSocialSection';
import Fader from 'components/@common/Fader/Fader';
import CustomImage from 'components/@common/CustomImage/CustomImage';

import HCMUTE from '../../public/images/hcmute.webp';
import IDS_SOFTWARE from '../../public/images/ids.png';
import Link from 'next/link';

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
  width: '30%',
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    justifyContent: 'center',
  },
}));
export const ContentRightSection = styled(Box)(({ theme }) => ({
  width: '70%',
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export default function Home() {
  return (
    <Fader>
      <Container sx={{ marginTop: theme.spacing(10) }}>
        <Stack sx={{ marginX: theme.spacing(5) }}>
          <Typography variant={'heading03'}>
            <FormattedMessage id={'about.hero.title'} />
          </Typography>
          <Typography>
            <FormattedMessage id={'about.hero.description'} />
          </Typography>
        </Stack>
      </Container>
      <Container sx={{ marginY: theme.spacing(15) }}>
        <Gallery />
      </Container>
      <Container sx={{ marginY: theme.spacing(15) }}>
        <ContentSection>
          <ContentLeftSection>
            <Typography variant={'paragraph01'} sx={{ color: theme.palette.neutral01[300] }}>
              <FormattedMessage id={'about.about.title'} />
            </Typography>
          </ContentLeftSection>
          <ContentRightSection>
            <Typography variant={'paragraph01'} sx={{ marginBottom: theme.spacing(0.5) }}>
              <FormattedMessage id={'about.about.description_01'} />
            </Typography>
            <Typography variant={'paragraph01'}>
              <FormattedMessage id={'about.about.description_02'} />
            </Typography>
          </ContentRightSection>
        </ContentSection>
        <ContentSection>
          <ContentLeftSection>
            <Typography variant={'paragraph01'} sx={{ color: theme.palette.neutral01[300] }}>
              <FormattedMessage id={'about.connect.title'} />
            </Typography>
          </ContentLeftSection>
          <ContentRightSection>
            <Typography variant={'paragraph01'} sx={{ marginBottom: theme.spacing(0.5) }}>
              <FormattedMessage id={'about.connect.description_01'} />
            </Typography>
            <ConnectSocialSection />
          </ContentRightSection>
        </ContentSection>
        <ContentSection>
          <ContentLeftSection>
            <Typography variant={'paragraph01'} sx={{ color: theme.palette.neutral01[300] }}>
              <FormattedMessage id={'about.experience.title'} />
            </Typography>
          </ContentLeftSection>
          <ContentRightSection>
            <Typography variant={'paragraph01'} sx={{ marginBottom: theme.spacing(0.5) }}>
              <FormattedMessage id={'about.experience.description_01'} />
            </Typography>
            <Typography variant={'paragraph01'} sx={{ marginBottom: theme.spacing(0.5) }}>
              <FormattedMessage id={'about.experience.description_02'} />
            </Typography>
            <Link
              href={'https://www.idsolutions.com.vn'}
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: theme.palette.neutral01[100] }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: theme.spacing(2),
                  }}
                >
                  <CustomImage src={IDS_SOFTWARE} width={'58'} alt={''} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant={'paragraph01'}
                      sx={{ fontWeight: 'bold', marginBottom: theme.spacing(0.5) }}
                    >
                      Software engineer
                    </Typography>
                    <Typography variant={'paragraph02'} sx={{ marginBottom: theme.spacing(0.5) }}>
                      IDS Software
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant={'paragraph01'}
                    sx={{ fontWeight: 'bold', marginBottom: theme.spacing(0.5) }}
                  >
                    May 2022 -
                  </Typography>
                </Box>
              </Box>
            </Link>

            <Link
              href={'https://hcmute.edu.vn'}
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: theme.palette.neutral01[100] }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: theme.spacing(2),
                  }}
                >
                  <CustomImage src={HCMUTE} width={'55'} alt={''} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant={'paragraph01'}
                      sx={{ fontWeight: 'bold', marginBottom: theme.spacing(0.5) }}
                    >
                      Software engineering student
                    </Typography>
                    <Typography variant={'paragraph02'} sx={{ marginBottom: theme.spacing(0.5) }}>
                      HCMC University of Technology and Education
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    variant={'paragraph01'}
                    sx={{ fontWeight: 'bold', marginBottom: theme.spacing(0.5) }}
                  >
                    Aug 2019 - Aug 2023
                  </Typography>
                </Box>
              </Box>
            </Link>
          </ContentRightSection>
        </ContentSection>
      </Container>
    </Fader>
  );
}
