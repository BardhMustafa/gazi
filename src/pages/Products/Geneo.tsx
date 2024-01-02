
import { InfoSection } from '../../components/homepage/InfoSection';
import { Paragraph } from '../../shared/components/Paragraph';
import { useTranslations } from '../../hooks/useTranslations';

const Geneo = () => {
  const { t, translations } = useTranslations();
  return (
    <>
      <InfoSection
        title="Geneo"
        imageSrc="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956018/images/geneo_emgney_nzvask.webp"
      />
      <Paragraph>{t(translations.artevo.first_section_content)}</Paragraph>
      
    </>
  );
};

export default Geneo;