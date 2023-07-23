import { Box } from '@mui/material';
import { ReactNode } from 'react';

import useMedia from 'hooks/useMedia';
import NavigationMobile from 'components/@navigation/NavigationMobile';
import { Navigation } from 'components/@navigation';
import Footer from 'components/@footer/Footer';

// import Footer from 'components/@footer';
// import { Navigation } from 'components/@navigation';
// import NavigationMobile from 'components/@navigation/NavigationMobile';

interface Props {
  children: ReactNode;
}

const PageContainer = ({ children }: Props) => {
  const { isMedium } = useMedia();
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box
        component="main"
        flex="1 auto"
        bgcolor={'common.white'}
        display="flex"
        flexDirection="column"
      >
        {isMedium ? <NavigationMobile /> : <Navigation />}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default PageContainer;
