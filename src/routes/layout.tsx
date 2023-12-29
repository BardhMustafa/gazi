import { useState, ChangeEvent } from 'react';
import { Outlet, generatePath, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MainHeader } from '../components/layout/MainHeader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDrawer } from '../store/DrawerContext';
import { Language, useTranslations } from '../hooks/useTranslations';
import { LANG_KEY } from '../utils/types';

const getLocalStorageLanguage = () => {
  const language = localStorage.getItem(LANG_KEY);

  if (language) {
    return language as Language;
  }
  return 'en';
};

export const Layout = () => {
  const [language, setLanguage] = useState<Language>(getLocalStorageLanguage());
  const { toggleDrawer } = useDrawer();
  const navigate = useNavigate();
  const { t, translations, changeLanguage } = useTranslations();

  const menuLinks = [
    { path: '/', label: t(translations.common.home) },
    { path: '/about-us', label: t(translations.common.about) },
    { path: '/rehau', label: t(translations.common.rehau) },
    {
      path: '/products',
      label: t(translations.common.products),
      icon: <ArrowDropDownIcon />,
    },
    {
      path: '/projects',
      label: t(translations.common.projects),
      icon: <ArrowDropDownIcon />,
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

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as Language;
    setLanguage(selectedLanguage);
    localStorage.setItem(LANG_KEY, selectedLanguage);
    changeLanguage(selectedLanguage);
  };

  return (
    <>
      <MainHeader
        actions={
          <>
            {links}
            <select value={language} onChange={handleLanguageChange}>
              <option value="en">En</option>
              <option value="shq">Shq</option>
              <option value="de">De</option>
              <option value="fr">Fr</option>
            </select>
          </>
        }
      />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding-top: 7.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 1400px;
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
