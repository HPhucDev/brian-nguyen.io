import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

import { useLocale } from 'hooks/useLocale';
import { Locale } from 'types/i18n.types';

import LanguageMenu from 'components/@common/LanguageMenu';
import { IcoFacebook, IcoLinkedIn, IcoTwitter, IcoZalo } from 'components/@icons';

import {
  About,
  Address,
  Copyright,
  FooterContainer,
  FooterLinksContainer,
  LogoHPhuc,
  SocialMediaIcons,
} from '.';

const Footer = () => {
  const { locale } = useLocale();

  return (
    <FooterContainer component="footer">
      <Copyright>
        <Link
          style={{
            pointerEvents: 'none',
            cursor: 'default',
          }}
          href=""
        >
          <Typography variant="caption01">
            <FormattedMessage id="footer.copyright" />
          </Typography>
        </Link>
      </Copyright>
      <Box sx={{ display: 'grid', justifyContent: 'center' }}>
        <Link href="/">
          <LogoHPhuc />
        </Link>
        <SocialMediaIcons>
          <Link target="_blank" href="https://twitter.com/HPhucDev">
            <IcoTwitter />
          </Link>
          <Link target="_blank" href="https://www.facebook.com/hoangphucdevelopervn">
            <IcoFacebook />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/hoang-phuc-developer">
            <IcoLinkedIn />
          </Link>
          <Link target="_blank" href="https://zalo.me/0855055435">
            <IcoZalo />
          </Link>
        </SocialMediaIcons>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LanguageMenu />
      </Box>
    </FooterContainer>
  );
};

export default Footer;
