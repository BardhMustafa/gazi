import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { Box } from '@mui/system';
import { Typography, Stack } from '@mui/material';
import { Button } from '../../shared/components/Button';
import { generatePath, useNavigate } from 'react-router';
import { useTranslations } from '../../hooks/useTranslations';

export default function SlideShow() {
  const array = [Slide1, Slide2, Slide3];

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
          <SlideShowContainer i={index + 1} key={index}>
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
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', paddingLeft: '10rem' }}
    >
      <Typography
        variant="h2"
        fontFamily="Poppins"
        fontSize="70px"
        color="#fff"
      >
        GAZI & <br></br> REHAU
      </Typography>
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
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', paddingLeft: '10rem' }}
    >
      <Typography
        variant="h2"
        fontFamily="Poppins"
        fontSize="70px"
        color="#fff"
        mb={2}
      >
        {t(translations.common.quality_products_first_word)}{' '}
        <span style={{ color: '#e91b37', fontWeight: 700 }}>
          {t(translations.common.quality_products_last_word)}
        </span>
      </Typography>
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
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', paddingLeft: '10rem' }}
    >
      <Typography
        variant="h2"
        fontFamily="Poppins"
        fontSize="70px"
        color="#fff"
      >
        GAZI & <br></br> REHAU
      </Typography>
    </Box>
  );
};

const SlideShowContainer = styled.div<{ i: number }>`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-position: center 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${props => `url(/img/background${props.i}.jpeg)`};
`;

const ProductsButton = styled(Button)`
  font-weight: 600;
`;
