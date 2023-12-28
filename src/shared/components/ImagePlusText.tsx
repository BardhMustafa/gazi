import styled from 'styled-components';

interface ImagePlusTextProps {
  imageSection: React.ReactNode;
  textSection: React.ReactNode;
}

export const ImagePlusText = ({
  imageSection,
  textSection,
}: ImagePlusTextProps) => {
  return (
    <Section>
      <ImageSection>{imageSection}</ImageSection>
      <TextSection>{textSection}</TextSection>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  padding-top: 3rem;

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

const TextSection = styled.div`
  flex-basis: 50%;
  margin: 0;

  @media (min-width: 768px) {
    padding-left: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;
