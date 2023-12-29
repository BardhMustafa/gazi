import Mansory from '../components/manosry/Mansory';
import Pic1 from '../assets/factory/pic1.jpg';
import Pic2 from '../assets/factory/pic2.jpg';
import Pic3 from '../assets/factory/pic3.jpg';
import Pic4 from '../assets/factory/pic4.jpg';
import Pic5 from '../assets/factory/pic5.jpg';
import Pic6 from '../assets/factory/pic6.jpg';
import Pic7 from '../assets/factory/pic7.jpg';
import Pic8 from '../assets/factory/pic8.jpg';
import Pic9 from '../assets/factory/pic9.jpg';
import Pic10 from '../assets/factory/pic10.jpg';
import Pic11 from '../assets/factory/pic11.jpg';
import Pic12 from '../assets/factory/pic12.jpg';
import Pic13 from '../assets/factory/pic13.jpg';
import Pic14 from '../assets/factory/pic14.jpg';
import Pic15 from '../assets/factory/pic15.jpg';
import Pic16 from '../assets/factory/pic16.jpg';
import Pic17 from '../assets/factory/pic17.jpg';
import Pic18 from '../assets/factory/pic18.jpg';
import Box from '@mui/material/Box';
import { Heading2 } from '../shared/components/Heading2';
import styled from 'styled-components';

const heights = [300, 700, 300, 400, 300, 350, 450, 450, 500, 300, 400, 500, 600, 500];
const pics = [Pic7, Pic4,Pic12, Pic11, Pic1, Pic10, Pic2, Pic14, Pic8, Pic13, Pic6, Pic9, Pic5, Pic3, Pic15, Pic16, Pic17, Pic18];

const Factory = () => {
  return (
    <Container>
      <Box display='flex' justifyContent='center' alignContent='center'>
        <Heading2>Sektori i prodhimit</Heading2>
      </Box>
      <Mansory heights={heights} pics={pics}/>
    </Container>
  );
};
const Container = styled.div`
  flex-basis: 100%;
  min-height: 50rem;
  background-color: #fbfbfd;
  padding: 2rem;
  border-radius: 1.2rem;
  border: 1px solid #e0e0e0;
`;
export default Factory;