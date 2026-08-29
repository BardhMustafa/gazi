import Mansory from '../components/manosry/Mansory';

import Box from '@mui/material/Box';
import { Heading2 } from '../shared/components/Heading2';
import styled from 'styled-components';
import { useTranslations } from '../hooks/useTranslations';

const heights = [300, 700, 300, 400, 300, 350, 450, 450, 500, 300, 400];
const pics = [
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977278/factory/Factory/_DSC0740_dcavyd.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977277/factory/Factory/pic1_xvhqbc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977277/factory/Factory/pic1_xvhqbc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977277/factory/Factory/_DSC0832_lmtxsb.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977274/factory/Factory/_DSC0774_ieeqaa.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977275/factory/Factory/_DSC0788_ppggrd.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977277/factory/Factory/_DSC0832_lmtxsb.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977276/factory/Factory/_DSC0818_bjbjuc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977275/factory/Factory/_DSC0788_ppggrd.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977273/factory/Factory/_DSC0769_ht0nw0.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977278/factory/Factory/_DSC0740_dcavyd.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977273/factory/Factory/_DSC0743_snfao1.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977273/factory/Factory/_DSC0769_ht0nw0.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977269/factory/Factory/_DSC0706_gnaiac.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977269/factory/Factory/_DSC0709_vxe1yx.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977273/factory/Factory/_DSC0743_snfao1.jpg',
  
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
  background-color: #f5f7f9;
  padding: clamp(3rem, 6vw, 7rem);
  border-radius: 2.4rem;
  border: 1px solid #e5e9ed;
`;
export default Factory;
