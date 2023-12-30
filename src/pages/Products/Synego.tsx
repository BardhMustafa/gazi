import { InfoSection } from '../../components/homepage/InfoSection';
import SynegoPic from '../../assets/images/synego.jpeg';
import { Paragraph } from '../../shared/components/Paragraph';
import { useTranslations } from '../../hooks/useTranslations';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
const Synego = () => {
  const { t, translations } = useTranslations();
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
