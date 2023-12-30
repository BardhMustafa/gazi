import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { Box } from '@mui/system';
import { Typography, Stack } from '@mui/material';
import { Button } from '../../shared/components/Button';

export default function SlideShow() {
  const array = [Slide1, Slide2, Slide3];
  return (
    <Box marginBottom={5}>
      <Carousel
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: 'transparent',
            borderRadius: 0,
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
        variant="h1"
        fontFamily="Poppins"
        fontSize="70px"
        color="#e91b37"
      >
        GAZI & <br></br> REHAU
      </Typography>
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
        variant="h1"
        fontFamily="Poppins"
        fontSize="70px"
        color="#e91b37"
      >
        Produkte <br />
        Cilësore
      </Typography>
      <Stack direction="row" spacing={3}>
        <Button>Produktet</Button>
        <Button>Rreth Nesh</Button>
      </Stack>
    </Box>
  );
};
const Slide1 = () => {
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
        variant="h1"
        fontFamily="Poppins"
        fontSize="70px"
        color="#e91b37"
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
