
import  { ContainerProps } from '@mui/material/Container';

import styled from 'styled-components';

type Props = {
  background: string;
  children: React.ReactNode;
  fontColor:string
  height?:number;
}

const HeroSection = (props: Props) => {
  return (
    <StyledContainer background={props.background} height={props.height}>
      {props.children}
    </StyledContainer> 
  );
};

interface StyledContainerProps extends ContainerProps {
  background: string;
  height?:number;
}

const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  height: ${({ height }) => height ? `${height}px` : '400px'};
  background: ${({ background }) => `linear-gradient(90deg, rgba(8, 29, 50, .94), rgba(17, 51, 85, .58)), url(${background}) no-repeat center center/cover`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items:center;
  justify-content:center;
  padding: clamp(6rem, 10vw, 12rem);
  margin-bottom: clamp(8rem, 10vw, 13rem);
  border-radius: 2.4rem;
  overflow: hidden;
  @media (max-width: 768px) {
    height:85%;
  }
`;


export default HeroSection;
