import styled from 'styled-components';
import { Menu, MenuItem } from '@mui/material';
import { generatePath, useNavigate } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { NestedMenuLink } from './NavLinks';
import { useDrawer } from '../../store/DrawerContext';
import { useIsMobile } from '../../hooks/useIsMobile';

interface DropdownMenuProps {
  link: NestedMenuLink;
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  mobileActiveDropdown?: string | null;
}

export const DropdownMenu = ({
  link,
  activeDropdown,
  setActiveDropdown,
  mobileActiveDropdown,
}: DropdownMenuProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { toggleDrawer } = useDrawer();
  const isMobile = useIsMobile();

  if (
    mobileActiveDropdown === link.path &&
    isMobile &&
    link.nestedLinks &&
    link.nestedLinks.length > 0
  ) {
    return (
      <MobileMenu id={`menu-${link.path}`}>
        {[link, ...link.nestedLinks].map(item => (
          <li key={item.path}>
            <MobileStyledMenuItem
              to={item.path}
              aria-current={pathname === item.path ? 'page' : undefined}
              onClick={() => toggleDrawer(false)}
            >
              {item.label}
            </MobileStyledMenuItem>
          </li>
        ))}
      </MobileMenu>
    );
  }

  return !isMobile ? (
    <Menu
      id={`menu-${link.path}`}
      anchorEl={() => document.getElementById(`button-${link.path}`) as Element}
      open={activeDropdown === link.path}
      onClose={() => setActiveDropdown(null)}
      MenuListProps={{
        'aria-labelledby': `button-${link.path}`,
      }}
      PopoverClasses={{ paper: 'MuiPopover-paper' }}
      disableScrollLock={true}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{ sx: {
        minWidth: 220,
        padding: '.6rem',
        borderRadius: '1.6rem',
        border: '1px solid #e5e9ed',
        boxShadow: '0 16px 40px rgba(17,51,85,.14)',
      } }}
      sx={{ marginTop: '1rem' }}
    >
      <StyledMenuItem
        key={`nested-link-${link.path}`}
        selected={pathname === link.path}
        onClick={() => {
          navigate(generatePath(link.path));
          toggleDrawer(false);
          setActiveDropdown(null);
        }}
      >
        {link.label}
      </StyledMenuItem>

      {link.nestedLinks?.map(nestedLink => (
        <StyledMenuItem
          key={nestedLink.path}
          selected={pathname === nestedLink.path}
          onClick={() => {
            navigate(generatePath(nestedLink.path));
            setActiveDropdown(null);
          }}
        >
          {nestedLink.label}
        </StyledMenuItem>
      ))}
    </Menu>
  ) : null;
};

const StyledMenuItem = styled(MenuItem)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 650;
  color: #113355;
  cursor: pointer;
  border-radius: 1rem;
  min-height: 4.4rem;
  &.Mui-selected { color: #d42539; background-color: #fceef0; }

  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 100%;
  }
`;

const MobileMenu = styled.ul`
  list-style: none;
  padding: .6rem 0 .6rem 1rem;
  margin: .6rem 0 .6rem 1.6rem;
  border-left: 2px solid #e5e9ed;
`;

const MobileStyledMenuItem = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #647383;
  cursor: pointer;
  padding: 1.2rem;
  border-radius: 1rem;
  &[aria-current='page'], &:hover { color: #d42539; background: #fceef0; }
`;
