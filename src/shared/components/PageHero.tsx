import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface PageHeroProps {
  title: string;
  backgroundImagePath: string;
}

export const PageHero = ({ title, backgroundImagePath }: PageHeroProps) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById('page-hero-container') as HTMLElement;
    setPortalRoot(root);
  }, []);

  if (portalRoot) {
    return createPortal(
      <Container bgImage={backgroundImagePath}>
        <ContactHeading>{title}</ContactHeading>
      </Container>,
      portalRoot
    );
  }

  return (
    <Container bgImage={backgroundImagePath}>
      <ContactHeading>{title}</ContactHeading>
    </Container>
  );
};

export const Container = styled.div<{ bgImage: string }>`
  width: 100%;
  height: clamp(38rem, 52vw, 58rem);
  margin-top: 8.8rem;
  background: linear-gradient(110deg, rgba(17, 51, 85, 0.94), rgba(17, 51, 85, 0.35) 58%, rgba(212, 37, 57, 0.32)),
    url(${props => props.bgImage});
  background-position: center 30%;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  padding: 0 max(5vw, calc((100vw - 1400px) / 2));

  @media (min-width: 768px) {
    height: 40rem;
  }

  @media (min-width: 1950px) {
    height: 60rem;
  }
`;

const ContactHeading = styled.h1`
  font-size: clamp(4.5rem, 8vw, 8.5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
  max-width: 900px;
  text-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
`;
