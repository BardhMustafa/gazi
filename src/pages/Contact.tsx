import React, { Suspense } from 'react';

import { ContactInfo } from '../components/contact/ContactInfo';
const MapsContainer = React.lazy(
  () => import('../components/maps/MapsContainer')
);
import { PageHero } from '../shared/components/PageHero';
import { useTranslations } from '../hooks/useTranslations';

const Contact = () => {
  const { t, translations } = useTranslations();

  return (
    <>
      <PageHero
        title={t(translations.contact.contact_us)}
        backgroundImagePath="https://res.cloudinary.com/dqtfurml7/image/upload/v1703956019/images/contact_hero_ktmb1n_prlbdf.jpg"
      />
      <ContactInfo phone="(+383)44-177-222" email="info@gazi.com" address="Adresa" />
      <Suspense fallback={<div>Loading Map</div>}>
        <MapsContainer height="50rem" />
      </Suspense>
    </>
  );
};

export default Contact;
