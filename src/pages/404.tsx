import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, [router]);

  return (
    <Container>
      <Box
        height={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={2}
      >
        <Typography variant="heading01" component="p">
          404 Not Found :(
        </Typography>
        <Typography variant="heading04" component="p">
          Redirecting to Home...
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
