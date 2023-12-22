import { Box, Button, Container, Typography } from '@mui/material';
import CustomImage from 'components/@common/CustomImage/CustomImage';
import { useRouter } from 'next/router';

import COMING_SOON from '../../public/images/coming-soon.jpg';
import { theme } from 'theme';

const NotFound = () => {
  const router = useRouter();

  return (
    <Container>
      <Box
        sx={{ marginTop: theme.spacing(5) }}
        height={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={2}
      >
        <CustomImage src={COMING_SOON} width={'365'} alt={''} />
        <Typography variant="heading03" component="p">
          We are Coming Soon...
        </Typography>
        <Typography variant="heading01" component="p">
          We are Working Our New Website,
        </Typography>
        <Typography variant="heading01" component="p">
          Please Stay With us!
        </Typography>
        <Button variant="outlined" onClick={() => router.push('/')}>
          Redirect to Home...
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
