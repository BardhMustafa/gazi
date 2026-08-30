import styled from 'styled-components';

interface ImagePlusTextProps {
  imageSection: React.ReactNode;
  textSection: React.ReactNode;
  order: number;
  bgColor?: string;
}

export const ImagePlusText = ({
  imageSection,
  textSection,
  order,
  bgColor,
}: ImagePlusTextProps) => {
  return (
    <Section bgColor={bgColor}>
      <ImageSection order={order}>{imageSection}</ImageSection>
      <TextSection order={order}>{textSection}</TextSection>
    </Section>
  );
};

const Section = styled.section<{ bgColor: string | undefined }>`
  display: flex;
  align-items: center;
  gap: clamp(4rem, 8vw, 10rem);
  padding: clamp(3rem, 7vw, 8rem);
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
  border-radius: 2.4rem;
  overflow: hidden;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  margin-bottom: 5rem;
`;

const ImageSection = styled.div<{ order: number }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  order: ${({ order }) => (order === 1 ? 1 : 2)};

  @media (min-width: 1200px) {
    order: ${({ order }) => (order === 1 ? 2 : 1)};
    flex-basis: 50%;
    flex-direction: row;
    position: relative;
    justify-content: center;
  }
`;

const TextSection = styled.div<{ order: number }>`
  flex-basis: 50%;
  margin: 0;
  margin-top: 0;
  order: ${({ order }) => (order === 1 ? 2 : 1)};

  @media (min-width: 768px) {
    order: ${({ order }) => (order === 1 ? 1 : 2)};
    padding-left: 0;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    order: ${({ order }) => (order === 1 ? 1 : 2)};
    padding-left: 0;
    margin-top: 0;
  }
`;
