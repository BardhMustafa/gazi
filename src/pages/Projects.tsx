import styled from 'styled-components';
import { generatePath, useNavigate } from 'react-router';
import { PageHero } from '../shared/components/PageHero';
import { useTranslations } from '../hooks/useTranslations';

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
        <ProductsContainer>
          <Product type="button" onClick={() => navigate(generatePath('/projects/showroom'))}>
            <ProductHeading>Showroom</ProductHeading>
            <ProductImageContainer>
              <ProductImage
                src="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956029/images/pic1_kn4snv_ajd6bl.jpg"
                alt="showroom-product"
              />
            </ProductImageContainer>
          </Product>
          <Product type="button" onClick={() => navigate(generatePath('/projects/factory'))}>
            <ProductHeading>Factory</ProductHeading>

            <ProductImageContainer>
              <ProductImage
                src="https://res.cloudinary.com/dqtfurml7/image/upload/v1703955594/factory/Factory/pic16_fin8q4.jpg"
                alt="factory-image"
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
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

const Product = styled.button`
  flex-basis: 100%;
  text-align: left;
  font: inherit;
  color: inherit;

  background-color: #f5f7f9;
  padding: 2rem 2rem 3rem;
  border-radius: 2.4rem;
  border: 1px solid #e5e9ed;
  overflow: hidden;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:active {
    border: 1px solid #c4c4c4;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-basis: calc(50% - 1rem);
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
  margin-left: 5%;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  width: 90%;
  mix-blend-mode: multiply;
  border-radius: 1.2rem;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
