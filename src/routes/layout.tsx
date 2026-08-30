import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from '../components/layout/NavBar';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
  padding-top: 8.8rem;
  padding-right: clamp(1.6rem, 4vw, 4rem);
  padding-left: clamp(1.6rem, 4vw, 4rem);
  max-width: 1480px;
`;
