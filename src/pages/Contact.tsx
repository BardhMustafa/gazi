import React, { Suspense } from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';
const MapsContainer = React.lazy(
  () => import('../components/maps/MapsContainer')
);

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo phone="049444333" email="info@gazi.com" address="Adresa" />
      <Suspense fallback={<div>Loading Map</div>}>
        <MapsContainer height="50rem" />
      </Suspense>
    </>
  );
};

export default Contact;
