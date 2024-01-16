import { InfoSection } from '../../components/homepage/InfoSection';
import { Paragraph } from '../../shared/components/Paragraph';
import { useTranslations } from '../../hooks/useTranslations';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Geneo = () => {
  const { t, translations } = useTranslations();
  return (
    <>
      <InfoSection
        title="Geneo"
        imageSrc="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956018/images/geneo_emgney_nzvask.webp"
      />
      <Paragraph>{t(translations.geneo.first_section_content)}</Paragraph>
      <ProductsContainer>
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
            <li> {t(translations.geneo['advantages-table-key1'])}</li>
            <li> {t(translations.geneo['advantages-table-key2'])}</li>
            <li> {t(translations.geneo['advantages-table-key4'])}</li>
            <li> {t(translations.geneo['advantages-table-key5'])}</li>
            <li> {t(translations.geneo['advantages-table-key6'])}</li>
            <li> {t(translations.geneo['advantages-table-key7'])}</li>

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
            <li>{t(translations.geneo['general-table-value1'])}</li>
          </Typography>
          <Paragraph>
            <li>{t(translations.geneo['general-table-value1'])}</li>
            <li>{t(translations.geneo['general-table-value3'])}</li>
            <li>{t(translations.geneo['general-table-value4'])}</li>
            <li>{t(translations.geneo['general-table-value5'])}</li>
            <li>{t(translations.geneo['general-table-value6'])}</li>
            <li>{t(translations.geneo['general-table-value7'])}</li>
            <li>{t(translations.geneo['general-table-value8'])}</li>
            <li>{t(translations.geneo['general-table-value9'])}</li>
            <li>{t(translations.geneo['general-table-value10'])}</li>
            <li>{t(translations.geneo['general-table-value11'])}</li>
          </Paragraph>
        </Product>
        
      </ProductsContainer>
    </>
  );
};

export default Geneo;

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
