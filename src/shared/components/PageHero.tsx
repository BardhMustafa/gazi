import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface PageHeroProps {
  title: string;
  backgroundImagePath: string;
}

const portalRoot = document.getElementById(
  'page-hero-container'
) as HTMLElement;

export const PageHero = ({ title, backgroundImagePath }: PageHeroProps) => {
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
  height: 40rem;
  margin-top: 7.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 0, 0, 0.5)),
    url(${props => props.bgImage});
  background-position: center 30%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (min-width: 768px) {
    height: 40rem;
  }

  @media (min-width: 1950px) {
    height: 60rem;
  }
`;

const ContactHeading = styled.h1`
  font-size: 4rem;
`;
