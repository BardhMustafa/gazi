import { useState } from 'react';
import { Language, useTranslations } from '../../hooks/useTranslations';
import { MobileWrapper } from '../../shared/components/MobileWrapper';
import { LANG_KEY } from '../../utils/types';
import { Drawer, IconButton, SelectChangeEvent } from '@mui/material';
import { useDrawer } from '../../store/DrawerContext';
import { generatePath, useNavigate } from 'react-router';
import styled from 'styled-components';
import { ArrowDropDown } from '@mui/icons-material';
import { MenuLinks } from './MenuLinks';
import MenuIcon from '@mui/icons-material/Menu';
import { DropdownMenu } from './DropdownMenu';
import { useIsMobile } from '../../hooks/useIsMobile';

export interface MenuLink {
  path: string;
  label: string;
}

export interface NestedMenuLink extends MenuLink {
  nestedLinks?: MenuLink[];
}

interface NavLinks {
  menuLinks: NestedMenuLink[];
}

const getLocalStorageLanguage = () => {
  const language = localStorage.getItem(LANG_KEY);

  if (language) {
    return language as Language;
  }
  return 'shq';
};

export const NavLinks = ({ menuLinks }: NavLinks) => {
  const [language, setLanguage] = useState<Language>(getLocalStorageLanguage());
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);
  const navigate = useNavigate();
  const { drawer, toggleDrawer } = useDrawer();
  const { changeLanguage } = useTranslations();
  const isMobile = useIsMobile();

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value as Language;
    setLanguage(selectedLanguage);
    localStorage.setItem(LANG_KEY, selectedLanguage);
    changeLanguage(selectedLanguage);
  };

  const links = menuLinks.map(link => {
    if (link.nestedLinks) {
      return (
        <div key={link.path}>
          <ActionListItem
            onClick={() => {
              if (isMobile) {
                setMobileActiveDropdown(prev =>
                  prev === link.path ? null : link.path
                );
              } else {
                setActiveDropdown(prev =>
                  prev === link.path ? null : link.path
                );
              }
            }}
            id={`button-${link.path}`}
          >
            {link.label}
            {link.nestedLinks && <ArrowDropDown />}
          </ActionListItem>
          <DropdownMenu
            link={link}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            mobileActiveDropdown={mobileActiveDropdown}
          />
        </div>
      );
    }

    return (
      <div key={link.path}>
        <ActionListItem
          onClick={() => {
            navigate(generatePath(link.path));
            toggleDrawer(false);
          }}
        >
          {link.label}
        </ActionListItem>
      </div>
    );
  });

  return (
    <>
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
      <Drawer anchor="right" open={drawer} onClose={() => toggleDrawer(false)}>
        <ActionList>
          <MenuLinks
            links={links}
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
        </ActionList>
      </Drawer>
    </>
  );
};

const ActionList = styled.ul`
  width: 300px;
  padding: 1rem;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 70rem;
    padding: 1rem;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
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

export const ActionListItem = styled.li`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  color: #d42539;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 100%;
  }
`;
