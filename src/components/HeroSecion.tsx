
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
  background: ${({ background }) =>    `linear-gradient(0deg, rgba(38,28,29,1) 14%, rgba(126,109,112,0.517266281512605) 87%, rgba(237,230,230,0.2539609593837535) 98%), url(${background})  no-repeat center center/cover`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items:center;
  justify-content:center;
  padding:20rem 10rem;
`;


export default HeroSection;