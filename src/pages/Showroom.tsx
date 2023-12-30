import Mansory from '../components/manosry/Mansory';
import Box from '@mui/material/Box';
import { Heading2 } from '../shared/components/Heading2';
import styled from 'styled-components';
import { useTranslations } from '../hooks/useTranslations';

const heights = [300, 700, 300, 400, 300, 350, 450, 450, 300];
const pics = [
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894716/pic7_alyg6i.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894712/pic4_wrxfwy.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703893519/rolete_hsmxxh.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703893515/homepage-products_lleo9h.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894710/pic1_kn4snv.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894717/pic9_yu8kbg.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894714/pic2_h5mmgj.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894710/pic3_dpnv0i.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894716/pic8_qs4qtu.jpg',
  'https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894715/pic6_c2z1c0.jpg',
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
