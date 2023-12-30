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
      return 'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956394/background1_zvpsvk.jpg';
    }

    if (i === 2) {
      return 'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956395/background2_dhigry.jpg';
    }

    return 'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974234/image_1_compressed_z6ozta.jpg';
  };

  return (
    <Box mb={3}>
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
    </Box>
  );
}
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
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingLeft: '10rem',
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
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingLeft: '10rem',
        '@media (max-width: 768px)': {
          paddingLeft: '2rem',
        },
      }}
    >
      <SliderHeading>
        {t(translations.common.quality_products_first_word)}{' '}
        <span style={{ color: '#e91b37', fontWeight: 700 }}>
          {t(translations.common.quality_products_last_word)}
        </span>
      </SliderHeading>
      <Stack direction="row" spacing={3}>
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
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingLeft: '10rem',
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
  height: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-position: center 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ image }: { image: string }) => image});
`;

const ProductsButton = styled(Button)`
  font-weight: 600;

  @media (max-width: 568px) {
    padding: 1rem 2rem;
  }
`;

const SliderHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 6.5rem;
  }
`;
