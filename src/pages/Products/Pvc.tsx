import styled from 'styled-components';
import { generatePath, useNavigate } from 'react-router';
import { cld } from '../../App';
import { AdvancedImage } from '@cloudinary/react';
import { useTranslations } from '../../hooks/useTranslations';

const Pvc = () => {
  const navigate = useNavigate();
  const { t, translations } = useTranslations();

  return (
    <Page>
      <Section aria-label="PVC window systems">
        <SectionHeader>
          <Eyebrow>REHAU PVC</Eyebrow>
          <SectionTitle>
            {t(translations.redesign.pvc_intro_title)}
          </SectionTitle>
        </SectionHeader>
        <ProductsContainer>
          <Product
            type="button"
            onClick={() => navigate(generatePath('/products/pvc/synego'))}
          >
            <ProductHeading>Synego</ProductHeading>
            <ProductImageContainer>
              <ProductImage
                cldImg={cld.image('images/synego_1_ydmkpd_hyuavx')}
                alt="Synego window profile"
                loading="lazy"
              />
            </ProductImageContainer>
          </Product>
          <Product
            type="button"
            onClick={() => navigate(generatePath('/products/pvc/geneo'))}
          >
            <ProductHeading>Geneo</ProductHeading>
            <ProductImageContainer>
              <ProductImage
                cldImg={cld.image('images/geneo_emgney_nzvask')}
                alt="Geneo window profile"
                loading="lazy"
              />
            </ProductImageContainer>
          </Product>
          <Product
            type="button"
            onClick={() => navigate(generatePath('/products/pvc/artevo'))}
          >
            <ProductHeading>Artevo</ProductHeading>
            <ProductImageContainer>
              <ProductImage
                cldImg={cld.image('images/artevo_kezr7o_iyu2of')}
                alt="Artevo window profile"
                loading="lazy"
              />
            </ProductImageContainer>
          </Product>
        </ProductsContainer>
      </Section>
    </Page>
  );
};

export default Pvc;

const Page = styled.div`
  padding-bottom: clamp(6rem, 9vw, 12rem);
`;

const Section = styled.section`
  padding-top: clamp(5rem, 8vw, 9rem);
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.4rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Product = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  font: inherit;
  color: inherit;
  min-height: clamp(38rem, 34vw, 48rem);
  background-color: #f5f7f9;
  padding: clamp(2.5rem, 3vw, 3.5rem);
  border-radius: 2.4rem;
  border: 1px solid #e5e9ed;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:active {
    border: 1px solid #c4c4c4;
    cursor: pointer;
  }

  @media (min-width: 651px) {
    &:hover,
    &:active {
      transform: translateY(-6px);
      box-shadow: 0 26px 60px rgba(17, 51, 85, .15);
      cursor: pointer;

      & > h2 {
        color: #d42539;
      }
    }
  }
`;

const ProductHeading = styled.h2`
  font-size: clamp(3.4rem, 4vw, 4.8rem);
  color: #113355;
  letter-spacing: -.045em;
  margin-bottom: 2rem;
`;

const ProductImage = styled(AdvancedImage)`
  width: min(82%, 34rem);
  max-height: 31rem;
  object-fit: contain;
  mix-blend-mode: multiply;
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SectionHeader = styled.div`
  max-width: 78rem;
  margin-bottom: clamp(4rem, 6vw, 6.5rem);
`;

const Eyebrow = styled.p`
  color: #d42539;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: .18em;
  margin-bottom: 1.4rem;
`;

const SectionTitle = styled.h1`
  color: #113355;
  font-size: clamp(3.8rem, 5vw, 6rem);
  line-height: 1.06;
  letter-spacing: -.05em;
`;
