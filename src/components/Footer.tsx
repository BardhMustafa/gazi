import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../App';

export const Footer = () => {
  const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About' },
    { path: '/rehau', label: 'Rehau' },
    { path: '/products', label: 'Products' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <FooterStyles>
      <Container>
        <ContactSection>
          <Logo cldImg={cld.image('gazi_logo_eupb5e')} />
          <MainContactLink href="mailto: info@gazi.shpk">
            info@gazi.shpk
          </MainContactLink>
          <MainContactLink href={'tel: 049281270'}>
            +383 49 444 555
          </MainContactLink>
          <LogoLink href="https://www.facebook.com/GaziGjilan" target="_blank">
            <FacebookIcon style={{ color: '#1122dd', fontSize: '3.6rem' }} />
          </LogoLink>
        </ContactSection>
        <LinkColumnContainer>
          <Title>Links</Title>
          {menuLinks.map(item => (
            <LinkText to={item.path} key={item.path}>
              {item.label}
            </LinkText>
          ))}
        </LinkColumnContainer>
        <UnitColumnContainer>
          <div>
            <UnitTitle>Contact</UnitTitle>
            <UnitSubtitle>
              <UnitSubtitleLine>Gilan</UnitSubtitleLine>
              <UnitSubtitleLine>Rruga</UnitSubtitleLine>
              <UnitSubtitleLine>(49) 4446666</UnitSubtitleLine>
            </UnitSubtitle>
          </div>
        </UnitColumnContainer>
        <CopyrightSection>
          <CopyrightText>
            © 1995 – {new Date(Date.now()).getFullYear()} |<br />
            Gazi Shpk® All Rights Reserved
          </CopyrightText>
        </CopyrightSection>
      </Container>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  background-color: #f4f4f4;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 92px;
  padding: 96px 80px;
  gap: 8px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 10rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    padding: 40px 24px;
    row-gap: 40px;
    column-gap: 20px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  grid-column: 1 / span 2;
  grid-row: 1 / span 1;

  @media (max-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
  }
`;

const CopyrightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  grid-column: 1 / span 2;
  grid-row: 2 / span 1;

  @media (max-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 6 / span 1;
  }
`;

const MainContactLink = styled.a`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  width: fit-content;

  text-decoration: none;
  color: #333333;
`;

const LogoLink = styled.a`
  width: fit-content;
`;

const Logo = styled(AdvancedImage)`
  width: 5rem;
  height: 6rem;
`;

const Title = styled.h4`
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;

  color: #333333;
`;

const LinkText = styled(Link)`
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  width: fit-content;

  text-decoration: none;
  color: #333333;

  @media (max-width: 768px) {
    &:hover {
      color: #6d030f;
    }
    &:active {
      color: #6d030f;
    }
  }
` as typeof Link;

const UnitTitle = styled.h4`
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;

  color: #333333;
`;

const UnitSubtitle = styled.h5`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  color: #333333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const UnitSubtitleLine = styled.span`
  display: block;
  white-space: nowrap;
`;

const LinkColumnContainer = styled.div<{ first?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${props => (props.first ? 'min-width: 200px' : '')};
`;

const UnitColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-column: 5 / span 2;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 36px;
    grid-column: unset;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  color: #333333;
  margin-bottom: 0px;
`;
