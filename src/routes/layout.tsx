import { Link, Outlet, generatePath, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MainHeader } from '../components/layout/MainHeader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDrawer } from '../store/DrawerContext';

export const Layout = () => {
  const { toggleDrawer } = useDrawer();
  const navigate = useNavigate();

  const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/rehau', label: 'Rehau' },
    { path: '/products', label: 'Products', icon: <ArrowDropDownIcon /> },
    { path: '/projects', label: 'Projects', icon: <ArrowDropDownIcon /> },
    { path: '/contact', label: 'Kontakti' },
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

  return (
    <>
      <MainHeader actions={links} />
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
