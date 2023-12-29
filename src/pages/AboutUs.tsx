import { PageHero } from '../shared/components/PageHero';
import AboutHero from '../assets/images/about_2.jpg';
import About3 from '../assets/images/about_3.jpg';

import { useTranslations } from '../hooks/useTranslations';
import { AboutSection, TextSection } from '../components/homepage/AboutSection';
import { ImagePlusText } from '../shared/components/ImagePlusText';
import { Paragraph } from '../shared/components/Paragraph';
import styled from 'styled-components';

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
            <TextSelectionHeading>Sherbimet Tona</TextSelectionHeading>
            <Paragraph>
              KOMPANIA GAZI OFRON PRODUKTE TE PRODHUARA NGA MATERIALI/PROFILI
              GJERMAN ME UNIK DHE ME I PERSOSUR NE TREG - REHAU, KU PREJ ME
              SHUME SE DY DEKADAVEJEMI PARTNERE ZYRTARE DHE TE AFIRMUAR TE KETIJ
              BRENDI. KOMPANIA JONË KARAKTERIZOHET ME VEÇORINË KUALITET,
              BESUESHMËRI DHE SINQERITET,KËTO JANË VIRTYTETQË NA KANE MBAJTUR
              KAQ GJATE NE TREG.
            </Paragraph>
          </StyledTextSection>
        }
      />
    </>
  );
};

export default AboutUs;

const ImageSection = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: 10%;
  width: 100%;
  height: 30rem;

  @media (min-width: 768px) {
    width: 40rem;
    height: 50rem;
  }
`;

const TextSelectionHeading = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;

const StyledTextSection = styled(TextSection)`
  @media (min-width: 768px) {
    margin-left: 14.5rem;
    width: 80%;
  }
`;
