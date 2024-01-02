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
  padding: 3rem 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 50rem;
  }
`;

const AboutProductsHeading = styled.h2`
  color: white;
  font-size: 3rem;
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
  margin: 0 auto;
`;
