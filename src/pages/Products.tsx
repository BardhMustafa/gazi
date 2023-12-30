import styled from 'styled-components';
import { generatePath, useNavigate } from 'react-router';

const Products = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Section>
        <ProductsContainer>
          <Product onClick={() => navigate(generatePath('/products/pvc'))}>
            <ProductHeading>PVC</ProductHeading>
            <ProductDescription>
              PVC: e qëndrueshme, rezistente ndaj motit dhe pa nevojë për
              mirëmbajtje Formësim i shkëlqyeshëm, liri absolute dizajni dhe
              raport optimal çmim-performancë, të gjitha këto tregojnë se
              dritaret dhe dyert e prodhuara me PVC kanë cilësi të lartë. Ne
              gjithashtu i pajisim profilet tona me një sipërfaqe shumë të
              veçantë: veshje me definicion të lartë.
            </ProductDescription>
          </Product>
          <Product onClick={() => navigate(generatePath('/products/alumin'))}>
            <ProductHeading>ALUMIN</ProductHeading>
            <ProductDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, optio sunt obcaecati illum veritatis autem saepe ipsa
              error veniam odit quam voluptatum neque non numquam sint
              reiciendis similique temporibus quidem?
            </ProductDescription>
            {/* <ProductImageContainer>
              <ProductImage
                cldImg={cld.image('product_ajeke0')}
                alt="product"
              />
            </ProductImageContainer> */}
          </Product>
        </ProductsContainer>
      </Section>
    </div>
  );
};

export default Products;

const Section = styled.section`
  margin-top: 2rem;

  @media (min-width: 2000px) {
    margin-bottom: 37rem;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Product = styled.div`
  flex-basis: 100%;
  min-height: 25rem;
  display: flex;
  flex-direction: column;

  background-color: #fbfbfd;
  padding: 2rem;
  border-radius: 1.2rem;
  border: 1px solid #e0e0e0;

  &:active {
    border: 1px solid #c4c4c4;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-basis: calc(50% - 1rem);

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
`;

const ProductDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #4e4e4e;
`;

// const ProductImage = styled(AdvancedImage)`
//   width: 70%;
//   mix-blend-mode: multiply;
// `;

// const ProductImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;
