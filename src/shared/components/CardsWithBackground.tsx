import styled from 'styled-components';
import { cloudinaryImage } from '../../utils/cloudinaryImage';

interface Box {
  id: number | string;
  title: string;
  description?: string;
  imagePath: string;
  imageAlt: string;
}

interface CardsWithBackgroundProps {
  title: string;
  subtitle?: string;
  boxes: Box[];
  sectionImage: string;
}

export const CardsWithBackground = ({
  title,
  subtitle,
  boxes,
  sectionImage,
}: CardsWithBackgroundProps) => {
  return (
    <Section sectionImage={cloudinaryImage(sectionImage, 1800)}>
      <InfoSection>
        <InfoSectionHeading>{title}</InfoSectionHeading>
        {subtitle && <InfoSectionDesc>{subtitle}</InfoSectionDesc>}
      </InfoSection>
      <Boxes>
        {boxes?.map(box => (
          <Box description={!!box.description} key={box.id}>
            <BoxImage>
              <Image
                src={cloudinaryImage(box.imagePath, 720)}
                alt={box.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </BoxImage>
            <BoxInfo>
              <BoxInfoTitle>{box.title}</BoxInfoTitle>
              <BoxInfoDesc>{box.description}</BoxInfoDesc>
            </BoxInfo>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

const Section = styled.section<{ sectionImage: string }>`
  background:
    linear-gradient(rgba(8, 33, 90, 0.8), rgba(8, 33, 90)),
    url(${({ sectionImage }) => sectionImage}) no-repeat center center/cover;
  min-height: 72rem;
  padding: clamp(6rem, 9vw, 10rem) clamp(2rem, 5vw, 6rem);
  border-radius: 2.4rem;
`;

const InfoSection = styled.div`
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  @media (min-width: 768px) {
    height: 25rem;
  }
`;

const InfoSectionHeading = styled.h3`
  font-size: clamp(3.2rem, 5vw, 5.2rem);
  line-height: 1.2;
  margin-bottom: 2rem;
`;

const InfoSectionDesc = styled.p`
  width: 80%;
  font-size: 1.6rem;
  line-height: 1.8;
  color: rgba(255,255,255,.72);

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const Boxes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  margin-top: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div<{ description: boolean }>`
  min-height: ${props => (props.description ? '48rem' : '30rem')};
  width: min(35rem, 100%);
  background-color: white;
  border: 1px solid rgba(255,255,255,.3);
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 28px 60px rgba(0,0,0,.22);
  transition: transform 220ms ease;
  &:hover { transform: translateY(-7px); }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BoxImage = styled.div`
  background-color: white;
  height: 22rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const BoxInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;
`;

const BoxInfoTitle = styled.h4`
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #113355;
`;

const BoxInfoDesc = styled.p`
  font-size: 1.4rem;
  color: #647383;
  line-height: 1.8;
  padding: 0;
`;
