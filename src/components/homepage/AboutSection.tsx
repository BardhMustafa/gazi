import styled from 'styled-components';
import { Heading2 } from '../../shared/components/Heading2';
import { Paragraph } from '../../shared/components/Paragraph';
import { useTranslations } from '../../hooks/useTranslations';
import AboutImage from '../../assets/images/about_1.jpg';

export const AboutSection = () => {
  const { t, translations } = useTranslations();
  return (
    <Section>
      <ImageSection>
        <Image src={AboutImage} alt="worker" />
        <YearsOfExperience>
          <h3>28</h3>
          <p>{t(translations.common.years_of_experience)}</p>
        </YearsOfExperience>
      </ImageSection>
      <TextSection>
        <TextSectionAbout>{t(translations.common.aboutUs)}</TextSectionAbout>
        <Heading2>Kush jemi ne?</Heading2>
        <Paragraph>
          KOMPANIA E SPECIALIZUAR PER PRODHIMIN E DYERVE, DRITAREVE DHE FASADAVE
          GAZI, NE GJILAN, ËSHTE KOMPANI E CILA ESHTE THEMELUAR NE VITIN 1995
          DHESI E TILLE OPERON SUKSESSHEM PREJ 25 VITEVE ME NJE STAF TE
          PROFESIONALIZUAR DHE ME MAKINERITE ME MODERNE.
        </Paragraph>
      </TextSection>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  padding-top: 10rem;
  margin-bottom: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: 568px) {
    flex-direction: row;
    position: relative;
  }

  @media (min-width: 1024px) {
    flex-basis: 50%;
    flex-direction: row;
    position: relative;
    justify-content: center;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 40rem;
  height: 50rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const YearsOfExperience = styled.div`
  position: static;
  width: 100%;
  height: 15rem;
  background-color: #1e1e21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(30, 30, 33, 0.8);
  backdrop-filter: saturate(180%) blur(10px);
  color: white;

  & > h3 {
    font-size: 5rem;
    color: #d42539;
    margin: 0;
    margin-top: -1rem;
  }

  & > p {
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: -1rem;
  }

  @media (min-width: 568px) {
    position: absolute;
    top: 52%;
    right: -12%;
    width: 24rem;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 52%;
    right: 18%;
    translate: translateX(50%);
    width: 24rem;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 52%;
    right: 12%;
    width: 24rem;
  }
`;

export const TextSection = styled.div`
  flex-basis: 50%;
  margin: 0;

  @media (min-width: 768px) {
    padding-left: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
  }

  & > p {
    width: 100%;

    @media (min-width: 768px) {
      width: 80%;
    }
  }
`;

export const TextSectionAbout = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #d42539;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
