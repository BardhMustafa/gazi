import { useTranslations } from '../hooks/useTranslations';
import { PageHero } from '../shared/components/PageHero';
import RehauHeroImage from '../assets/images/rehau2.jpg';
import RehauImage from '../assets/images/rehau.jpg';
import Rehau2Image from '../assets/images/rehau_3.jpg';
import Rehau4Image from '../assets/images/rehau4.jpg';
import styled from 'styled-components';
import { ImagePlusText } from '../shared/components/ImagePlusText';
import {
  TextSection,
  TextSectionAbout,
} from '../components/homepage/AboutSection';
import { Paragraph } from '../shared/components/Paragraph';
import { CardsWithBackground } from '../shared/components/CardsWithBackground';

const Rehau = () => {
  const { t, translations } = useTranslations();

  const boxes = [
    {
      id: 1,
      title: t(translations.rehau['we-deserve-trust']),
      description: t(translations.rehau['we-deserve-trust-content']),
      imagePath: RehauHeroImage,
      imageAlt: t(translations.rehau['we-deserve-trust']),
    },
    {
      id: 2,
      title: t(translations.rehau['we-are-creators']),
      description: t(translations.rehau['we-are-creators-content']),
      imagePath: Rehau2Image,
      imageAlt: t(translations.rehau['we-are-creators']),
    },
    {
      id: 3,
      title: t(translations.rehau['we-are-loyal']),
      description: t(translations.rehau['we-are-loyal-content']),
      imagePath: RehauImage,
      imageAlt: t(translations.rehau['we-are-loyal']),
    },
  ];

  return (
    <>
      <PageHero
        title={t(translations.common.rehau)}
        backgroundImagePath={RehauHeroImage}
      />

      <ImagePlusText
        order={2}
        imageSection={
          <ImageSection>
            <Image src={Rehau2Image} alt="rehau-image" />
            <Image2 src={RehauImage} alt="rehau-image" />
          </ImageSection>
        }
        textSection={
          <TextSection>
            <TextSectionAbout>{t(translations.common.rehau)}</TextSectionAbout>
            <TextSelectionHeading>
              {t(translations.rehau['why_rehau'])}
            </TextSelectionHeading>
            <Paragraph>{t(translations.rehau['why_rehau_content'])}</Paragraph>
          </TextSection>
        }
      />

      <CardsWithBackground
        title={t(translations.rehau['rehau_values'])}
        subtitle={t(translations.rehau['rehau_values_desc'])}
        boxes={boxes}
        sectionImage={Rehau4Image}
      />
    </>
  );
};

export default Rehau;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    display: block;
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 30rem;

  @media (min-width: 768px) {
    width: 35rem;
    height: 40rem;
  }
`;

const Image2 = styled(Image)`
  transform: translate(0, 0);

  @media (min-width: 1200px) {
    transform: translate(65%, -35%);
  }
`;

const TextSelectionHeading = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;
