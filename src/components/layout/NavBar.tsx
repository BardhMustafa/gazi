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
          label: 'PVC',
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
          label: t(translations.common.showroom),
        },
        {
          path: '/projects/factory',
          label: t(translations.common['prod-sec']),
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
          <Actions aria-label={t(translations.redesign.nav_main)}>
            <NavLinks menuLinks={menuLinks} />
          </Actions>
        </HeaderWrapper>
      </Header>
    </FixedWrapper>
  );
};

const Logo = styled.img`
  width: 10.4rem;
  height: auto;
`;

const Header = styled.header`
  --nav-inset: 2rem;
  display: flex;
  justify-content: center;
  width: calc(100% - 2 * clamp(1.6rem, 4vw, 4rem) - 2 * var(--nav-inset));
  max-width: calc(1400px - 2 * var(--nav-inset));
  height: 7.2rem;
  margin: 1.2rem auto 0;
  background-color: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(17, 51, 85, 0.1);
  border-radius: 2rem;
  box-shadow: 0 8px 32px rgba(17, 51, 85, 0.09);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  @media (max-width: 1023px) {
    --nav-inset: 0.8rem;
    height: 6.8rem;
    margin-top: 1rem;
    border-radius: 1.8rem;
  }
`;

const HeaderWrapper = styled.div`
  padding: 0 clamp(1.4rem, 2vw, 2.4rem);
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 1.6rem;
`;

const Actions = styled.nav`
  min-width: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  a {
    text-decoration: none;
  }
`;
