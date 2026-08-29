import { InfoSection } from '../../components/homepage/InfoSection';
import { useTranslations } from '../../hooks/useTranslations';
import styled from 'styled-components';

export const Artevo = () => {
  const { t, translations } = useTranslations();

  const pillars = [
    {
      number: '01',
      title: 'Dritë natyrale',
      description:
        'Sipërfaqe më të mëdha xhami që hapin ambientin dhe maksimizojnë ndriçimin natyral.',
    },
    {
      number: '02',
      title: 'Liri arkitekturore',
      description:
        'Përmasa dhe konfigurime fleksibile për projekte bashkëkohore me identitet unik.',
    },
    {
      number: '03',
      title: 'Dizajn i rafinuar',
      description:
        'Profile me linja të pastra që e vendosin pamjen, funksionin dhe komoditetin në ekuilibër.',
    },
    {
      number: '04',
      title: 'Qëndrueshmëri',
      description:
        'Një sistem i menduar për efikasitet, jetëgjatësi dhe përdorim të përgjegjshëm të materialeve.',
    },
  ];

  return (
    <Page>
      <InfoSection
        title="Artevo"
        imageSrc="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956017/images/artevo_kezr7o_iyu2of.jpg"
      />

      <Intro>
        <Eyebrow>REHAU ARTEVO</Eyebrow>
        <IntroText>{t(translations.artevo.first_section_content)}</IntroText>
      </Intro>

      <Statement>
        <StatementNumber>01</StatementNumber>
        <div>
          <Eyebrow>NJË DIMENSION I RI</Eyebrow>
          <h2>Më shumë hapësirë. Më shumë dritë. Më shumë liri.</h2>
          <p>
            ARTEVO kombinon sipërfaqe bujare xhami me një profil modern për të
            krijuar ambiente të hapura, të ndritshme dhe të qeta.
          </p>
        </div>
      </Statement>

      <PillarsSection>
        <SectionHeading>
          <SectionNumber>02</SectionNumber>
          <div>
            <Eyebrow>PARIMET E ARTEVO</Eyebrow>
            <h2>Projektuar rreth mënyrës moderne të jetesës.</h2>
          </div>
        </SectionHeading>
        <PillarsGrid>
          {pillars.map(pillar => (
            <PillarCard key={pillar.number}>
              <CardNumber>{pillar.number}</CardNumber>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </PillarCard>
          ))}
        </PillarsGrid>
      </PillarsSection>

      <ImageFeature>
        <ImagePanel
          src="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956017/images/artevo_kezr7o_iyu2of.jpg"
          alt="REHAU Artevo window system"
        />
        <ImageCopy>
          <Eyebrow>ARTEVO BY REHAU</Eyebrow>
          <h2>Elegancë që ndihet në çdo detaj.</h2>
          <p>
            Një zgjidhje premium për projekte ku arkitektura, drita dhe
            performanca duhet të funksionojnë si një tërësi.
          </p>
        </ImageCopy>
      </ImageFeature>
    </Page>
  );
};

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

const Statement = styled.section`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(2.5rem, 5vw, 5rem);
  padding: clamp(4rem, 7vw, 8rem);
  border-radius: 2.4rem;
  background: linear-gradient(145deg, #113355, #0a2947);
  color: #fff;
  box-shadow: 0 28px 70px rgba(17, 51, 85, 0.22);

  h2 {
    max-width: 90rem;
    font-size: clamp(3.4rem, 5.5vw, 6.2rem);
    line-height: 1.04;
    letter-spacing: -0.055em;
    margin-bottom: 2rem;
  }

  p:last-child {
    max-width: 72rem;
    color: rgba(255, 255, 255, 0.68);
    font-size: 1.7rem;
    line-height: 1.75;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const StatementNumber = styled.span`
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

const PillarsSection = styled.section``;

const SectionHeading = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 4rem);
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

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled.article`
  min-height: 27rem;
  padding: clamp(3rem, 5vw, 4.5rem);
  border: 1px solid #e5e9ed;
  border-radius: 2rem;
  background: #f5f7f9;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 50px rgba(17, 51, 85, 0.11);
  }

  h3 {
    color: #113355;
    font-size: 2.6rem;
    line-height: 1.15;
    letter-spacing: -0.035em;
    margin-bottom: 1.4rem;
  }

  p {
    color: #647383;
    font-size: 1.5rem;
    line-height: 1.7;
  }
`;

const CardNumber = styled.span`
  display: block;
  color: #d42539;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  margin-bottom: 4rem;
`;

const ImageFeature = styled.section`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  min-height: 52rem;
  margin-bottom: 0;
  border-radius: 2.4rem;
  overflow: hidden;
  background: #f5f7f9;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ImagePanel = styled.img`
  width: 100%;
  height: 100%;
  min-height: 42rem;
  object-fit: contain;
  padding: 4rem;
  mix-blend-mode: multiply;
`;

const ImageCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(4rem, 7vw, 8rem);

  h2 {
    color: #113355;
    font-size: clamp(3.4rem, 5vw, 5.4rem);
    line-height: 1.06;
    letter-spacing: -0.05em;
    margin-bottom: 2rem;
  }

  p:last-child {
    color: #647383;
    font-size: 1.6rem;
    line-height: 1.75;
  }
`;
