import Carousel from 'react-material-ui-carousel';

export default function SlideShow() {
  const array = [1, 2, 3];
  return (
    <Carousel animation="fade" navButtonsAlwaysVisible autoPlay={false}>
      {array.map(i => (
        <div
          style={{
            width: '100%',
            height: '600px',
            backgroundPosition: 'center 50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(/img/background${i + 1}.jpg)`,
          }}
          key={i}
        />
      ))}
    </Carousel>
  );
}
