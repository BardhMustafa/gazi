import { useTranslations } from '../hooks/useTranslations';
import SlideShow from '../components/slideshow/Slidershow';
import { ImagePlusText } from '../shared/components/ImagePlusText';
import GaziRehau from '../assets/factory/RehauGazi.jpg';
import GaziFront from '../assets/factory/GaziFac.jpg';
import styled from 'styled-components';
import { Heading2 } from '../shared/components/Heading2';
import { Paragraph } from '../shared/components/Paragraph';
import HeroSection from '../components/HeroSecion';
import InsideFactory from '../assets/factory/InsideFac.jpg';
import { TextSectionAbout } from '../components/homepage/AboutSection';
import GridLayout from '../components/layout/Grid';
import { Stack } from '@mui/material';

const HomePage = () => {
  const { t, translations } = useTranslations();

  return (
    <>
      <SlideShow />

      <ImagePlusText
        order={2}
        imageSection={
          <ImageSection>
            <Image src={GaziRehau} alt="rehau-image" />
            <Image2 src={GaziFront} alt="rehau-image" />
          </ImageSection>
        }
        textSection={
          <>
            <Heading2 style={{ color: '#e91b37' }}>GAZI</Heading2>
            <Paragraph>
              {t(translations.homepage['first-section-content'])}
            </Paragraph>
          </>
        }
      />
      <HeroSection
        height={500}
        background={InsideFactory}
        children={
          <Stack spacing={1}>
            <TextSection>
              <TextSectionAbout>REHAU</TextSectionAbout>
              <TextSelectionHeading>GAZI & REHAU</TextSelectionHeading>
              <Paragraph>
                {t(translations.homepage['gazi-rehau-section'])}
              </Paragraph>
            </TextSection>
            <GridLayout
              items={[
                <Heading2 color="#e91b37" key="1">
                  Synego
                </Heading2>,
                <Heading2 color="#e91b37" key="2">
                  Geneo
                </Heading2>,
                <Heading2 color="#e91b37" key="3">
                  Artevo
                </Heading2>,
              ]}
            />
          </Stack>
        }
        fontColor="black"
      />
    </>
  );
};

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
const TextSelectionHeading = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;
const TextSection = styled.div`
  flex-basis: 100%;
  margin: 0;

  @media (min-width: 768px) {
    padding-left: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;

export default HomePage;
