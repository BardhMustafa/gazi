import React, { Suspense } from 'react';
import { ContactHero } from '../components/contact/ContactHero';
const MapsContainer = React.lazy(
  () => import('../components/maps/MapsContainer')
);

const Contact = () => {
  return (
    <>
      <ContactHero />
      {/* <Suspense fallback={<div>Loading Map</div>}>
        <MapsContainer height="60rem" />
      </Suspense> */}
    </>
  );
};

export default Contact;
