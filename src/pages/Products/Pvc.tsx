import styled from 'styled-components';
import { generatePath, useNavigate } from 'react-router';
import { cld } from '../../App';
import { AdvancedImage } from '@cloudinary/react';

const Pvc = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Section>
        <ProductsContainer>
          <Product
            type="button"
            onClick={() => navigate(generatePath('/products/pvc/synego'))}
          >
            <ProductHeading>Synego</ProductHeading>
            <ProductImageContainer>
              <ProductImage
                cldImg={cld.image('images/synego_1_ydmkpd_hyuavx')}
                alt="product"
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
                alt="product"
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
                alt="product"
              />
            </ProductImageContainer>
          </Product>
        </ProductsContainer>
      </Section>
    </div>
  );
};

export default Pvc;

const Section = styled.section`
  padding-top: clamp(4rem, 8vw, 9rem);
  margin-bottom: 14rem;
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
  min-height: 46rem;
  background-color: #f5f7f9;
  padding: 3rem;
  border-radius: 2.4rem;
  border: 1px solid #e5e9ed;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:active {
    border: 1px solid #c4c4c4;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-basis: calc(33% - 1rem);

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
  font-size: clamp(3.5rem, 5vw, 5rem);
  color: #113355;
  letter-spacing: -.045em;
  margin-bottom: 1rem;
`;

const ProductImage = styled(AdvancedImage)`
  width: 70%;
  mix-blend-mode: multiply;
`;

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
