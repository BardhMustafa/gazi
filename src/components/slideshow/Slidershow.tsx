import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { Button } from '../../shared/components/Button';
import { generatePath, useNavigate } from 'react-router';
import { useTranslations } from '../../hooks/useTranslations';

export default function SlideShow() {
  const array = [Slide1, Slide2, Slide3];

  const slideImageFromCloudinary = (i: number) => {
    if (i === 1) {
      return 'https://res.cloudinary.com/dvnpbobxy/image/upload/v1745062113/facebook_cover_npemiv.png';
    }

    if (i === 2) {
      return 'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956395/background2_dhigry.jpg';
    }

    return 'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974234/image_1_compressed_z6ozta.jpg';
  };

  return (
    <HeroFrame>
      <Carousel
        navButtonsProps={{
          style: {
            display: 'none',
          },
        }}
        cycleNavigation={true}
        animation="slide"
        duration={1000}
        navButtonsAlwaysVisible
        autoPlay={true}
        interval={6500}
        indicatorContainerProps={{
          style: { position: 'absolute', zIndex: 2, bottom: 24 },
        }}
        indicatorIconButtonProps={{
          style: { color: 'rgba(255,255,255,.45)', padding: 5 },
        }}
        activeIndicatorIconButtonProps={{
          style: { color: '#d42539' },
        }}
      >
        {array.map((item, index) => (
          <SlideShowContainer
            image={slideImageFromCloudinary(index + 1)}
            key={index}
          >
            {item()}
          </SlideShowContainer>
        ))}
      </Carousel>
    </HeroFrame>
  );
}

const Slide1 = () => {
  const navigate = useNavigate();
  const { t, translations } = useTranslations();

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      sx={{
        background: 'linear-gradient(90deg, rgba(8,29,50,.88) 0%, rgba(8,29,50,.52) 48%, rgba(8,29,50,.08) 78%)',
        padding: '0 clamp(2.4rem, 7vw, 10rem)',
        '@media (max-width: 768px)': {
          padding: '0 2.4rem',
        },
      }}
    >
      <SliderHeading>
        {t(translations.common.quality_products_first_word)}{' '}
        <span style={{ color: '#e91b37', fontWeight: 700 }}>
          {t(translations.common.quality_products_last_word)}
        </span>
      </SliderHeading>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          '@media (max-width: 768px)': {
            '& > *': {
              display: 'none',
            },
          },
        }}
      >
        <ProductsButton onClick={() => navigate(generatePath('/about-us'))}>
          {t(translations.common.aboutUs)}
        </ProductsButton>
        <ProductsButton onClick={() => navigate(generatePath('/products'))}>
          {t(translations.common.products)}
        </ProductsButton>
      </Stack>
    </Box>
  );
};

const Slide2 = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      sx={{
        background: 'linear-gradient(90deg, rgba(8,29,50,.82), rgba(8,29,50,.18))',
        paddingLeft: 'clamp(2.4rem, 7vw, 10rem)',
        '@media (max-width: 768px)': {
          paddingLeft: '2rem',
        },
      }}
    >
      <SliderHeading color="#fff">
        GAZI & <br></br> REHAU
      </SliderHeading>
    </Box>
  );
};

const Slide3 = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      sx={{
        background: 'linear-gradient(90deg, rgba(8,29,50,.82), rgba(8,29,50,.18))',
        paddingLeft: 'clamp(2.4rem, 7vw, 10rem)',
        '@media (max-width: 768px)': {
          paddingLeft: '2rem',
        },
      }}
    >
      <SliderHeading>
        GAZI & <br></br> REHAU
      </SliderHeading>
    </Box>
  );
};

const SlideShowContainer = styled.div<{ image: string }>`
  width: 100%;
  height: min(72rem, calc(100vh - 10rem));
  min-height: 56rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-position: center 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ image }: { image: string }) => image});

  @media (max-width: 768px) {
    background-position: 82% center;
    height: 58rem;
    min-height: 0;
  }
`;

const HeroFrame = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 2.8rem 2.8rem;
  box-shadow: 0 24px 70px rgba(17, 51, 85, 0.16);
  margin-bottom: clamp(8rem, 10vw, 13rem);
`;

const SliderHeading = styled.h1`
  font-size: 4rem;
  font-weight: 750;
  color: white;
  line-height: 1.02;
  letter-spacing: -0.055em;
  margin-bottom: 2rem;
  max-width: 75rem;

  @media (min-width: 768px) {
    font-size: clamp(6rem, 7vw, 9rem);
  }

  @media (max-width: 768px) {
    font-size: 4.4rem;
  }
`;

const ProductsButton = styled(Button)`
  font-weight: 600;
  &:last-child {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.52);
    box-shadow: none;
    backdrop-filter: blur(10px);
  }

  @media (max-width: 568px) {
    padding: 1rem 2rem;
  }
`;
