import styled from 'styled-components';
import { FixedWrapper } from '../../shared/components/FixedWrapper';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { NavLinks, NestedMenuLink } from './NavLinks';
import logo from '../../assets/gazi-logo.png';

export const NavBar = () => {
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
    <FixedWrapper>
      <Header>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to="/">
              <Logo src={logo} alt="Gazi" />
            </Link>
          </LogoWrapper>
          <Actions>
            <NavLinks menuLinks={menuLinks} />
          </Actions>
        </HeaderWrapper>
      </Header>
    </FixedWrapper>
  );
};

const Logo = styled.img`
  width: 11.5rem;
  height: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8.8rem;
  background-color: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid rgba(17, 51, 85, 0.08);
  box-shadow: 0 10px 40px rgba(17, 51, 85, 0.06);
  backdrop-filter: blur(18px);
`;

const HeaderWrapper = styled.div`
  padding: 0 clamp(1.6rem, 4vw, 4rem);
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Actions = styled.nav`
  a {
    text-decoration: none;
    color: #113355;
  }

  p {
    font-weight: 700;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
`;
