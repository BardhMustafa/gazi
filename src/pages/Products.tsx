import styled from 'styled-components';
import { generatePath, useNavigate } from 'react-router';
import { PageHero } from '../shared/components/PageHero';
import { useTranslations } from '../hooks/useTranslations';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Products = () => {
  const navigate = useNavigate();
  const { t, translations } = useTranslations();

  return (
    <>
      <PageHero
        title={t(translations.common.products)}
        backgroundImagePath="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956026/images/homepage-products_lleo9h_igeogw.jpg"
      />
      <Section>
        <SectionIntro>
          <Eyebrow>GAZI SYSTEMS</Eyebrow>
          <h2>Materiale të zgjedhura për performancë afatgjatë.</h2>
        </SectionIntro>
        <ProductsContainer>
          <Product
            onClick={() => navigate(generatePath('/products/pvc'))}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                navigate(generatePath('/products/pvc'));
              }
            }}
            role="link"
            tabIndex={0}
            $active
          >
            <ProductNumber>01</ProductNumber>
            <ProductHeading>PVC</ProductHeading>
            <ProductDescription>
              PVC: e qëndrueshme, rezistente ndaj motit dhe pa nevojë për
              mirëmbajtje Formësim i shkëlqyeshëm, liri absolute dizajni dhe
              raport optimal çmim-performancë, të gjitha këto tregojnë se
              dritaret dhe dyert e prodhuara me PVC kanë cilësi të lartë. Ne
              gjithashtu i pajisim profilet tona me një sipërfaqe shumë të
              veçantë: veshje me definicion të lartë.
            </ProductDescription>
            <ProductLink>Eksploro sistemet <ArrowForwardRoundedIcon /></ProductLink>
          </Product>
          <Product>
            <ProductNumber>02</ProductNumber>
            <ProductHeading>ALUMIN</ProductHeading>
            <ProductDescription>
              Sisteme alumini me linja të pastra, qëndrueshmëri të lartë dhe
              fleksibilitet arkitektonik. Një zgjidhje premium për hapësira të
              mëdha, fasada moderne dhe projekte që kërkojnë dritë, elegancë
              dhe performancë të besueshme.
            </ProductDescription>
            <ProductStatus>Së shpejti online</ProductStatus>
          </Product>
        </ProductsContainer>
      </Section>
    </>
  );
};

export default Products;

const Section = styled.section`
  padding-top: clamp(7rem, 10vw, 12rem);

  @media (min-width: 2000px) {
    margin-bottom: 37rem;
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4rem;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Product = styled.article<{ $active?: boolean }>`
  min-height: 42rem;
  display: flex;
  flex-direction: column;
  background: ${({ $active }) => $active ? 'linear-gradient(145deg, #113355, #0a2947)' : '#f5f7f9'};
  color: ${({ $active }) => $active ? '#fff' : '#113355'};
  padding: clamp(3rem, 5vw, 5rem);
  border-radius: 2.4rem;
  border: 1px solid ${({ $active }) => $active ? 'transparent' : '#e5e9ed'};
  position: relative;
  overflow: hidden;
  box-shadow: ${({ $active }) => $active ? '0 26px 70px rgba(17,51,85,.22)' : 'none'};
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:active {
    transform: translateY(-4px);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    &:hover,
    &:active {
      transform: translateY(-6px);
      box-shadow: 0 28px 70px rgba(17, 51, 85, 0.16);
      cursor: pointer;
    }
  }
`;

const ProductHeading = styled.h2`
  font-size: clamp(4rem, 7vw, 7rem);
  letter-spacing: -0.06em;
  line-height: 1;
`;

const ProductDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: inherit;
  opacity: 0.75;
  max-width: 56rem;
`;

const SectionIntro = styled.div`
  max-width: 80rem;
  margin-bottom: 5rem;
  h2 { color: #113355; font-size: clamp(3.2rem, 5vw, 5.4rem); line-height: 1.08; letter-spacing: -.045em; }
`;
const Eyebrow = styled.p`color: #d42539; font-size: 1.3rem; font-weight: 800; letter-spacing: .18em; margin-bottom: 1.4rem;`;
const ProductNumber = styled.span`font-size: 1.3rem; font-weight: 800; letter-spacing: .15em; color: #d42539; margin-bottom: auto;`;
const ProductLink = styled.span`display: flex; align-items: center; gap: .8rem; font-size: 1.5rem; font-weight: 750; margin-top: auto; color: #fff;`;
const ProductStatus = styled.span`font-size: 1.4rem; font-weight: 700; margin-top: auto; color: #d42539;`;

// const ProductImage = styled(AdvancedImage)`
//   width: 70%;
//   mix-blend-mode: multiply;
// `;

// const ProductImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;
