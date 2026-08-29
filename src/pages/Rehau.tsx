import { useTranslations } from '../hooks/useTranslations';
import { PageHero } from '../shared/components/PageHero';
import styled from 'styled-components';
import { CardsWithBackground } from '../shared/components/CardsWithBackground';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../App';

const Rehau = () => {
  const { t, translations } = useTranslations();

  const boxes = [
    {
      id: 1,
      title: t(translations.rehau.we_deserve_trust),
      description: t(translations.rehau.we_deserve_trust_content),
      imagePath:
        'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956023/images/rehau5_cicwji_p678kf.jpg',
      imageAlt: t(translations.rehau.we_deserve_trust),
    },
    {
      id: 2,
      title: t(translations.rehau.we_are_creators),
      description: t(translations.rehau.we_are_creators_content),
      imagePath:
        'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956023/images/rehau7_bxmuvh_okmrtm.jpg',
      imageAlt: t(translations.rehau.we_are_creators),
    },
    {
      id: 3,
      title: t(translations.rehau.we_are_loyal),
      description: t(translations.rehau.we_are_loyal_content),
      imagePath:
        'https://res.cloudinary.com/dqtfurml7/image/upload/v1703956023/images/rehau6_fj6qok_cqwfjj.jpg',
      imageAlt: t(translations.rehau.we_are_loyal),
    },
  ];

  return (
    <>
      <PageHero
        title={t(translations.common.rehau)}
        backgroundImagePath="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956022/images/rehau2_w9rcq7_ujjsaw.jpg"
      />

      <PartnerSection>
        <ImageSection>
          <ImageFrame>
            <Image
              cldImg={cld.image('images/rehau_3_pnvsz6_m2my8b')}
              alt="GAZI specialist inspecting a REHAU profile"
              loading="lazy"
            />
          </ImageFrame>
          <ImageFrameSecondary>
            <Image2
              cldImg={cld.image('images/rehau_rpmmyt_eamhhw')}
              alt="GAZI specialist working with a REHAU profile"
              loading="lazy"
            />
          </ImageFrameSecondary>
        </ImageSection>

        <PartnerCopy>
          <Eyebrow>{t(translations.common.rehau)}</Eyebrow>
          <TextSelectionHeading>
            {t(translations.rehau.why_rehau)}
          </TextSelectionHeading>
          <PartnerDescription>
            {t(translations.rehau.why_rehau_content)}
          </PartnerDescription>
          <PartnerFacts aria-label="REHAU partnership highlights">
            <Fact>
              <strong>20,000+</strong>
              <span>{t(translations.redesign.rehau_employees)}</span>
            </Fact>
            <Fact>
              <strong>Premium</strong>
              <span>{t(translations.redesign.rehau_polymer_systems)}</span>
            </Fact>
          </PartnerFacts>
        </PartnerCopy>
      </PartnerSection>

      <CardsWithBackground
        title={t(translations.rehau.rehau_values)}
        subtitle={t(translations.rehau.rehau_values_desc)}
        boxes={boxes}
        sectionImage="https://res.cloudinary.com/dmo0ndu9b/image/upload/v1703893517/rehau4_uoykzd.jpg"
      />
    </>
  );
};

export default Rehau;

const PartnerSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, .9fr);
  align-items: center;
  gap: clamp(4rem, 7vw, 9rem);
  margin-bottom: clamp(6rem, 9vw, 10rem);
  padding: clamp(3rem, 5vw, 6rem);
  border: 1px solid #e5e9ed;
  border-radius: 2.4rem;
  background: #f5f7f9;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: 1.08fr .92fr;
  align-items: end;
  gap: 1.8rem;
  min-width: 0;
`;

const Image = styled(AdvancedImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Image2 = styled(Image)`
  height: 100%;
`;

const ImageFrame = styled.div`
  height: clamp(38rem, 44vw, 58rem);
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 24px 60px rgba(17, 51, 85, .15);
`;

const ImageFrameSecondary = styled(ImageFrame)`
  height: clamp(30rem, 34vw, 44rem);
`;

const PartnerCopy = styled.div`
  max-width: 66rem;
`;

const TextSelectionHeading = styled.h2`
  font-size: clamp(3.6rem, 5vw, 5.4rem);
  line-height: 1.08;
  letter-spacing: -.045em;
  color: #113355;
  margin-bottom: 2rem;
`;

const Eyebrow = styled.p`
  color: #d42539;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: .18em;
  text-transform: uppercase;
  margin-bottom: 1.4rem;
`;

const PartnerDescription = styled.p`
  color: #647383;
  font-size: 1.7rem;
  line-height: 1.8;
`;

const PartnerFacts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 3.5rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Fact = styled.div`
  padding: 2rem;
  border: 1px solid #dfe5ea;
  border-radius: 1.5rem;
  background: #fff;

  strong,
  span {
    display: block;
  }

  strong {
    color: #113355;
    font-size: 2.2rem;
    margin-bottom: .5rem;
  }

  span {
    color: #647383;
    font-size: 1.3rem;
    line-height: 1.5;
  }
`;
