import React from 'react';
import styled from 'styled-components';

export const FixedWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Fixed>{children}</Fixed>;
};

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;
