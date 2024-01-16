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
            <li> {t(translations.synego['synego-brilliant-p1'])}</li>
            <li> {t(translations.synego['synego-brilliant-p2'])}</li>
            <li> {t(translations.synego['synego-brilliant-p3'])}</li>
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
            Avantazhet
          </Typography>
          <Paragraph>
            <li>Mund të kurseni energji deri në 76 %</li>
            <li>Ndjehuni të sigurt falë sistemit të mbrojtjes nga hajdutët</li>
            <li>
              Do të shijoni oazën tuaj të qetësisë përmes reduktimit 24‑fish të
              zhurmës
            </li>
            <li>Sa i përket dizajnit, imagjinata juaj nuk njeh kufij</li>
            <li>
              Përjetoni një pastrim shumë të lehtë falë sipërfaqes së lëmuar Të
              disponueshme edhe në versionin e certifikuar për shtëpi pasive
            </li>
            <li>
              GENEO janë gjithashtu të disponueshme edhe si derë e jashtme edhe
              derë rrëshqitëse
            </li>
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
