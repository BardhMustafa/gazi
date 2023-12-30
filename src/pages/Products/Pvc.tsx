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
  margin-top: 2rem;
  margin-bottom: 20rem;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Product = styled.div`
  flex-basis: 100%;
  min-height: 40rem;
  background-color: #fbfbfd;
  padding: 2rem;
  border-radius: 1.2rem;
  border: 1px solid #e0e0e0;

  &:active {
    border: 1px solid #c4c4c4;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-basis: calc(33% - 1rem);

    &:hover,
    &:active {
      border: 1px solid #c4c4c4;
      cursor: pointer;

      & > h2 {
        background: -webkit-linear-gradient(0deg, #d42539, #fa21b2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

const ProductHeading = styled.h2`
  font-size: 4rem;
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
