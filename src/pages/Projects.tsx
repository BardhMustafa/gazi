import styled from 'styled-components';
import { generatePath, useNavigate } from 'react-router';
import { PageHero } from '../shared/components/PageHero';
import { useTranslations } from '../hooks/useTranslations';
import { cloudinaryImage } from '../utils/cloudinaryImage';

const Projects = () => {
  const navigate = useNavigate();
  const { t, translations } = useTranslations();

  return (
    <>
      <PageHero
        title={t(translations.common.projects)}
        backgroundImagePath="https://res.cloudinary.com/dqtfurml7/image/upload/v1703975250/images/pic1_kn4snv_ajd6bl_atb3bd.jpg"
      />
      <Section>
        <SectionHeader>
          <Eyebrow>GAZI</Eyebrow>
          <SectionTitle>
            {t(translations.redesign.projects_title)}
          </SectionTitle>
          <SectionDescription>
            {t(translations.redesign.projects_description)}
          </SectionDescription>
        </SectionHeader>
        <ProductsContainer>
          <Product type="button" onClick={() => navigate(generatePath('/projects/showroom'))}>
            <ProductHeading>{t(translations.common.showroom)}</ProductHeading>
            <ProductImageContainer>
              <ProductImage
                src={cloudinaryImage(
                  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974408/pic7_alyg6i_qkoqqh_v7njhz.jpg',
                  1000
                )}
                alt="showroom-product"
                loading="lazy"
                decoding="async"
              />
            </ProductImageContainer>
          </Product>
          <Product type="button" onClick={() => navigate(generatePath('/projects/factory'))}>
            <ProductHeading>{t(translations.common['prod-sec'])}</ProductHeading>

            <ProductImageContainer>
              <ProductImage
                src={cloudinaryImage(
                  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977278/factory/Factory/_DSC0740_dcavyd.jpg',
                  1000
                )}
                alt="factory-image"
                loading="lazy"
                decoding="async"
              />
            </ProductImageContainer>
          </Product>
        </ProductsContainer>
      </Section>
    </>
  );
};

export default Projects;

const Section = styled.section`
  padding-top: clamp(7rem, 10vw, 12rem);
  padding-bottom: clamp(6rem, 9vw, 11rem);
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Product = styled.button`
  width: 100%;
  text-align: left;
  font: inherit;
  color: inherit;

  background-color: #f5f7f9;
  padding: 1.5rem 1.5rem 3rem;
  border-radius: 2.4rem;
  border: 1px solid #e5e9ed;
  overflow: hidden;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:active {
    border: 1px solid #c4c4c4;
    cursor: pointer;
  }

  @media (min-width: 721px) {
    &:hover,
    &:active {
      transform: translateY(-6px);
      box-shadow: 0 26px 60px rgba(17, 51, 85, .14);
      cursor: pointer;

      & > h2 {
        color: #d42539;
      }
    }
  }
`;

const ProductHeading = styled.h2`
  font-size: clamp(3.5rem, 5vw, 5rem);
  color: #113355;
  letter-spacing: -.045em;
  margin: 1.6rem 1.6rem 2.2rem;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 1.4rem;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SectionHeader = styled.div`
  max-width: 82rem;
  margin-bottom: clamp(4rem, 6vw, 6.5rem);
`;

const Eyebrow = styled.p`
  color: #d42539;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: .18em;
  margin-bottom: 1.4rem;
`;

const SectionTitle = styled.h2`
  color: #113355;
  font-size: clamp(3.8rem, 5vw, 6rem);
  line-height: 1.06;
  letter-spacing: -.05em;
  margin-bottom: 1.8rem;
`;

const SectionDescription = styled.p`
  max-width: 68rem;
  color: #647383;
  font-size: 1.7rem;
  line-height: 1.75;
`;
