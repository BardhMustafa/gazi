import { useState } from 'react';
import styled from 'styled-components';
import { FixedWrapper } from '../../shared/components/FixedWrapper';
import { Link, generatePath, useNavigate } from 'react-router-dom';
import { Drawer, IconButton, SelectChangeEvent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileWrapper } from '../../shared/components/MobileWrapper';
import { useDrawer } from '../../store/DrawerContext';
import logo1 from '../../assets/gazi-logo.png';
import { Language, useTranslations } from '../../hooks/useTranslations';
import { LANG_KEY } from '../../utils/types';
import { MenuLinks } from './MenuLinks';

const getLocalStorageLanguage = () => {
  const language = localStorage.getItem(LANG_KEY);

  if (language) {
    return language as Language;
  }
  return 'en';
};

export const MainHeader = () => {
  const [language, setLanguage] = useState<Language>(getLocalStorageLanguage());
  const navigate = useNavigate();

  const { drawer, toggleDrawer } = useDrawer();
  const { t, translations, changeLanguage } = useTranslations();

  const menuLinks = [
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
    },
    { path: '/contact', label: t(translations.common.contact) },
  ];

  const links = menuLinks.map(link => {
    return (
      <ActionListItem
        key={link.path}
        onClick={() => {
          navigate(generatePath(link.path));
          toggleDrawer(false);
        }}
      >
        {link.label}
      </ActionListItem>
    );
  });

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value as Language;
    setLanguage(selectedLanguage);
    localStorage.setItem(LANG_KEY, selectedLanguage);
    changeLanguage(selectedLanguage);
  };

  return (
    <FixedWrapper>
      <Header>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to="/">
              <Logo src={logo1} />
            </Link>
          </LogoWrapper>
          <Actions>
            <MobileWrapper
              mobileChildren={
                <StyledIconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => toggleDrawer(true)}
                >
                  <StyledMenuIcon />
                </StyledIconButton>
              }
            >
              <ActionList>
                <MenuLinks
                  links={links}
                  language={language}
                  handleLanguageChange={handleLanguageChange}
                />
              </ActionList>
            </MobileWrapper>
            <Drawer
              anchor="right"
              open={drawer}
              onClose={() => toggleDrawer(false)}
            >
              <ActionList>
                <MenuLinks
                  links={links}
                  language={language}
                  handleLanguageChange={handleLanguageChange}
                />
              </ActionList>
            </Drawer>
          </Actions>
        </HeaderWrapper>
      </Header>
    </FixedWrapper>
  );
};

const Logo = styled.img`
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

const ActionList = styled.ul`
  width: 300px;
  padding: 1rem;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5rem;
    list-style: none;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  font-family: 'Poppins', sans-serif;
  font-size: 2.6rem;
  color: #d42539;
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
  margin: 0;
`;

const ActionListItem = styled.li`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  color: #d42539;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 100%;
  }
`;
