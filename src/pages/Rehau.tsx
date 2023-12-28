import { useTranslations } from '../hooks/useTranslations';
import { PageHero } from '../shared/components/PageHero';
import RehauHeroImage from '../assets/images/rehau2.jpg';
import RehauImage from '../assets/images/rehau.jpg';
import Rehau2Image from '../assets/images/rehau_3.jpg';
import styled from 'styled-components';
import { ImagePlusText } from '../shared/components/ImagePlusText';
import {
  TextSection,
  TextSectionAbout,
} from '../components/homepage/AboutSection';
import { Heading2 } from '../shared/components/Heading2';
import { Paragraph } from '../shared/components/Paragraph';

const Rehau = () => {
  const { t, translations } = useTranslations();

  return (
    <>
      <PageHero
        title={t(translations.common.rehau)}
        backgroundImagePath={RehauHeroImage}
      />

      <ImagePlusText
        imageSection={
          <ImageSection>
            <Image src={Rehau2Image} alt="rehau-image" />
            <Image2 src={RehauImage} alt="rehau-image" />
          </ImageSection>
        }
        textSection={
          <TextSection>
            <TextSectionAbout>
              {t(translations.common.aboutUs)}
            </TextSectionAbout>
            <TextSelectionHeading>Why Rehau</TextSelectionHeading>
            <Paragraph>
              Një nga markat lider dhe kryesor për zgjidhje, e bazuar në
              polimere në sektorin e ndërtimit, atë automobilistik dhe në
              sektorin industrial, me më shumë se 20.000 të punësuar në mbarë
              botën. Inovacione dhe përparim në kohëra të mira dhe me shumë
              sfida: Mësoni fakte interesante për historinë tonë të suksesit dhe
              rrugëtimin që po e ndjekim, duke u fokusuar në qëndrueshmëri dhe
              në kërkesat e brezave të ardhshëm.
            </Paragraph>
          </TextSection>
        }
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
