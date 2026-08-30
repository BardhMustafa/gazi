import { InfoSection } from '../../components/homepage/InfoSection';
import { useTranslations } from '../../hooks/useTranslations';
import styled from 'styled-components';

const Geneo = () => {
  const { t, translations } = useTranslations();

  const advantages = [
    'advantages-table-key1',
    'advantages-table-key2',
    'advantages-table-key3',
    'advantages-table-key4',
    'advantages-table-key5',
    'advantages-table-key6',
    'advantages-table-key7',
  ] as const;

  const technicalValues = [
    'general-table-value2',
    'general-table-value3',
    'general-table-value4',
    'general-table-value5',
    'general-table-value6',
    'general-table-value7',
    'general-table-value8',
    'general-table-value9',
    'general-table-value10',
    'general-table-value11',
  ] as const;

  return (
    <Page>
      <InfoSection
        title="Geneo"
        imageSrc="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956018/images/geneo_emgney_nzvask.webp"
      />

      <Intro>
        <Eyebrow>REHAU GENEO</Eyebrow>
        <IntroText>{t(translations.geneo.first_section_content)}</IntroText>
      </Intro>

      <TechnologyBanner>
        <BannerNumber>01</BannerNumber>
        <div>
          <Eyebrow>{t(translations.redesign.geneo_system_technology)}</Eyebrow>
          <h2>{t(translations.geneo['general-table-value1'])}</h2>
          <p>{t(translations.redesign.geneo_technology_summary)}</p>
        </div>
      </TechnologyBanner>

      <ContentSection>
        <SectionHeading>
          <SectionNumber>02</SectionNumber>
          <div>
            <Eyebrow>{t(translations.geneo['advantages-table'])}</Eyebrow>
            <h2>{t(translations.redesign.geneo_advantages_title)}</h2>
          </div>
        </SectionHeading>
        <AdvantagesGrid>
          {advantages.map((key, index) => (
            <AdvantageCard key={key}>
              <CardIndex>{String(index + 1).padStart(2, '0')}</CardIndex>
              <p>{t(translations.geneo[key])}</p>
            </AdvantageCard>
          ))}
        </AdvantagesGrid>
      </ContentSection>

      <TechnicalSection>
        <SectionHeading>
          <SectionNumber>03</SectionNumber>
          <div>
            <Eyebrow>{t(translations.redesign.technical_data)}</Eyebrow>
            <h2>{t(translations.redesign.geneo_details_title)}</h2>
            <SectionDescription>
              {t(translations.redesign.geneo_details_summary)}
            </SectionDescription>
          </div>
        </SectionHeading>
        <TechnicalGrid>
          {technicalValues.map((key, index) => (
            <TechnicalItem key={key}>
              <CardIndex>{String(index + 1).padStart(2, '0')}</CardIndex>
              <p>{t(translations.geneo[key])}</p>
            </TechnicalItem>
          ))}
        </TechnicalGrid>
      </TechnicalSection>
    </Page>
  );
};

export default Geneo;

const Page = styled.div`
  padding-bottom: clamp(5rem, 8vw, 10rem);
`;

const Eyebrow = styled.p`
  color: #d42539;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  margin-bottom: 1.4rem;
`;

const Intro = styled.section`
  max-width: 96rem;
  margin: 0 auto clamp(6rem, 9vw, 11rem);
  text-align: center;
`;

const IntroText = styled.p`
  color: #113355;
  font-size: clamp(2.2rem, 3.3vw, 3.5rem);
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: -0.025em;
`;

const TechnologyBanner = styled.section`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: start;
  padding: clamp(4rem, 7vw, 8rem);
  border-radius: 2.4rem;
  background: linear-gradient(145deg, #113355, #0a2947);
  color: #fff;
  box-shadow: 0 28px 70px rgba(17, 51, 85, 0.22);

  h2 {
    max-width: 90rem;
    font-size: clamp(3.4rem, 5vw, 5.8rem);
    line-height: 1.08;
    letter-spacing: -0.05em;
    margin-bottom: 2rem;
  }

  p:last-child {
    max-width: 70rem;
    color: rgba(255, 255, 255, 0.68);
    font-size: 1.7rem;
    line-height: 1.7;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const BannerNumber = styled.span`
  display: grid;
  place-items: center;
  width: 5.4rem;
  height: 5.4rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #d42539;
  font-size: 1.3rem;
  font-weight: 800;
`;

const ContentSection = styled.section``;

const TechnicalSection = styled.section`
  margin-bottom: 0;
`;

const SectionHeading = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
  max-width: 96rem;
  margin-bottom: 4.5rem;

  h2 {
    color: #113355;
    font-size: clamp(3.5rem, 5vw, 5.6rem);
    line-height: 1.06;
    letter-spacing: -0.05em;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SectionNumber = styled.span`
  display: grid;
  place-items: center;
  width: 5.2rem;
  height: 5.2rem;
  border: 1px solid #e5e9ed;
  border-radius: 50%;
  color: #d42539;
  font-size: 1.3rem;
  font-weight: 800;
`;

const SectionDescription = styled.p`
  max-width: 68rem;
  color: #647383;
  font-size: 1.6rem;
  line-height: 1.75;
  margin-top: 1.5rem;
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.8rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.article`
  min-height: 21rem;
  padding: 2.8rem;
  border: 1px solid #e5e9ed;
  border-radius: 1.8rem;
  background: #f5f7f9;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 45px rgba(17, 51, 85, 0.1);
  }

  p {
    color: #113355;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.65;
  }
`;

const CardIndex = styled.span`
  display: block;
  color: #d42539;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  margin-bottom: 3rem;
`;

const TechnicalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid #e5e9ed;
  border-radius: 2.4rem;
  overflow: hidden;
  box-shadow: 0 20px 55px rgba(17, 51, 85, 0.08);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const TechnicalItem = styled.div`
  min-height: 14rem;
  padding: 2.8rem;
  background: #fff;
  border-right: 1px solid #e5e9ed;
  border-bottom: 1px solid #e5e9ed;

  &:nth-child(4n + 2),
  &:nth-child(4n + 3) {
    background: #f7f9fa;
  }

  p {
    color: #113355;
    font-size: 1.5rem;
    font-weight: 650;
    line-height: 1.65;
  }

  @media (max-width: 700px) {
    border-right: 0;
    &:nth-child(even) { background: #f7f9fa; }
    &:nth-child(odd) { background: #fff; }
  }
`;
