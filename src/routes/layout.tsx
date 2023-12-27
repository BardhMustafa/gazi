import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <>
      <div>Header</div>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
`;
