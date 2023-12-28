
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
  padding: 2rem 4rem;
  height: ${({ height }) => height ? `${height}px` : '400px'};
  background-image: ${({ background }) =>  `url(${background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items:center;
  justify-content:center
`;


export default HeroSection;