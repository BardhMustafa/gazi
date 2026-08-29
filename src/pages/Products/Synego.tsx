import { InfoSection } from '../../components/homepage/InfoSection';
import { useTranslations } from '../../hooks/useTranslations';
import styled from 'styled-components';
import CustomizedTables from '../../components/Table/Table';

const Synego = () => {
  const { t, translations } = useTranslations();

  const synegoWindowGeneral = {
    data: [
      { key: t(translations.synego['general-table-key1']), value: t(translations.synego['general-table-value1']) },
      { key: t(translations.synego['general-table-key2']), value: t(translations.synego['general-table-value2']) },
      { key: t(translations.synego['general-table-key3']), value: t(translations.synego['general-table-value3']) },
      { key: t(translations.synego['general-table-key4']), value: t(translations.synego['general-table-value4']) },
      { key: t(translations.synego['general-table-key5']), value: t(translations.synego['general-table-value5']) },
      { key: t(translations.synego['general-table-key6']), value: t(translations.synego['general-table-value6']) },
      { key: t(translations.synego['general-table-key7']), value: t(translations.synego['general-table-value7']) },
    ],
  };

  const synegoWindowCharacteristics = {
    data: [
      { key: t(translations.synego['characteristic-table-key1']), value: t(translations.synego['characteristic-table1-value1']) },
      { key: t(translations.synego['characteristic-table-key2']), value: t(translations.synego['characteristic-table1-value2']) },
      { key: t(translations.synego['characteristic-table-key3']), value: t(translations.synego['characteristic-table1-value3']) },
      { key: t(translations.synego['characteristic-table-key4']), value: 'B5' },
      { key: t(translations.synego['characteristic-table-key5']), value: '9A' },
      { key: t(translations.synego['characteristic-table-key6']), value: '4' },
      { key: t(translations.synego['characteristic-table-key7']), value: '2' },
    ],
  };

  const brilliantGeneral = {
    data: [
      { key: t(translations.synego['general-table-key1']), value: t(translations.synego['general-table2-value1']) },
      { key: t(translations.synego['general-table-key2']), value: t(translations.synego['general-table2-value2']) },
      { key: t(translations.synego['general-table-key3']), value: t(translations.synego['general-table2-value3']) },
      { key: t(translations.synego['general-table-key4']), value: '5' },
      { key: t(translations.synego['general-table-key5']), value: t(translations.synego['general-table2-value5']) },
      { key: t(translations.synego['general-table-key6']), value: t(translations.synego['general-table2-value6']) },
      { key: t(translations.synego['general-table-key7']), value: t(translations.synego['general-table2-value7']) },
    ],
  };

  const brilliantCharacteristics = {
    data: [
      { key: t(translations.synego['characteristic-table-key1']), value: t(translations.synego['characteristic-table2-value1']) },
      { key: t(translations.synego['characteristic-table-key2']), value: t(translations.synego['characteristic-table2-value2']) },
      { key: t(translations.synego['characteristic-table-key3']), value: t(translations.synego['characteristic-table2-value3']) },
      { key: t(translations.synego['characteristic-table-key4']), value: 'B5' },
      { key: t(translations.synego['characteristic-table-key5']), value: '9A' },
      { key: t(translations.synego['characteristic-table-key6']), value: '4' },
      { key: t(translations.synego['characteristic-table-key7']), value: '1' },
    ],
  };

  return (
    <Page>
      <InfoSection
        title="Synego"
        imageSrc="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956023/images/synego_1_ydmkpd_hyuavx.jpg"
      />

      <Intro>
        <Eyebrow>REHAU SYNEGO</Eyebrow>
        <IntroText>{t(translations.synego['synego-dsp'])}</IntroText>
      </Intro>

      <BenefitsGrid>
        <BenefitCard>
          <CardNumber>01</CardNumber>
          <CardTitle>{t(translations.synego['synego-window'])}</CardTitle>
          <FeatureList>
            <li>{t(translations.synego['synego-window-p1'])}</li>
            <li>{t(translations.synego['synego-window-p2'])}</li>
            <li>{t(translations.synego['synego-window-p3'])}</li>
            <li>{t(translations.synego['synego-window-p4'])}</li>
          </FeatureList>
        </BenefitCard>

        <BenefitCard $dark>
          <CardNumber>02</CardNumber>
          <CardTitle>{t(translations.synego['synego-brilliant'])}</CardTitle>
          <FeatureList>
            <li>{t(translations.synego['synego-brilliant-p1'])}</li>
            <li>{t(translations.synego['synego-brilliant-p2'])}</li>
            <li>{t(translations.synego['synego-brilliant-p3'])}</li>
          </FeatureList>
        </BenefitCard>
      </BenefitsGrid>

      <Specifications>
        <SpecificationGroup>
          <SectionHeading>
            <SectionIndex>01</SectionIndex>
            <div>
              <Eyebrow>TË DHËNAT TEKNIKE</Eyebrow>
              <h2>Dritaret Synego</h2>
              <p>Përmbledhje e dimensioneve, performancës dhe klasifikimeve teknike të sistemit standard Synego.</p>
            </div>
          </SectionHeading>
          <TablesGrid>
            <CustomizedTables title="Të përgjithshme" data={synegoWindowGeneral} />
            <CustomizedTables title="Karakteristikat" data={synegoWindowCharacteristics} />
          </TablesGrid>
        </SpecificationGroup>

        <SpecificationGroup>
          <SectionHeading>
            <SectionIndex>02</SectionIndex>
            <div>
              <Eyebrow>TË DHËNAT TEKNIKE</Eyebrow>
              <h2>Brillant Design</h2>
              <p>Specifikimet kryesore për variantin Brillant Design, të organizuara për krahasim të shpejtë.</p>
            </div>
          </SectionHeading>
          <TablesGrid>
            <CustomizedTables title="Të përgjithshme" data={brilliantGeneral} />
            <CustomizedTables title="Karakteristikat" data={brilliantCharacteristics} />
          </TablesGrid>
        </SpecificationGroup>
      </Specifications>
    </Page>
  );
};

export default Synego;

const Page = styled.div`
  padding-bottom: clamp(5rem, 8vw, 10rem);
`;

const Intro = styled.section`
  max-width: 96rem;
  margin: 0 auto clamp(5rem, 8vw, 9rem);
  text-align: center;
`;

const Eyebrow = styled.p`
  color: #d42539;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  margin-bottom: 1.4rem;
`;

const IntroText = styled.p`
  color: #113355;
  font-size: clamp(2.2rem, 3.3vw, 3.5rem);
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: -0.025em;
`;

const BenefitsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.article<{ $dark?: boolean }>`
  min-height: 38rem;
  padding: clamp(3rem, 5vw, 5rem);
  border: 1px solid ${({ $dark }) => ($dark ? 'transparent' : '#e5e9ed')};
  border-radius: 2.4rem;
  background: ${({ $dark }) =>
    $dark ? 'linear-gradient(145deg, #113355, #0a2947)' : '#f5f7f9'};
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#113355')};
  box-shadow: ${({ $dark }) =>
    $dark ? '0 26px 70px rgba(17, 51, 85, 0.2)' : 'none'};
`;

const CardNumber = styled.span`
  display: block;
  color: #d42539;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  margin-bottom: 5rem;
`;

const CardTitle = styled.h2`
  font-size: clamp(2.8rem, 4vw, 4.2rem);
  line-height: 1.08;
  letter-spacing: -0.045em;
  margin-bottom: 2.8rem;
`;

const FeatureList = styled.ul`
  display: grid;
  gap: 1.5rem;
  list-style: none;

  li {
    position: relative;
    padding-left: 2.4rem;
    font-size: 1.55rem;
    line-height: 1.7;
    opacity: 0.78;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.85em;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: #d42539;
  }
`;

const Specifications = styled.div`
  display: grid;
  gap: clamp(8rem, 12vw, 15rem);
`;

const SpecificationGroup = styled.section`
  margin-bottom: 0;
`;

const SectionHeading = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
  max-width: 90rem;
  margin-bottom: 4.5rem;

  h2 {
    color: #113355;
    font-size: clamp(3.5rem, 5vw, 5.6rem);
    line-height: 1.05;
    letter-spacing: -0.05em;
    margin-bottom: 1.5rem;
  }

  p:not(${Eyebrow}) {
    color: #647383;
    font-size: 1.6rem;
    line-height: 1.75;
    max-width: 66rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SectionIndex = styled.span`
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

const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4rem;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
