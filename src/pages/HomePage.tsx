import { Typography } from '@mui/material';
import { AboutSection } from '../components/homepage/AboutSection';
import { InfoSection } from '../components/homepage/InfoSection';

const HomePage = () => {
  return (
    <>
      <Typography variant="h1">Ballina</Typography>
      <AboutSection />
      <InfoSection
        title="Synego"
        imageSrc="https://flexicam.com/wp-content/uploads/2023/06/machine1-13.png"
      />
    </>
  );
};

export default HomePage;
