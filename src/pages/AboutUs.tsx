import { PageHero } from '../shared/components/PageHero';
import AboutHero from '../assets/images/about_2.jpg';
import { useTranslations } from '../hooks/useTranslations';

const AboutUs = () => {
  const { t, translations } = useTranslations();

  return (
    <>
      <PageHero
        title={t(translations.common.aboutUs)}
        backgroundImagePath={AboutHero}
      />
    </>
  );
};

export default AboutUs;
