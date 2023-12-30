import Mansory from '../components/manosry/Mansory';
import Box from '@mui/material/Box';
import { Heading2 } from '../shared/components/Heading2';
import styled from 'styled-components';
import { useTranslations } from '../hooks/useTranslations';

const heights = [300, 700, 300, 400, 300, 350, 450, 450, 300];
const pics = [
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956028/images/pic7_alyg6i_qkoqqh.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956029/images/pic4_wrxfwy_ih3lhw.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956030/images/rolete_hsmxxh_bh4chs.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956026/images/homepage-products_lleo9h_igeogw.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956029/images/pic1_kn4snv_ajd6bl.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956021/images/pic9_yu8kbg_azivvj.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956021/images/pic2_h5mmgj_a8efhh.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956020/images/pic3_dpnv0i_wmh9f2.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956022/images/pic8_qs4qtu_h76fbn.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956027/images/pic6_c2z1c0_bcg4eq.jpg',
];

const Showroom = () => {
  const { t, translations } = useTranslations();
  return (
    <Container>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Heading2>{t(translations.common.showroom)}</Heading2>
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
export default Showroom;
