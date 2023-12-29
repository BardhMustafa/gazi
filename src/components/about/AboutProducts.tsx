import styled from 'styled-components';
import AboutProductsImage from '../../assets/images/rehau4.jpg';
import { Button } from '../../shared/components/Button';
import { generatePath, useNavigate } from 'react-router';

export const AboutProducts = () => {
  const navigate = useNavigate();
  return (
    <Section sectionImage={AboutProductsImage}>
      <AboutProductsHeading>Produktet Tona</AboutProductsHeading>
      <AboutProductsDesc>
        Në fabrikat tona mjaftë bashkëkohore prodhojmë të gjitha llojet dhe
        format e dyerve dhe dritareve me profile të cilat janë zbulimet e fundit
        dhe tejet të përsosura. E veqantë e kompanisë sonë është se ne e bëjmë
        vetë përpunimin e xhamit dhe izolimin e tyre,material i cili vie te ne
        nga prodhues eminentë botërorë. Përveç këtyre produkteve, ne bëjmë edhe
        prodhimin e fasadave strukturale dhe gjysëmstrukturale nga materiali
        ALUMIL. Te ne mund të gjeni poashtu edhe gilindera të të gjitha llojeve
        si dhe pikore shiu të kualitetit më të lartë.
      </AboutProductsDesc>
      <Button onClick={() => navigate(generatePath('/products'))}>
        Me shume
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
  width: 90%;
  margin: 0 auto;
`;
