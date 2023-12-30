import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from '../components/layout/NavBar';
import { Footer } from '../components/Footer';

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div id="page-hero-container" />
      <LayoutContainer>{children ? children : <Outlet />}</LayoutContainer>
      <Footer />
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
