import styled from 'styled-components';
import backgroundImage from '../../assets/images/contact_hero.jpg';
import { useTranslations } from '../../hooks/useTranslations';

export const ContactHero = () => {
  const { t, translations } = useTranslations();

  return (
    <Container>
      <ContactHeading>{t(translations.common.contact_us)}</ContactHeading>
    </Container>
  );
};

export const Container = styled.div`
  width: 100vw;
  height: 60rem;
  background: url(${backgroundImage});
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 0, 0, 0.5)),
    url(${backgroundImage});
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

  @media (max-width: 768px) {
    height: 40rem;
  }

  @media (max-width: 1024px) {
    height: 50rem;
  }
`;

const ContactHeading = styled.h1`
  font-size: 4rem;
`;
