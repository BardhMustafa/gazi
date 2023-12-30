import styled from 'styled-components';
import { Menu, MenuItem } from '@mui/material';
import { generatePath, useNavigate } from 'react-router';
import { NestedMenuLink } from './NavLinks';
import { useDrawer } from '../../store/DrawerContext';

interface DropdownMenuProps {
  link: NestedMenuLink;
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
}

export const DropdownMenu = ({
  link,
  activeDropdown,
  setActiveDropdown,
}: DropdownMenuProps) => {
  const navigate = useNavigate();
  const { toggleDrawer } = useDrawer();

  return (
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
  );
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
