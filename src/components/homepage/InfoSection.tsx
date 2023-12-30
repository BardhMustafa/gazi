import styled from 'styled-components';
import { Heading2 } from '../../shared/components/Heading2';

interface InfoSectionProps {
  title: string;
  imageSrc: string;
}

export const InfoSection = ({ title, imageSrc }: InfoSectionProps) => {
  return (
    <Section>
      <Heading2>{title}</Heading2>
      <InfoSectionImg src={imageSrc} alt="info-section-image" />
    </Section>
  );
};

const Section = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
  height: 70rem;
  color: #d42539;
`;

const InfoSectionImg = styled.img`
  width: 100%;
  height: 62rem;
  object-fit: scale-down;
  padding: 2rem;
`;
