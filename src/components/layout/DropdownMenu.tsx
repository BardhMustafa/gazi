import styled from 'styled-components';
import { Menu, MenuItem } from '@mui/material';
import { generatePath, useNavigate } from 'react-router';
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
  const { toggleDrawer } = useDrawer();
  const isMobile = useIsMobile();

  if (
    mobileActiveDropdown === link.path &&
    isMobile &&
    link.nestedLinks &&
    link.nestedLinks.length > 0
  ) {
    return link.nestedLinks.map(link => (
      <MobileStyledMenuItem
        key={`nested-link-${link.path}`}
        onClick={() => {
          navigate(generatePath(link.path));
          toggleDrawer(false);
        }}
      >
        {`${link.label}`.charAt(0).toUpperCase() + `${link.label}`.slice(1)}
      </MobileStyledMenuItem>
    ));
  }

  return !isMobile ? (
    <Menu
      id={`menu-${link.path}`}
      anchorEl={() => document.getElementById(`button-${link.path}`) as Element}
      open={activeDropdown === link.path}
      onClose={() => setActiveDropdown(null)}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      PopoverClasses={{ paper: 'MuiPopover-paper' }}
      disableScrollLock={true}
      autoFocus={false}
      sx={{ marginTop: '1rem' }}
    >
      <StyledMenuItem
        key={`nested-link-${link.path}`}
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
          onClick={() => {
            navigate(generatePath(nestedLink.path));
            setActiveDropdown(null);
          }}
        >
          {`${nestedLink.label}`.charAt(0).toUpperCase() +
            `${nestedLink.label}`.slice(1)}
        </StyledMenuItem>
      ))}
    </Menu>
  ) : null;
};

const StyledMenuItem = styled(MenuItem)`
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

const MobileStyledMenuItem = styled.li`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  color: #d42539;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 1rem 0;
    padding-left: 2rem;
    width: 100%;
  }
`;
