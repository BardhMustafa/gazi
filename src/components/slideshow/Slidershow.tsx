import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';


export default function SlideShow() {
  const array = [1, 2, 3];
  return (
    <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={true}>
      {array.map(i => (
        <SlideShowContainer i={i} key={i}>
      
        </SlideShowContainer>
      ))}
    </Carousel>
  );
}

const SlideShowContainer = styled.div<{ i: number }>`
  width: 100%;
  height: 600px;
  display: flex;
  padding-left: 10%;
  justify-content: flex-start;
  align-items: center;
  background-position: center 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image:  ${props => `url(/img/background${props.i}.jpg)`}
`;
