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
  align-items: flex-start;
  min-height: 68rem;
  height: auto;
  color: #d42539;
  padding: clamp(4rem, 7vw, 8rem);
  background: #f5f7f9;
  border-radius: 2.4rem;
`;

const InfoSectionImg = styled.img`
  width: 100%;
  height: min(52rem, 55vw);
  min-height: 32rem;
  object-fit: contain;
  padding: 2rem;
  mix-blend-mode: multiply;
`;
