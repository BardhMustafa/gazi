import { Typography } from '@mui/material';
import { AboutSection } from '../components/homepage/AboutSection';
import { InfoSection } from '../components/homepage/InfoSection';
import { useTranslations } from '../hooks/useTranslations';

const HomePage = () => {
  const { t, translations } = useTranslations();

  return (
    <>
      <Typography variant="h1">{t(translations.common.home)}</Typography>
      <AboutSection />
      <InfoSection
        title="Synego"
        imageSrc="https://flexicam.com/wp-content/uploads/2023/06/machine1-13.png"
      />
    </>
  );
};

export default HomePage;
