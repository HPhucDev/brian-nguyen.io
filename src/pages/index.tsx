import Fader from 'components/@common/Fader/Fader';
import { Container } from '@mui/material';
import DefaultSection from 'components/@common/DefaultSection/DefaultSection';
import { useIntl } from 'react-intl';
import IntroImage from '/public/images/home_hero-image.png';
// import FeaturedBlogsSection from 'components/@common/FeaturedBlogsSection/FeaturedBlogsSection';
// import { theme } from 'theme';
// import CoderImage from '/public/images/coder.jpeg';
export default function Home() {
  const intl = useIntl();
  return (
    <Fader>
      <Container>
        <DefaultSection
          subTitle="home.intro.sub_title"
          title="home.intro.title"
          description="home.intro.description"
          img={IntroImage}
          imgAlt={intl.formatMessage({ id: 'home.intro.img.alt' })}
          headerSize="large"
          titleMaxWidth="676px"
          isTitleAnimation
          imgCircle
        />
      </Container>
      {/* <Container sx={{ marginTop: theme.spacing(15), marginBottom: theme.spacing(15) }}>
        <FeaturedBlogsSection />
      </Container> */}
    </Fader>
  );
}
