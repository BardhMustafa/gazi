import { PageHero } from '../shared/components/PageHero';
import AboutHero from '../assets/images/about_2.jpg';
import About3 from '../assets/images/about_3.jpg';

import { useTranslations } from '../hooks/useTranslations';
import { AboutSection, TextSection } from '../components/homepage/AboutSection';
import { ImagePlusText } from '../shared/components/ImagePlusText';
import { Paragraph } from '../shared/components/Paragraph';
import styled from 'styled-components';
import { AboutProducts } from '../components/about/AboutProducts';

const AboutUs = () => {
  const { t, translations } = useTranslations();

  return (
    <>
      <PageHero
        title={t(translations.common.aboutUs)}
        backgroundImagePath={AboutHero}
      />

      <AboutSection />

      <ImagePlusText
        order={1}
        imageSection={
          <ImageSection>
            <Image src={About3} alt="rehau-image" />
          </ImageSection>
        }
        textSection={
          <StyledTextSection>
            <TextSelectionHeading>
              {t(translations.about.our_services)}
            </TextSelectionHeading>
            <Paragraph>{t(translations.about.our_services_desc)}</Paragraph>
          </StyledTextSection>
        }
      />

      <AboutProducts />
    </>
  );
};

export default AboutUs;

const ImageSection = styled.div`
  margin-top: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50rem;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

const TextSelectionHeading = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;

const StyledTextSection = styled(TextSection)`
  margin-top: 0;

  @media (min-width: 768px) {
    margin-left: 14.5rem;
    width: 80%;
  }
`;
