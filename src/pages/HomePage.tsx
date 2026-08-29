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
import { generatePath, useNavigate } from 'react-router';

import { HomeProducts } from '../components/homepage/HomeProducts';
import { cloudinaryImage } from '../utils/cloudinaryImage';

const HomePage = () => {
  const { t, translations } = useTranslations();
  const navigate = useNavigate();
  return (
    <>
      <SlideShow />
      <ImagePlusText
        order={2}
        bgColor="#f2f2f2"
        imageSection={
          <ImageSection>
            <Image
              src={cloudinaryImage(
                'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977377/images/homepage_2_ngqu3o.jpg',
                900
              )}
              alt="home-about-us-image-1"
              loading="lazy"
              decoding="async"
            />
            <Image2
              src={cloudinaryImage(
                'https://res.cloudinary.com/dqtfurml7/image/upload/v1703977376/images/gazi_front_jif88b.jpg',
                900
              )}
              alt="rehau-image"
              loading="lazy"
              decoding="async"
            />
          </ImageSection>
        }
        textSection={
          <>
            <Heading2 style={{ color: '#e91b37' }}>GAZI</Heading2>
            <Paragraph>
              {t(translations.homepage.first_section_content)}
            </Paragraph>
            <Button onClick={() => navigate(generatePath('/about-us'))}>
              {t(translations.common.aboutUs)}
            </Button>
          </>
        }
      />

      <HeroSection
        height={700}
        background="https://res.cloudinary.com/dqtfurml7/image/upload/v1703977376/images/homepage_3_qq61pz.jpg"
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

      <PartnersSection>
        <PartnersHeader>
          <PartnersEyebrow>GAZI NETWORK</PartnersEyebrow>
          <PartnersTitle>
            {t(translations.homepage['our-partners'])}
          </PartnersTitle>
        </PartnersHeader>
        <PartnersGrid>
          <PartnerCard>
            <PartnerLogoWrap>
              <PartnerLogo
                src={cloudinaryImage(
                  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956150/images/alumil_uaiwz8.png',
                  420
                )}
                alt="Alumil"
                loading="lazy"
                decoding="async"
              />
            </PartnerLogoWrap>
            <PartnerName>Alumil</PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerLogoWrap>
              <PartnerLogo
                src={cloudinaryImage(
                  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956150/images/rehau_whgfvy.png',
                  420
                )}
                alt="REHAU"
                loading="lazy"
                decoding="async"
              />
            </PartnerLogoWrap>
            <PartnerName>REHAU</PartnerName>
          </PartnerCard>
          <PartnerCard>
            <PartnerLogoWrap>
              <PartnerLogo
                src={cloudinaryImage(
                  'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956150/images/wurth_qx1mbn.png',
                  420
                )}
                alt="Würth"
                loading="lazy"
                decoding="async"
              />
            </PartnerLogoWrap>
            <PartnerName>Würth</PartnerName>
          </PartnerCard>
        </PartnersGrid>
      </PartnersSection>
    </>
  );
};

const PartnersSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(6rem, 9vw, 10rem) clamp(2rem, 5vw, 6rem);
  border-radius: 2.4rem;
  background:
    radial-gradient(circle at 85% 10%, rgba(212, 37, 57, .18), transparent 30%),
    linear-gradient(145deg, #113355, #0a2947);
  color: #fff;
  box-shadow: 0 28px 70px rgba(17, 51, 85, .2);
`;

const PartnersHeader = styled.div`
  max-width: 72rem;
  margin: 0 auto clamp(4rem, 6vw, 6rem);
  text-align: center;
`;

const PartnersEyebrow = styled.p`
  color: #ef5365;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: .2em;
  margin-bottom: 1.4rem;
`;

const PartnersTitle = styled.h2`
  font-size: clamp(3.8rem, 5vw, 5.8rem);
  line-height: 1.08;
  letter-spacing: -.05em;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  max-width: 112rem;
  margin: 0 auto;

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, .16);
  border-radius: 2rem;
  background: rgba(255, 255, 255, .08);
  transition: transform 220ms ease, background-color 220ms ease;

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, .13);
  }
`;

const PartnerLogoWrap = styled.div`
  display: grid;
  place-items: center;
  min-height: 18rem;
  padding: 3rem;
  border-radius: 1.4rem;
  background: #fff;
`;

const PartnerLogo = styled.img`
  display: block;
  width: min(100%, 20rem);
  height: 8rem;
  object-fit: contain;
`;

const PartnerName = styled.h3`
  padding: 2rem 1.2rem 1.2rem;
  color: rgba(255, 255, 255, .82);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-align: center;
  text-transform: uppercase;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 34rem;
  border-radius: 2rem;
  box-shadow: 0 24px 60px rgba(17, 51, 85, 0.18);

  @media (min-width: 768px) {
    width: 35rem;
    height: 40rem;
  }
`;

const Image2 = styled(Image)`
  transform: translate(0, 0);

  @media (min-width: 1200px) {
    transform: translate(58%, -28%);
    border: 8px solid #f2f2f2;
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
  font-size: clamp(4rem, 6vw, 7rem);
  line-height: 1;
  letter-spacing: -0.05em;
  margin-bottom: 2rem;
`;

const TextSection = styled.div`
  flex-basis: 100%;
  margin: 0;
  padding: 5rem 0;
  max-width: 112rem;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding-left: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;

export default HomePage;
