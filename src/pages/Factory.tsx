import Mansory from '../components/manosry/Mansory';

import Box from '@mui/material/Box';
import { Heading2 } from '../shared/components/Heading2';
import styled from 'styled-components';
import { useTranslations } from '../hooks/useTranslations';

const heights = [300, 700, 300, 400, 300, 350, 450, 450, 500, 300, 400];
const pics = [
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955598/factory/Factory/RehauGazi_xubhu4.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955598/factory/Factory/pic5_bfe25n.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955597/factory/Factory/pic6_kqm1b5.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955600/factory/Factory/pic8_gbbnpc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955599/factory/Factory/pic9_abvzeq.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955597/factory/Factory/pic3_w725fs.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955597/factory/Factory/pic7_hnmydv.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955596/factory/Factory/pic4_euc0xc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955592/factory/Factory/pic18_gwkbuw.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955590/factory/Factory/pic11_erybqs.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955588/factory/Factory/pic13_kuddzj.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955588/factory/Factory/pic12_rtpm97.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955584/factory/Factory/pic10_hkifnz.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955586/factory/Factory/pic14_svyk7n.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703955592/factory/Factory/pic2_vi3kyu.jpg',
];

const Factory = () => {
  const { t, translations } = useTranslations();
  return (
    <Container>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Heading2>{t(translations.common['prod-sec'])}</Heading2>
      </Box>
      <Mansory heights={heights} pics={pics} />
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
