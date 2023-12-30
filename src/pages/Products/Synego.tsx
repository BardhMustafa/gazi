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
        key: t(translations.synego['general-table-key1']),
        value: '94 mm deri në 175 mm',
      },
      {
        key: t(translations.synego['general-table-key2']),
        value: '114 mm deri në 218 mm',
      },
      {
        key: t(translations.synego['general-table-key3']),
        value: '80mm',
      },
      {
        key: t(translations.synego['general-table-key4']),
        value: '7/6',
      },
      {
        key: t(translations.synego['general-table-key5']),
        value: 'maksimale 51 mm',
      },
      {
        key: t(translations.synego['general-table-key6']),
        value: 'AD: 2 izolues ndalues MD: 2 izolues ndalues,1 izolim qendror',
      },
      {
        key: t(translations.synego['general-table-key7']),
        value:
          'Krahë me sipërfaqe të zhvendosur, gjysmë krah me krah të rrumbullakët',
      },
    ],
  };
  const synego2 = {
    data: [
      { key: t(translations.synego['characteristic-table-key1']), value: '	deri në 0,94 W/m²K' },
      { key: t(translations.synego['characteristic-table-key2']), value: '	deri në 47 dB' },
      {
        key: t(translations.synego['characteristic-table-key3']),
        value: 'deri në RC3',
      },
      {
        key: t(translations.synego['characteristic-table-key4']),
        value: 'B5',
      },
      {
        key: t(translations.synego['characteristic-table-key5']),
        value: '9A',
      },
      {
        key: t(translations.synego['characteristic-table-key6']),
        value: '4',
      },
      {
        key: t(translations.synego['characteristic-table-key7']),
        value: '2',
      },
    ],
  };
  const synego3 = {
    data: [
      {
        key:  t(translations.synego['general-table-key1']),
        value: '88 deri në 177 mm'
      },
      {
        key:  t(translations.synego['general-table-key2']),
        value: '124 mm deri në 220 mm',
      },
      {
        key: t(translations.synego['general-table-key3']),
        value: '70 mm',
      },
      {
        key: t(translations.synego['general-table-key4']),
        value: '5',
      },
      {
        key: t(translations.synego['general-table-key5']),
        value: 'maksimale 41 mm',
      },
      {
        key: t(translations.synego['general-table-key6']),
        value: '2 izolues ndalues',
      },
      {
        key: t(translations.synego['general-table-key7']),
        value:
          'Krahë me sipërfaqe të zhvendosur, gjysmë krah me krah të rrumbullakët',
      },
    ],
  };
  const synego4 = {
    data: [
      { key: t(translations.synego['characteristic-table-key1']), value: '	deri në 1.3 W/m²K' },
      { key:  t(translations.synego['characteristic-table-key2']), value: '	deri në 45 dB' },
      {
        key:  t(translations.synego['characteristic-table-key3']),
        value: 'deri në RC3',
      },
      {
        key:  t(translations.synego['characteristic-table-key4']),
        value: 'B5',
      },
      {
        key:  t(translations.synego['characteristic-table-key5']),
        value: '9A',
      },
      {
        key:  t(translations.synego['characteristic-table-key6']),
        value: '4',
      },
      {
        key:  t(translations.synego['characteristic-table-key7']),
        value: '1',
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
      <Typography variant='h1' fontFamily='poppins' align='center' marginTop={5} >Të dhënat teknike - Dritare me Brillant Design</Typography>
      <ProductsContainer>
        <CustomizedTables title="Të pergjithshmet" data={synego3} />
        <CustomizedTables title="Karakterisikat" data={synego4} />
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
