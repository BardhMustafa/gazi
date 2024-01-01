import React from 'react';
import { InfoSection } from '../../components/homepage/InfoSection';
import { Paragraph } from '../../shared/components/Paragraph';
import { useTranslations } from '../../hooks/useTranslations';

export const Artevo = () => {
  const { t, translations } = useTranslations();
  return (
    <>
      <InfoSection
        title="Artevo"
        imageSrc="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956017/images/artevo_kezr7o_iyu2of.jpg"
      />
      <Paragraph>{t(translations.artevo.first_section_content)}</Paragraph>
    </>
  );
};
