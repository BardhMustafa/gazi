import styled from 'styled-components';
import { FixedWrapper } from '../../shared/components/FixedWrapper';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { NavLinks, NestedMenuLink } from './NavLinks';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../../App';

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
              <Logo cldImg={cld.image('gazi-logo_vqovqx')} />
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

const Logo = styled(AdvancedImage)`
  width: 120px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7rem;
  background-color: #fff;
`;

const HeaderWrapper = styled.div`
  padding: 0 1rem;
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
    color: #d42539;
  }

  p {
    font-weight: 700;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 0.7rem;
  a {
    text-decoration: none;
  }
`;
