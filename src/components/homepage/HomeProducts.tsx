import styled from 'styled-components';
import { useTranslations } from '../../hooks/useTranslations';
import { ArrowRightAlt } from '@mui/icons-material';
import { generatePath, useNavigate } from 'react-router';

interface Box {
  id: number | string;
  title: string;
  description?: string;
  imagePath: string;
  imageAlt: string;
}

export const HomeProducts = () => {
  const { t, translations } = useTranslations();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: t(translations.common.window),
      imagePath:
        'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956017/images/dritare_zuosm2_ew29cd.jpg',
      imageAlt: t(translations.common.window),
    },
    {
      id: 2,
      title: t(translations.common.door),
      imagePath:
        'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956022/images/rehau4_uoykzd_mffdad.jpg',
      imageAlt: t(translations.common.door),
    },
    {
      id: 3,
      title: t(translations.common.blinds),
      imagePath:
        'https://res.cloudinary.com/dqtfurml7/image/upload/v1703974588/rolete_hsmxxh_bh4chs_rsaw17.jpg',
      imageAlt: t(translations.common.blinds),
    },
  ];

  return (
    <Section sectionImage="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956026/images/homepage-products_lleo9h_igeogw.jpg">
      <SectionHeading>
        {t(translations.common.products_that_we_offer)}
      </SectionHeading>
      <Boxes>
        {products?.map(box => (
          <Box key={box.id} image={box.imagePath}>
            <BoxHeading id="product-heading">{box.title}</BoxHeading>
          </Box>
        ))}
      </Boxes>

      <SeeMoreButton onClick={() => navigate(generatePath('/products'))}>
        {t(translations.common.see_more)} <ArrowRightAlt />
      </SeeMoreButton>
    </Section>
  );
};

const Section = styled.section<{ sectionImage: string }>`
  padding: clamp(6rem, 9vw, 11rem) clamp(2rem, 5vw, 6rem);
  background:
    linear-gradient(rgba(8, 33, 90, 0.8), rgba(8, 33, 90)),
    url(${({ sectionImage }) => sectionImage}) no-repeat center center/cover;
  min-height: 56rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-bottom: clamp(8rem, 10vw, 13rem);
  border-radius: 2.4rem;
  overflow: hidden;

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const SectionHeading = styled.h2`
  font-size: clamp(3.2rem, 5vw, 5.4rem);
  color: white;
  text-align: center;
  letter-spacing: -0.04em;

  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div<{ image: string }>`
  width: min(35rem, 100%);
  height: 32rem;
  background: url(${({ image }) => image}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.8rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 24px 45px rgba(0, 0, 0, 0.18);
  transition: transform 240ms ease, box-shadow 240ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(7, 27, 47, .8), transparent 65%);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 456px) {
    width: 30rem;
  }

  @media (max-width: 356px) {
    width: 27rem;
  }

  @media (max-width: 1200px) {
    background:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${({ image }) => image}) no-repeat center center/cover;
  }
`;

const BoxHeading = styled.h2`
  opacity: 1;
  color: white;
  font-size: 2.8rem;
  z-index: 2;
  position: absolute;
  left: 2.4rem;
  bottom: 2.4rem;

  @media (min-width: 1200px) {
    opacity: 1;
    font-size: 2.8rem;
  }
`;

const SeeMoreButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;
