import Mansory from '../components/manosry/Mansory';
import Pic1 from '../assets/showroom/pic1.jpg';
import Pic2 from '../assets/showroom/pic2.jpg';
import Pic3 from '../assets/showroom/pic3.jpg';
import Pic4 from '../assets/showroom/pic4.jpg';
import Pic5 from '../assets/showroom/pic5.jpg';
import Pic6 from '../assets/showroom/pic6.jpg';
import Pic7 from '../assets/showroom/pic7.jpg';
import Pic8 from '../assets/showroom/pic8.jpg';
import Pic9 from '../assets/showroom/pic9.jpg';
import Pic10 from '../assets/showroom/pic10.jpg';
import Pic11 from '../assets/showroom/pic11.jpg';
import Pic12 from '../assets/showroom/pic12.jpg';
import Pic13 from '../assets/showroom/pic13.jpg';
import Pic14 from '../assets/showroom/pic14.jpg';
import Box from '@mui/material/Box';
import { Heading2 } from '../shared/components/Heading2';

const heights = [300, 700, 300, 400, 300, 350, 450, 450, 500, 300, 400, 500, 600, 500];
const pics = [Pic7, Pic3, Pic11, Pic1, Pic10, Pic2, Pic4, Pic14, Pic8, Pic13, Pic6, Pic9, Pic5, Pic12];

const Showroom = () => {
  return (
    <>
      <Box display='flex' justifyContent='center' alignContent='center'>
        <Heading2>Showroom</Heading2>
      </Box>
      <Mansory heights={heights} pics={pics}/>
    </>
  );
};

export default Showroom;