import styled from 'styled-components';

interface Box {
  id: number | string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
}

interface CardsWithBackgroundProps {
  title: string;
  subtitle: string;
  boxes: Box[];
  sectionImage: string;
}

export const CardsWithBackground = ({
  title,
  subtitle,
  boxes,
  sectionImage,
}: CardsWithBackgroundProps) => {
  console.log('sectionImage', sectionImage);
  return (
    <Section sectionImage={sectionImage}>
      <InfoSection>
        <InfoSectionHeading>{title}</InfoSectionHeading>
        <InfoSectionDesc>{subtitle}</InfoSectionDesc>
      </InfoSection>
      <Boxes>
        {boxes?.map(box => (
          <Box key={box.id}>
            <BoxImage>
              <Image src={box.imagePath} alt={box.imageAlt} />
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
  height: 50rem;
  margin-bottom: 30rem;
`;

const InfoSection = styled.div`
  height: 30rem;
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
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;

const InfoSectionDesc = styled.p`
  width: 80%;
  font-size: 1.4rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const Boxes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div`
  height: 50rem;
  width: 35rem;
  background-color: white;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

const BoxImage = styled.div`
  background-color: white;
  height: 20rem;
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
  align-items: center;
  padding: 2rem;
`;

const BoxInfoTitle = styled.h4`
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #272002;
`;

const BoxInfoDesc = styled.p`
  font-size: 1.4rem;
  color: #858585;
  line-height: 1.8;
  padding: 0 1rem;
`;
