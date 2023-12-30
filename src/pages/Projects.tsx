import styled from 'styled-components';
import { generatePath, useNavigate } from 'react-router';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Section>
        <ProductsContainer>
          <Product onClick={() => navigate(generatePath('/projects/showroom'))}>
            <ProductHeading>Showroom</ProductHeading>
            <ProductImageContainer>
              <ProductImage
                src="https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703894710/pic1_kn4snv.jpg"
                alt="showroom-product"
              />
            </ProductImageContainer>
          </Product>
          <Product onClick={() => navigate(generatePath('/projects/factory'))}>
            <ProductHeading>Factory</ProductHeading>

            <ProductImageContainer>
              <ProductImage
                src="https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703893515/about_3_vherwe.jpg"
                alt="product"
              />
            </ProductImageContainer>
          </Product>
        </ProductsContainer>
      </Section>
    </div>
  );
};

export default Projects;

const Section = styled.section`
  margin-top: 2rem;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Product = styled.div`
  flex-basis: 100%;

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
  margin-left: 5%;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  width: 90%;
  mix-blend-mode: multiply;
  border-radius: 1.2rem;
`;

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
