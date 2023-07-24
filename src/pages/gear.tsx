import { Box, Typography, Link, List, ListItem, Container, Stack } from '@mui/material';
import Fader from 'components/@common/Fader/Fader';

import Image, { StaticImageData } from 'next/image';
import { FormattedMessage } from 'react-intl';
import { theme } from 'theme';

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link }: ItemProps) => (
  <ListItem sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
    <Box
      sx={{
        position: 'relative',
        borderRadius: theme.spacing(2),
        overflow: 'hidden',
        backgroundColor: theme.palette.neutral01[700],
        aspectRatio: 1,
        width: { xs: '4rem', md: '6rem' },
        minWidth: { xs: '4rem', md: '6rem' },
        height: { xs: '4rem', md: '6rem' },
        boxShadow: 4,
      }}
    >
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </Box>
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant={'paragraph01'} sx={{ color: 'primary.main', lineClamp: 2 }}>
          {title}
        </Typography>
        <Typography
          variant={'paragraph01'}
          sx={{ color: theme.palette.neutral01[300], lineClamp: 2, fontSize: '14px' }}
        >
          {description}
        </Typography>
      </Box>
      <Box>
        <Link
          variant="body2"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            paddingY: theme.spacing(0.5),
            paddingX: theme.spacing(2),
            borderRadius: theme.spacing(2),
            backgroundColor: theme.palette.neutral01[100],
            textDecoration: 'none',
            '&:hover': {
              backgroundColor: theme.palette.neutral01[200],
            },
          }}
        >
          <Typography
            variant="paragraph02"
            sx={{ textAlign: 'center', color: theme.palette.neutral01[700] }}
          >
            Get
          </Typography>
        </Link>
      </Box>
    </Box>
  </ListItem>
);

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <Fader>
      <Container sx={{ marginY: theme.spacing(10) }}>
        <Stack sx={{ margin: theme.spacing(5) }}>
          <Typography variant={'heading03'} fontWeight="bold" sx={{ animation: 'animate-in' }}>
            <FormattedMessage id={'gear.title'} />
          </Typography>
          <Typography
            variant={'paragraph01'}
            sx={{ animation: 'animate-in', marginTop: theme.spacing(1) }}
          >
            <FormattedMessage id={'gear.description_01'} />
          </Typography>

          <Typography
            variant={'paragraph01'}
            sx={{ animation: 'animate-in', maxWidth: 'lg', marginTop: theme.spacing(3) }}
          >
            {' '}
            <FormattedMessage id={'gear.description_02'} />
          </Typography>
        </Stack>
        <Fader>
          {categories.map((category, index) => (
            <Stack sx={{ margin: theme.spacing(5) }}>
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  animation: 'animate-in',
                }}
              >
                <Typography variant={'paragraph01'}>{category}</Typography>
                <List
                  sx={{ display: 'grid', gridTemplateColumns: { md: 'repeat(2, 1fr)' }, gap: 2 }}
                >
                  {gear.map((item, index) => {
                    if (item.category === category) {
                      return (
                        <Item
                          key={index}
                          title={item.name}
                          description={item.description}
                          image={item.image}
                          link={item.link}
                        />
                      );
                    } else {
                      return null;
                    }
                  })}
                </List>
              </Box>
            </Stack>
          ))}
        </Fader>
      </Container>
    </Fader>
  );
}

const gear = [
  {
    name: 'Visual Studio Code',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8af8066bd2624809d2593da219317084_gyPFnWnIRt.png',
    description: 'Spending,free and built on open source.',
    link: 'https://code.visualstudio.com/download',
  },
  {
    name: 'Xcode',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/1ab45324fc7ad3f95f43fd85cdc74f87_fTW17LN0aO.png',
    description: 'Develop, test, and distribute apps for all Apple platforms.',
    link: 'https://developer.apple.com/xcode',
  },
  {
    name: 'Android Studio',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/fafea9e92ead2a2cd4108d6e3638dae4_XhcZ8oJqw9.png',
    description: 'The official IDE for Android app development.',
    link: 'https://developer.android.com/studio',
  },
  {
    name: 'Docker',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/af09b8a933d2b6e90a47a5ced57f3a11_3TESbRQeCl.png',
    description: 'Develop faster. Run anywhere..',
    link: 'https://www.docker.com',
  },
  {
    name: 'Termius',
    category: 'Software',
    image: 'https://w7.pngwing.com/pngs/403/426/png-transparent-termius-alt-macos-bigsur-icon.png',
    description:
      'Connect with one click from any device. No re-entering IP addresses, ports, and passwords.',
    link: 'https://termius.com/',
  },
  {
    name: 'Warp',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/e7c58a90c7b3597e5c073a7fe38960ea_H4GtgRoSpb.png',
    description:
      'A modern, Rust-based terminal with AI built in so you and your team can build great software, faster..',
    link: 'https://www.warp.dev/',
  },
  {
    name: 'Sourcetree',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/98895aa01bd485dc8dc21a67f10e043b_jMjorG5dwE.png',
    description: 'Simplicity and power in a beautiful Git GUI.',
    link: 'https://www.sourcetreeapp.com/',
  },
  {
    name: 'Postman',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/347f35deb17a915cd00871544433ac58_oN1ibCQFxX.png',
    description: 'An API platform for building and using APIs.',
    link: 'https://www.postman.com/downloads/',
  },
  {
    name: 'Navicat Premium',
    category: 'Software',
    image: 'https://navicat.com/images/02.Product_00_AllProducts_Premium16.svg',
    description: 'Simplicity and power in a beautiful Git GUI.',
    link: 'https://navicat.com/en/products/navicat-premium',
  },
  {
    name: 'DBgin',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9a409d4c177035895f780327f73b4048_lQOmXcOeFo.png',
    description: 'Simplicity and power way to get started with PostgreSQL, MySQL, Redis & more',
    link: 'https://dbngin.com/',
  },
  {
    name: 'Notion',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/14a38b18f6370542d25bdabf1c3e49f1_l7MAtIRYp2.png',
    description:
      'Write, plan & get organized in one place. Customize Notion to work the way you do',
    link: 'https://www.notion.so/',
  },
  {
    name: 'Slack',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/4168b9498c7bb5e8b433d00ae20373c7_vY6NNWpMTo.png',
    description: 'Connect the right people, find anything you need and automate the rest. ',
    link: 'https://slack.com/',
  },
  {
    name: 'Discord',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/6c00b7106d6fe85883ef3793cf82f77f_GXFvqjS8ag.png',
    description: 'Where just you and a handful of friends can spend time together.',
    link: 'https://discord.com/',
  },
  {
    name: 'Final Cut Pro',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/af566b0821861d9080b323ca71fc1db7_uWiyCZDSpP.png',
    description: 'Video editing with powerful media organisation and incredible performance.',
    link: 'htthttps://apps.apple.com/vn/app/final-cut-pro/id424389933?mt=12ps://dbngin.com/',
  },
  {
    name: 'Figma',
    category: 'Software',
    image:
      'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8346a41fce8956f9216e1757fcc9c17a_f3VBVRFUez.png',
    description: 'The leading collaborative design tool for building meaningful products',
    link: 'https://www.figma.com/downloads/',
  },

  {
    name: 'The North Face Kaban Backpack',
    category: 'Other',
    image:
      'https://images.thenorthface.com/is/image/TheNorthFaceEU/52SZ_KX7_hero?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0',
    description: 'Compact Laptop Backpack - A Minimalist & Travel-friendly',
    link: 'https://www.thenorthface.co.uk/shop/en-gb/tnf-gb/kaban-2-0-backpack-52sz',
  },
  {
    name: 'Logitech Signature M650 Wireless Mouse',
    category: 'Other',
    image: 'https://m.media-amazon.com/images/I/71xUV7SyTzL._AC_SX679_.jpg',
    description: 'Scroll smarter,silent Clicks, customizable side buttons, bluetooth',
    link: 'https://www.amazon.com/Logitech-Signature-Wireless-Mouse-Graphite/dp/B09NQNWT76/ref=sr_1_1?crid=1W80ZZLXKGE6A&keywords=logitech+m650&qid=1690215125&sprefix=LOGITECH+M6%2Caps%2C325&sr=8-1',
  },

  {
    name: 'MacBook Pro 16-inch M1 Max',
    category: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_SX679_.jpg',
    description: 'Daily driver. Sleek, great display, and performant.',
    link: 'https://www.amazon.com/Apple-MacBook-16-inch-10%E2%80%91core-32%E2%80%91core/dp/B09JQP37K3?th=1',
  },
  {
    name: 'Apple AirPods Pro',
    category: 'Apple',
    image:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1660803972361',
    description: 'Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency.',
    link: 'https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4/ref=sr_1_3?crid=2ABWJHZ9B1ROF&keywords=airpods+pro&qid=1690213902&sprefix=airpods+pr%2Caps%2C375&sr=8-3',
  },

  {
    name: 'Apple IPhone XS',
    category: 'Apple',
    image:
      'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-line-up-09122018_inline.jpg.large_2x.jpg',
    description: ' Secure Face ID, especially the iOS - macOS ecosystem :)).',
    link: 'https://www.amazon.com/dp/B07KKL5KGG/ref=twister_B08ZM81H1H?_encoding=UTF8&th=1',
  },
];
