import { Box, Button, Container, Typography, ListItem, List, Link, Stack } from '@mui/material';
import CustomImage from 'components/@common/CustomImage/CustomImage';
import { useRouter } from 'next/router';

import COMING_SOON from '../../public/images/coming-soon.jpg';
import { theme } from 'theme';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';

interface BlogItemProps {
  data: any;
}

const BlogItem = ({ data }: BlogItemProps) => (
  <Link
    href={data?.link}
    target="_blank"
    rel="noreferrer"
    sx={{
      textDecoration: 'none',
      ':hover': {
        transform: 'translateY(-5px)',
      },
    }}
  >
    <ListItem sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <Box
        sx={{
          position: 'relative',
          borderRadius: theme.spacing(2),
          overflow: 'hidden',
          backgroundColor: theme.palette.neutral01[700],
          aspectRatio: 1,
          width: { xs: '6rem', md: '10rem' },
          minWidth: { xs: '6rem', md: '10rem' },
          height: { xs: '6rem', md: '10rem' },
          boxShadow: 4,
        }}
      >
        <Image
          src={data?.cover || 'https://flowbite.com/docs/images/blog/image-1.jpg'}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            variant={'paragraph01'}
            sx={{
              color: theme.palette.neutral01[100],
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {data?.title}
          </Typography>
          <Typography
            variant={'paragraph02'}
            sx={{
              color: theme.palette.neutral01[300],
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: { lg: '12rem', md: '9rem', sm: '7rem', xs: '7rem' },
              whiteSpace: 'nowrap',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {data?.excerpt}
          </Typography>
        </Box>
      </Box>
    </ListItem>{' '}
  </Link>
);

const fetchReadingList = (page = 0, search = 'type:article') =>
  fetch(`https://api.raindrop.io/rest/v1/raindrops/0?sort=-created&perpage=50&page=${page}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_KEY}`,
    },
  }).then((res) => res.json());

const ReadingListPage = () => {
  const router = useRouter();

  const { data, refetch } = useInfiniteQuery(
    ['READING_LIST'],
    async () => {
      return await fetchReadingList(0, 'type:article');
    },
    {
      getNextPageParam: (_lastPage, pages) => {
        return pages.length;
      },
    },
  );

  const readingList = useMemo(() => {
    return (data?.pages || []).reduce((prev, curPage) => {
      return [...prev, ...curPage.items];
    }, []);
  }, [data]);

  console.log('🚀 ~ file: packages.tsx:27 ~ ReadingListPage ~ readingList:', readingList);

  return (
    <Container>
      <Stack sx={{ margin: theme.spacing(5) }}>
        <List sx={{ display: 'grid', gridTemplateColumns: { md: 'repeat(2, 1fr)' }, gap: 2 }}>
          {readingList &&
            readingList.map((readingItem: any, index: number) => {
              return <BlogItem key={index} data={readingItem} />;
            })}
        </List>
      </Stack>
    </Container>
  );
};

export default ReadingListPage;
