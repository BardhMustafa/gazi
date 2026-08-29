import { useTranslations } from '../hooks/useTranslations';
import { PageHero } from '../shared/components/PageHero';
import styled from 'styled-components';
import { ImagePlusText } from '../shared/components/ImagePlusText';
import {
  TextSection,
  TextSectionAbout,
} from '../components/homepage/AboutSection';
import { Paragraph } from '../shared/components/Paragraph';
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

      <ImagePlusText
        order={2}
        imageSection={
          <ImageSection>
            <Image
              cldImg={cld.image('images/rehau_3_pnvsz6_m2my8b')}
              alt="rehau-image"
            />
            <Image2
              cldImg={cld.image('images/rehau_rpmmyt_eamhhw')}
              alt="rehau-image"
            />
          </ImageSection>
        }
        textSection={
          <TextSection>
            <TextSectionAbout>{t(translations.common.rehau)}</TextSectionAbout>
            <TextSelectionHeading>
              {t(translations.rehau.why_rehau)}
            </TextSelectionHeading>
            <Paragraph>{t(translations.rehau.why_rehau_content)}</Paragraph>
          </TextSection>
        }
      />

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

const Image = styled(AdvancedImage)`
  object-fit: cover;
  width: 100%;
  height: 30rem;
  border-radius: 2rem;
  box-shadow: 0 24px 60px rgba(17, 51, 85, .16);

  @media (min-width: 768px) {
    width: 35rem;
    height: 40rem;
  }
`;

const Image2 = styled(Image)`
  transform: translate(0, 0);

  @media (min-width: 1200px) {
    transform: translate(65%, -35%);
    border: 8px solid #fff;
  }
`;

const TextSelectionHeading = styled.h2`
  font-size: clamp(3.6rem, 5vw, 5.4rem);
  line-height: 1.08;
  letter-spacing: -.045em;
  color: #113355;
  margin-bottom: 2rem;
`;
