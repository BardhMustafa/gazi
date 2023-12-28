
import Container, { ContainerProps } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

type Props = {
  background: string;
  title: string;
  fontColor:string
}

const HeroSecion = (props: Props) => {
  return (
    <StyledContainer background={props.background}>
      <Typography variant="h1" component="div" color={props.fontColor} sx={{ flexGrow: 1,display:'flex', justifyContent:'center' }}>
        {props.title}
      </Typography>
    </StyledContainer> 
  );
};

interface StyledContainerProps extends ContainerProps {
  background: string;
  height?:number;
}

const StyledContainer = styled(Container)<StyledContainerProps>`
  width: 100%;
  height: ${({ height }) => height ? `${height}px` : '400px'};
  background-image: ${({ background }) =>  `url(${background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items:center;
`;


export default HeroSecion;