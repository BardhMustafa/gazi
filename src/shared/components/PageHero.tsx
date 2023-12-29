import styled from 'styled-components';

interface PageHeroProps {
  title: string;
  backgroundImagePath: string;
}

export const PageHero = ({ title, backgroundImagePath }: PageHeroProps) => {
  return (
    <Container bgImage={backgroundImagePath}>
      <ContactHeading>{title}</ContactHeading>
    </Container>
  );
};

export const Container = styled.div<{ bgImage: string }>`
  width: 100vw;
  height: 40rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 0, 0, 0.5)),
    url(${props => props.bgImage});
  background-position: center 30%;
  background-size: cover;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
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
