import { InfoSection } from '../../components/homepage/InfoSection';
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
        value: t(translations.synego['general-table-value1']),
      },
      {
        key: t(translations.synego['general-table-key2']),
        value: t(translations.synego['general-table-value2']),
      },
      {
        key: t(translations.synego['general-table-key3']),
        value: t(translations.synego['general-table-value3']),
      },
      {
        key: t(translations.synego['general-table-key4']),
        value: t(translations.synego['general-table-value4']),
      },
      {
        key: t(translations.synego['general-table-key5']),
        value: t(translations.synego['general-table-value5']),
      },
      {
        key: t(translations.synego['general-table-key6']),
        value: t(translations.synego['general-table-value6']),
      },
      {
        key: t(translations.synego['general-table-key7']),
        value: t(translations.synego['general-table-value7']),
      },
    ],
  };
  const synego2 = {
    data: [
      {
        key: t(translations.synego['characteristic-table-key1']),
        value: t(translations.synego['characteristic-table1-value1']),
      },
      {
        key: t(translations.synego['characteristic-table-key2']),
        value: t(translations.synego['characteristic-table1-value2']),
      },
      {
        key: t(translations.synego['characteristic-table-key3']),
        value: t(translations.synego['characteristic-table1-value3']),
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
        key: t(translations.synego['general-table-key1']),
        value: t(translations.synego['general-table2-value1']),
      },
      {
        key: t(translations.synego['general-table-key2']),
        value: t(translations.synego['general-table2-value2']),
      },
      {
        key: t(translations.synego['general-table-key3']),
        value: t(translations.synego['general-table2-value3']),
      },
      {
        key: t(translations.synego['general-table-key4']),
        value: '5',
      },
      {
        key: t(translations.synego['general-table-key5']),
        value: t(translations.synego['general-table2-value5']),
      },
      {
        key: t(translations.synego['general-table-key6']),
        value: t(translations.synego['general-table2-value6']),
      },
      {
        key: t(translations.synego['general-table-key7']),
        value: t(translations.synego['general-table2-value7']),
      },
    ],
  };
  const synego4 = {
    data: [
      {
        key: t(translations.synego['characteristic-table-key1']),
        value: t(translations.synego['characteristic-table2-value1']),
      },
      {
        key: t(translations.synego['characteristic-table-key2']),
        value: t(translations.synego['characteristic-table2-value2']),
      },
      {
        key: t(translations.synego['characteristic-table-key3']),
        value: t(translations.synego['characteristic-table2-value3']),
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
        value: '1',
      },
    ],
  };
  return (
    <>
      <InfoSection
        title="Synego"
        imageSrc="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956023/images/synego_1_ydmkpd_hyuavx.jpg"
      />
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
            marginBottom={2}
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
      <Typography
        variant="h1"
        fontFamily="poppins"
        align="center"
        marginTop={5}
      >
        Të dhënat teknike - Dritaret Synego
      </Typography>
      <ProductsContainer>
        <CustomizedTables title="Të pergjithshmet" data={synego1} />
        <CustomizedTables title="Karakterisikat" data={synego2} />
      </ProductsContainer>
      <Typography
        variant="h1"
        fontFamily="poppins"
        align="center"
        marginTop={5}
      >
        Të dhënat teknike - Dritare me Brillant Design
      </Typography>
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
