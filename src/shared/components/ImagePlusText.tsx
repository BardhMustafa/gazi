import styled from 'styled-components';

interface ImagePlusTextProps {
  imageSection: React.ReactNode;
  textSection: React.ReactNode;
  order: number;
}

export const ImagePlusText = ({
  imageSection,
  textSection,
  order,
}: ImagePlusTextProps) => {
  return (
    <Section>
      <ImageSection order={order}>{imageSection}</ImageSection>
      <TextSection order={order}>{textSection}</TextSection>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  padding: 3rem;
  background-color: #f2f2f2;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div<{ order: number }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
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
  margin-top: 4rem;
  order: ${({ order }) => (order === 1 ? 2 : 1)};

  @media (min-width: 768px) {
    order: ${({ order }) => (order === 1 ? 1 : 2)};
    padding-left: 2rem;
    margin-top: 4rem;
  }

  @media (min-width: 1024px) {
    order: ${({ order }) => (order === 1 ? 1 : 2)};
    padding-left: 0;
    margin-top: 15rem;
  }
`;
