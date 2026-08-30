import { useState } from 'react';
import { Language, useTranslations } from '../../hooks/useTranslations';
import { LANG_KEY } from '../../utils/types';
import { Drawer, SelectChangeEvent } from '@mui/material';
import { useDrawer } from '../../store/DrawerContext';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { KeyboardArrowDown, CloseRounded, MenuRounded } from '@mui/icons-material';
import { MenuLinks } from './MenuLinks';
import { DropdownMenu } from './DropdownMenu';
import { useIsMobile } from '../../hooks/useIsMobile';
import logo from '../../assets/gazi-logo.png';

export interface MenuLink {
  path: string;
  label: string;
}

export interface NestedMenuLink extends MenuLink {
  nestedLinks?: MenuLink[];
}

interface NavLinksProps {
  menuLinks: NestedMenuLink[];
}

const getLocalStorageLanguage = (): Language => {
  const language = localStorage.getItem(LANG_KEY);
  return language === 'en' || language === 'de' || language === 'fr' ? language : 'shq';
};

export const NavLinks = ({ menuLinks }: NavLinksProps) => {
  const [language, setLanguage] = useState<Language>(getLocalStorageLanguage);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const { pathname } = useLocation();
  const { drawer, toggleDrawer } = useDrawer();
  const { t, translations, changeLanguage } = useTranslations();
  const isMobile = useIsMobile();

  const closeMenu = () => {
    toggleDrawer(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value as Language;
    setLanguage(selectedLanguage);
    localStorage.setItem(LANG_KEY, selectedLanguage);
    changeLanguage(selectedLanguage);
  };

  const links = menuLinks.map(link => {
    const active = link.path === '/'
      ? pathname === '/'
      : pathname === link.path || pathname.startsWith(link.path + '/');
    const expanded = (isMobile ? mobileActiveDropdown : activeDropdown) === link.path;

    return (
      <li key={link.path}>
        {link.nestedLinks ? (
          <>
            <ActionListItem
              type="button"
              $active={active}
              onClick={() => {
                const setDropdown = isMobile ? setMobileActiveDropdown : setActiveDropdown;
                setDropdown(prev => prev === link.path ? null : link.path);
              }}
              id={`button-${link.path}`}
              aria-expanded={expanded}
              aria-controls={expanded ? `menu-${link.path}` : undefined}
              aria-haspopup={isMobile ? undefined : 'menu'}
            >
              {link.label}
              <KeyboardArrowDown style={{ transform: expanded ? 'rotate(180deg)' : undefined }} />
            </ActionListItem>
            <DropdownMenu
              link={link}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              mobileActiveDropdown={mobileActiveDropdown}
            />
          </>
        ) : (
          <ActionListItem
            as={Link}
            to={link.path}
            onClick={closeMenu}
            $active={active}
            $contact={link.path === '/contact'}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </ActionListItem>
        )}
      </li>
    );
  });

  return (
    <>
      {isMobile ? (
        <MenuButton
          type="button"
          aria-label={t(translations.redesign.nav_open)}
          aria-expanded={drawer}
          aria-controls={drawer ? 'mobile-navigation' : undefined}
          onClick={() => toggleDrawer(true)}
        >
          <MenuRounded />
        </MenuButton>
      ) : (
        <ActionList>
          <MenuLinks links={links} language={language} handleLanguageChange={handleLanguageChange} />
        </ActionList>
      )}
      <Drawer
        anchor="right"
        open={drawer && isMobile}
        onClose={closeMenu}
        PaperProps={{ sx: { width: 'min(360px, 100vw)', background: '#fff', padding: '2.4rem' } }}
      >
        <DrawerHeader>
          <Link to="/" onClick={closeMenu}><img src={logo} alt="GAZI" /></Link>
          <MenuButton type="button" onClick={closeMenu} aria-label={t(translations.redesign.nav_close)}>
            <CloseRounded />
          </MenuButton>
        </DrawerHeader>
        <nav id="mobile-navigation" aria-label={t(translations.redesign.nav_main)}>
          <ActionList $drawer>
            <MenuLinks links={isMobile ? links : null} language={language} handleLanguageChange={handleLanguageChange} />
          </ActionList>
        </nav>
      </Drawer>
    </>
  );
};

const ActionList = styled.ul<{ $drawer?: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: ${({ $drawer }) => $drawer ? 'stretch' : 'center'};
  flex-direction: ${({ $drawer }) => $drawer ? 'column' : 'row'};
  gap: ${({ $drawer }) => $drawer ? '.8rem' : 'clamp(.2rem, .5vw, .8rem)'};
`;

const MenuButton = styled.button`
  display: grid;
  place-items: center;
  width: 4.4rem;
  height: 4.4rem;
  padding: 0;
  border: 1px solid #e5e9ed;
  border-radius: 1.2rem;
  background: #f5f7f9;
  color: #113355;
  cursor: pointer;
  svg { font-size: 2.4rem; }
  &:hover { color: #d42539; background: #fceef0; }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  border-bottom: 1px solid #e5e9ed;
  img { width: 10.4rem; }
`;

const ActionListItem = styled.button<{ $active?: boolean; $contact?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  min-height: 4.4rem;
  padding: 1rem clamp(1rem, 1.15vw, 1.6rem);
  border: 0;
  border-radius: 1.2rem;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ $active, $contact }) => $contact ? '#fff' : $active ? '#d42539' : '#113355'};
  background: ${({ $active, $contact }) => $contact ? '#d42539' : $active ? '#fceef0' : 'transparent'};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;
  svg { font-size: 1.8rem; transition: transform 180ms ease; }
  &:hover {
    color: ${({ $contact }) => $contact ? '#fff' : '#d42539'};
    background: ${({ $contact }) => $contact ? '#b91f31' : '#f5f7f9'};
  }
  @media (max-width: 1023px) {
    width: 100%;
    justify-content: space-between;
    padding: 1.4rem 1.6rem;
    font-size: 1.6rem;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    svg { transition: none; }
  }
`;
