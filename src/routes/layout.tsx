import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { MainHeader } from '../components/layout/MainHeader';

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      <div id="page-hero-container" />
      <LayoutContainer>{children ? children : <Outlet />}</LayoutContainer>
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
