import styled from 'styled-components';
import { Button } from '../../shared/components/Button';
import { generatePath, useNavigate } from 'react-router';
import { useTranslations } from '../../hooks/useTranslations';

export const AboutProducts = () => {
  const navigate = useNavigate();
  const { t, translations } = useTranslations();

  return (
    <Section sectionImage="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956022/images/rehau4_uoykzd_mffdad.jpg">
      <AboutProductsHeading>
        {t(translations.about.our_products)}
      </AboutProductsHeading>
      <AboutProductsDesc>
        {t(translations.about.our_products_desc)}
      </AboutProductsDesc>
      <Button onClick={() => navigate(generatePath('/products'))}>
        {t(translations.common.read_more)}
      </Button>
    </Section>
  );
};

const Section = styled.section<{ sectionImage: string }>`
  background:
    linear-gradient(rgba(8, 33, 90, 0.8), rgba(8, 33, 90)),
    url(${({ sectionImage }) => sectionImage}) no-repeat center center/cover;
  display: flex;
  padding: clamp(6rem, 10vw, 12rem) clamp(2rem, 8vw, 10rem);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2.4rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 50rem;
  }
`;

const AboutProductsHeading = styled.h2`
  color: white;
  font-size: clamp(3.5rem, 6vw, 6rem);
  letter-spacing: -.05em;
  line-height: 1.05;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const AboutProductsDesc = styled.p`
  color: white;
  font-size: 1.6rem;
  line-height: 1.9;
  text-align: center;
  width: 90%;
  max-width: 90rem;
  margin: 0 auto;
`;
