import * as React from 'react';
import { ContentSocialSection } from './ContentSocialSection.style';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import {
  IcoArrowSub,
  IcoChevronNext,
  IcoChevronNextLast,
  IcoFacebook,
  IcoHashtag,
  IcoLinkedIn,
  IcoMail,
  IcoShare,
  IcoShares,
  IcoTagsSolid,
  IcoTwitter,
  IcoZalo,
} from 'components/@icons';

interface ConnectSocialSectionProps {}

interface SocialType {
  link?: string;
  title?: I18nKey;
  social?: React.ReactElement | undefined;
}

const ConnectSocialSection: React.FunctionComponent<ConnectSocialSectionProps> = (props) => {
  const socials: SocialType[] = [
    {
      link: 'https://twitter.com/HPhucDev',
      title: 'social.twitter',
      social: <IcoTwitter />,
    },
    {
      link: 'https://www.facebook.com/hoangphucdevelopervn',
      title: 'social.facebook',
      social: <IcoFacebook />,
    },
    {
      link: 'https://www.linkedin.com/in/hoang-phuc-developer',
      title: 'social.linkedin',
      social: <IcoLinkedIn />,
    },
    {
      link: 'https://zalo.me/0855055435',
      title: 'social.zalo',
      social: <IcoZalo />,
    },
  ];

  return (
    <ContentSocialSection sx={{ padding: 0, margin: 0 }}>
      {socials.map((socialItem) => (
        <Link target="_blank" href={socialItem.link || '#'} style={{ width: '100%' }}>
          <Button
            size="large"
            variant="outlined"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {socialItem.social}
              <Typography variant="paragraph02">
                <FormattedMessage id={socialItem?.title} />
              </Typography>
            </div>
            <IcoShare width={20} height={20} />
          </Button>
        </Link>
      ))}
    </ContentSocialSection>
  );
};

export default ConnectSocialSection;
