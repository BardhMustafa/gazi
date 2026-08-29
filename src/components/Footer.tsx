import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/gazi-logo.png';
import { useTranslations } from '../hooks/useTranslations';
import { NestedMenuLink } from './layout/NavLinks';

export const Footer = () => {
  const { t, translations } = useTranslations();
  const menuLinks: NestedMenuLink[] = [
    { path: '/', label: t(translations.common.home) },
    { path: '/about-us', label: t(translations.common.about) },
    { path: '/rehau', label: t(translations.common.rehau) },
    {
      path: '/products',
      label: t(translations.common.products),
      nestedLinks: [
        {
          path: '/products/pvc',
          label: 'pvc',
        },
        // {
        //   path: '/products/alumin',
        //   label: 'alumin',
        // },
      ],
    },
    {
      path: '/projects',
      label: t(translations.common.projects),
      nestedLinks: [
        {
          path: '/projects/showroom',
          label: 'showroom',
        },
        {
          path: '/projects/factory',
          label: 'factory',
        },
      ],
    },
    { path: '/contact', label: t(translations.common.contact) },
  ];

  return (
    <FooterStyles>
      <Container>
        <ContactSection>
          <Logo src={logo} alt="Gazi" />
          <FooterStatement>
            {t(translations.redesign.footer_statement)}
          </FooterStatement>
          <MainContactLink href="mailto:contact@gazi.shpk">
            contact@gazi.shpk
          </MainContactLink>
          <MainContactLink href={'tel: 044177222'}>
            (+383)44-177-222
          </MainContactLink>
          <MainContactLink>Vëllezrit Maliqi 7, Gjilan, Kosovë</MainContactLink>
          <LogoLink href="https://www.facebook.com/GaziGjilan" target="_blank" rel="noreferrer" aria-label="Gazi on Facebook">
            <FacebookIcon style={{ color: '#fff', fontSize: '2.4rem' }} />
          </LogoLink>
        </ContactSection>

        {/* New Link Column Container */}
        <LinkColumnContainer>
          {menuLinks.map(item => (
            <LinkText to={item.path} key={item.path}>
              {item.label}
            </LinkText>
          ))}
        </LinkColumnContainer>
      </Container>

      <CopyrightSection>
        <CopyrightText>
          © 1995 – {new Date(Date.now()).getFullYear()} | Gazi Shpk®{' '}
          {t(translations.common.all_rights_reserved)}
        </CopyrightText>
      </CopyrightSection>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  background-color: #0d2b49;
  color: #fff;
  border-top: 4px solid #d42539;
  margin-top: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 8px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 7rem clamp(2rem, 5vw, 5rem) 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  gap: 1.4rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CopyrightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 2.4rem;

  @media (max-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 6 / span 1;
    padding: 2rem;
  }
`;

const MainContactLink = styled.a`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  width: fit-content;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.82);
  transition: color 180ms ease;

  &:hover { color: #fff; }
`;

const LogoLink = styled.a`
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background: #d42539;
  display: grid;
  place-items: center;
  margin-top: 0.8rem;
`;

const Logo = styled.img`
  width: 11rem;
  height: auto;
  filter: brightness(0) invert(1);
  margin-bottom: 1rem;
`;

const FooterStatement = styled.p`
  max-width: 44rem;
  color: rgba(255, 255, 255, 0.62);
  font-size: 1.5rem;
  line-height: 1.7;
  margin-bottom: 0.6rem;
`;

const LinkText = styled(Link)`
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  width: fit-content;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.72);
  transition: color 180ms ease, transform 180ms ease;

  &:hover {
    color: #fff;
    transform: translateX(3px);
  }
` as typeof Link;

const LinkColumnContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 0px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
