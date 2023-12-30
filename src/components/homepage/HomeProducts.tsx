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
        'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956028/images/dyer_ovaxf2_wvbpur.jpg',
      imageAlt: t(translations.common.door),
    },
    {
      id: 3,
      title: t(translations.common.blinds),
      imagePath:
        'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956030/images/rolete_hsmxxh_bh4chs.jpg',
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
  padding: 3rem 0;
  background:
    linear-gradient(rgba(8, 33, 90, 0.8), rgba(8, 33, 90)),
    url(${({ sectionImage }) => sectionImage}) no-repeat center center/cover;
  min-height: 50rem;
  margin-bottom: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-bottom: 5rem;

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  color: white;
  text-align: center;

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
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div<{ image: string }>`
  width: 35rem;
  height: 25rem;
  background: url(${({ image }) => image}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    &::after {
      content: '';
      width: 35rem;
      height: 25rem;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
    }

    h2 {
      opacity: 1;
    }
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
  font-size: 2rem;
  z-index: 2;

  @media (min-width: 1200px) {
    opacity: 0;
    font-size: 2.8rem;
  }
`;

const SeeMoreButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;
