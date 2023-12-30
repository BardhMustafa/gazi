import { useTranslations } from '../hooks/useTranslations';
import SlideShow from '../components/slideshow/Slidershow';
import { ImagePlusText } from '../shared/components/ImagePlusText';
import styled from 'styled-components';
import { Heading2 } from '../shared/components/Heading2';
import { Paragraph } from '../shared/components/Paragraph';
import HeroSection from '../components/HeroSecion';
import { TextSectionAbout } from '../components/homepage/AboutSection';
import GridLayout from '../components/layout/Grid';
import { Stack, Typography } from '@mui/material';
import { Button } from '../shared/components/Button';
import { generatePath } from 'react-router';

import { HomeProducts } from '../components/homepage/HomeProducts';

const HomePage = () => {
  const { t, translations } = useTranslations();

  return (
    <>
      <SlideShow />
      <ImagePlusText
        order={2}
        bgColor="#f2f2f2"
        imageSection={
          <ImageSection>
            <Image
              src="https://res.cloudinary.com/dqtfurml7/image/upload/v1703955598/factory/Factory/RehauGazi_lr37j2.jpg"
              alt="rehau-image"
            />
            <Image2
              src="https://res.cloudinary.com/dqtfurml7/image/upload/v1703955581/factory/Factory/GaziFac_a1lnae.jpg"
              alt="rehau-image"
            />
          </ImageSection>
        }
        textSection={
          <>
            <Heading2 style={{ color: '#e91b37' }}>GAZI</Heading2>
            <Paragraph>
              {t(translations.homepage.first_section_content)}
            </Paragraph>
            <Button onClick={() => generatePath('/about-us')}>
              {t(translations.common.aboutUs)}
            </Button>
          </>
        }
      />

      <HeroSection
        height={700}
        background="https://res.cloudinary.com/dqtfurml7/image/upload/v1703955581/factory/Factory/InsideFac_uyxm84.jpg"
        children={
          <Stack>
            <TextSection>
              <TextSectionAbout>REHAU</TextSectionAbout>
              <TextSelectionHeading style={{ color: 'white' }}>
                GAZI & REHAU
              </TextSelectionHeading>
              <Paragraph style={{ color: 'white', fontWeight: 'bold' }}>
                {t(translations.homepage.gazi_rehau_section)}
              </Paragraph>
            </TextSection>
            <GridLayout
              items={[
                <Typography
                  variant="h1"
                  align="center"
                  style={{ alignContent: 'center' }}
                  color="#e91b37"
                  fontFamily="Poppins"
                  fontWeight="900"
                  key="1"
                >
                  Synego
                </Typography>,
                <Typography
                  variant="h1"
                  align="center"
                  style={{ alignContent: 'center' }}
                  color="#e91b37"
                  fontFamily="Poppins"
                  fontWeight="900"
                  key="2"
                >
                  Geneo
                </Typography>,
                <Typography
                  variant="h1"
                  align="center"
                  style={{ alignContent: 'center' }}
                  color="#e91b37"
                  fontFamily="Poppins"
                  fontWeight="900"
                  key="3"
                >
                  Artevo
                </Typography>,
              ]}
            />
          </Stack>
        }
        fontColor="black"
      />
      <HomeProducts />

      <GridLayout
        title={t(translations.homepage['our-partners'])}
        backgroundColor="#f2f2f2"
        items={[
          <SponsorImg
            src="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956150/images/alumil_uaiwz8.png"
            key="alumil"
          />,
          <SponsorImg
            src="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956150/images/rehau_whgfvy.png"
            key="rehau"
          />,
          <SponsorImg
            src="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956150/images/wurth_qx1mbn.png"
            key="wurth"
          />,
        ]}
      />
    </>
  );
};

const SponsorImg = styled.div<{ src: string }>`
  width: 100%;
  height: 100px;
  background-image: ${({ src }: { src: string }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  padding: 5rem 0;
  @media (min-width: 768px) {
    padding-left: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;

export default HomePage;
