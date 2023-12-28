import { Link, Outlet, generatePath } from 'react-router-dom';
import styled from 'styled-components';
import { MainHeader } from '../components/layout/MainHeader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Layout = () => {
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
      <Item key={link.path}>
        <ActionListItem key={link.path}>
          <Link to={generatePath(link.path)}>{link.label}</Link>
        </ActionListItem>
        {link.icon}
      </Item>
    );
  });

  return (
    <>
      <MainHeader logo="Gazi" actions={links} />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding-top: 7rem;
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 1400px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  color: red;
`;

const ActionListItem = styled.li`
  & > a {
    font-size: 2rem;
    font-weight: 700;
  }
`;
