import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../App';
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
        {
          path: '/products/alumin',
          label: 'alumin',
        },
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
          <Logo cldImg={cld.image('images/gazi_logo_eupb5e_iqnoff')} />
          <MainContactLink href="mailto: contact@gazi.shpk">
            contact@gazi.shpk
            ntpgazi@hotmail.com
          </MainContactLink>
          <MainContactLink href={'tel: 044177222'}>
            (+383)44-177-222
          </MainContactLink>
          <MainContactLink>
            Vëllezrit Maliqi 7, Gjilan, Kosovë
          </MainContactLink>
          <LogoLink href="https://www.facebook.com/GaziGjilan" target="_blank">
            <FacebookIcon style={{ color: '#1122dd', fontSize: '3.6rem' }} />
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
          © 1995 – {new Date(Date.now()).getFullYear()} |
          Gazi Shpk® {t(translations.common.all_rights_reserved)}
        </CopyrightText>
      </CopyrightSection>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  background-color: #f4f4f4;
`;

const Container = styled.div`
  display:flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 8px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 10rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 16px;
  padding: 2rem;
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
  color: #333333;
`;

const LogoLink = styled.a`
  width: fit-content;
`;

const Logo = styled(AdvancedImage)`
  width: 5rem;
  height: 6rem;
`;



const LinkText = styled(Link)`
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  width: fit-content;
  text-decoration: none;
  color: #333333;
` as typeof Link;

const LinkColumnContainer = styled.div`
  display: flex;
  width: 70%;
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
  color: #333333;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    text-align: center;
  
  }
`;
