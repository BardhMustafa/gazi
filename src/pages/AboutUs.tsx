import { PageHero } from '../shared/components/PageHero';
import { AdvancedImage } from '@cloudinary/react';

import { useTranslations } from '../hooks/useTranslations';
import { AboutSection, TextSection } from '../components/homepage/AboutSection';
import { ImagePlusText } from '../shared/components/ImagePlusText';
import { Paragraph } from '../shared/components/Paragraph';
import styled from 'styled-components';
import { AboutProducts } from '../components/about/AboutProducts';
import { cld } from '../App';

const AboutUs = () => {
  const { t, translations } = useTranslations();

  return (
    <>
      <PageHero
        title={t(translations.common.aboutUs)}
        backgroundImagePath="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956017/images/about_2_jxyff1_hhu1p2.jpg"
      />

      <AboutSection />

      <ImagePlusText
        order={1}
        imageSection={
          <ImageSection>
            <Image cldImg={cld.image('images/about_3_vherwe_abtjvv')} />
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

const Image = styled(AdvancedImage)`
  object-fit: cover;
  width: 100%;
  height: 50rem;
  border-radius: 2rem;
  box-shadow: 0 24px 60px rgba(17, 51, 85, .14);

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

const TextSelectionHeading = styled.h2`
  font-size: clamp(3.6rem, 5vw, 5.4rem);
  line-height: 1.08;
  letter-spacing: -.045em;
  color: #113355;
  margin-bottom: 2rem;
`;

const StyledTextSection = styled(TextSection)`
  margin-top: 0;

  @media (min-width: 768px) {
    margin-left: 8rem;
    width: 80%;
  }
`;
