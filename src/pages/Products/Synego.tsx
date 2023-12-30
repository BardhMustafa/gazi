import { InfoSection } from '../../components/homepage/InfoSection';
import SynegoPic from '../../assets/images/synego.jpeg';
import { Paragraph } from '../../shared/components/Paragraph';
import { useTranslations } from '../../hooks/useTranslations';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import CustomizedTables from '../../components/Table/Table';


const Synego = () => {
  const { t, translations } = useTranslations();
  const synego1 = {
    data: [
      {
        key: 'Gjerësia e kornizës / shiritit ballor',
        value: '94 mm deri në 175 mm',
      },
      {
        key: 'Gjerësia e mekanizmit mbyllës',
        value: '114 mm deri në 218 mm',
      },
      {
        key: 'Thellësia',
        value: '80mm',
      },
      {
        key: 'Numri i dhomave',
        value: '7/6',
      },
      {
        key: 'Trashësia',
        value: 'maksimale 51 mm',
      },
      {
        key: 'Sisteme izolimi',
        value: 'AD: 2 izolues ndalues MD: 2 izolues ndalues,1 izolim qendror',
      },
      {
        key: 'Dizajn profili',
        value:
          'Krahë me sipërfaqe të zhvendosur, gjysmë krah me krah të rrumbullakët',
      },
    ],
  };
  const synego2 = {
    data: [
      { key: 'Izolimi termik Uf', value: '	deri në 0,94 W/m²K' },
      { key: 'Izolimi akustik Rw', value: '	deri në 47 dB' },
      {
        key: 'Rezistenca ndaj vjedhjeve (EN 1627)',
        value: 'deri në RC3',
      },
      {
        key: 'Rezistenca ndaj erës (EN 12210)',
        value: 'B5',
      },
      {
        key: 'Papërshkueshmëria ndaj shiut me erë (EN 12208)',
        value: '9A',
      },
      {
        key: 'Përshkueshmëria e ajrit (EN 12207)',
        value: '4',
      },
      {
        key: 'Operatorët (EN 13115)',
        value: '2',
      },
    ],
  };
  return (
    <>
      <InfoSection title="Synego" imageSrc={SynegoPic} />
      <Paragraph>{t(translations.synego['synego-dsp'])}</Paragraph>
      <ProductsContainer>
        <Product>
          <Typography
            variant="h2"
            marginBottom={2}
            component="h2"
            align="center"
            fontFamily="poppins"
            fontWeight={600}
          >
            {t(translations.synego['synego-window'])}
          </Typography>
          <Paragraph>
            <li> {t(translations.synego['synego-window-p1'])}</li>
            <li> {t(translations.synego['synego-window-p2'])}</li>
            <li> {t(translations.synego['synego-window-p3'])}</li>
            <li> {t(translations.synego['synego-window-p4'])}</li>
          </Paragraph>
        </Product>
        <Product>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            fontFamily="poppins"
            fontWeight={600}
          >
            {t(translations.synego['synego-brilliant'])}
          </Typography>
          <Paragraph>
            <li> {t(translations.synego['synego-brilliant-p1'])}</li>
            <li> {t(translations.synego['synego-brilliant-p2'])}</li>
            <li> {t(translations.synego['synego-brilliant-p3'])}</li>
          </Paragraph>
        </Product>
      </ProductsContainer>
      <Typography variant='h1' fontFamily='poppins' align='center' marginTop={5}>Të dhënat teknike - Dritaret Synego</Typography>
      <ProductsContainer>
        <CustomizedTables title="Të pergjithshmet" data={synego1} />
        <CustomizedTables title="Karakterisikat" data={synego2} />
      </ProductsContainer>
    </>
  );
};

export default Synego;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Product = styled.div`
  flex-basis: 50%;
  background-color: #fbfbfd;
  padding: 4rem 6rem;
  border-radius: 1.2rem;
  border: 1px solid #e0e0e0;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;
