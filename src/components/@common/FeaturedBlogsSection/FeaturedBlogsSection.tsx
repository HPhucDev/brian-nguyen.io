import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { SectionTitle } from './FeaturedBlogsSection.style';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import useMedia from 'hooks/useMedia';
import { IcoChevronNext } from 'components/@icons';
import { theme } from 'theme';

const blogPosts = [
  {
    title: 'Title 1',
    description: 'Description for blog post 1',
    author: 'Author 1',
    imageUrl:
      'https://spacelift.io/_next/image?url=https%3A%2F%2Fspaceliftio.wpcomstaging.com%2Fwp-content%2Fuploads%2F2023%2F06%2F220.-docker-cheat-sheet.png&w=3840&q=100',
    avatarUrl: 'https://via.placeholder.com/150',
    date: '14 days ago',
  },
  {
    title: 'Title 1',
    description: 'Description for blog post 1',
    author: 'Author 1',
    imageUrl:
      'https://spacelift.io/_next/image?url=https%3A%2F%2Fspaceliftio.wpcomstaging.com%2Fwp-content%2Fuploads%2F2023%2F06%2F220.-docker-cheat-sheet.png&w=3840&q=100',
    avatarUrl: 'https://via.placeholder.com/150',
    date: '14 days ago',
  },
  {
    title: 'Title 1',
    description: 'Description for blog post 1',
    author: 'Author 1',
    imageUrl:
      'https://spacelift.io/_next/image?url=https%3A%2F%2Fspaceliftio.wpcomstaging.com%2Fwp-content%2Fuploads%2F2023%2F06%2F220.-docker-cheat-sheet.png&w=3840&q=100',
    avatarUrl: 'https://via.placeholder.com/150',
    date: '14 days ago',
  },
];

export default function FeaturedBlogsSection() {
  const { isSmall, isMedium } = useMedia();
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <SectionTitle gutterBottom variant={'heading05'}>
          <FormattedMessage id={'featured_blogs_section.title'} />
        </SectionTitle>
        <Link href={'/blogs'}>
          <Button fullWidth={isSmall} size="large">
            <FormattedMessage id={'featured_blogs_section.button_label'} />
            <IcoChevronNext fontSize={18} fill={theme.palette.neutral01[700]} />
          </Button>
        </Link>
      </Stack>
    </>
  );
}
