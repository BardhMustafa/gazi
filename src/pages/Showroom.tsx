import Mansory from '../components/manosry/Mansory';
import Box from '@mui/material/Box';
import { Heading2 } from '../shared/components/Heading2';
import styled from 'styled-components';
import { useTranslations } from '../hooks/useTranslations';

// Adjusted heights for better visual balance
const heights = [350, 500, 350, 450, 350, 400, 450, 450, 350];
const pics = [
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974408/pic7_alyg6i_qkoqqh_v7njhz.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956022/images/rehau4_uoykzd_mffdad.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974588/rolete_hsmxxh_bh4chs_rsaw17.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974697/homepage-products_lleo9h_igeogw_vqi2fw.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975250/images/pic1_kn4snv_ajd6bl_atb3bd.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975502/images/pic9_yu8kbg_azivvj_anr6lc.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975437/images/pic2_h5mmgj_a8efhh_prfwcx.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975333/images/pic3_dpnv0i_wmh9f2_ekwavo.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703975553/images/pic8_qs4qtu_h76fbn_ypvndk.jpg',
  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956394/background1_zvpsvk.jpg',
];

const Showroom = () => {
  const { t, translations } = useTranslations();
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
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
  padding: 4rem 2rem;
  border-radius: 1.2rem;
  border: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export default Showroom;
