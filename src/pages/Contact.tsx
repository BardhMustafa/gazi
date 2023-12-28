import React, { Suspense } from 'react';
const MapsContainer = React.lazy(
  () => import('../components/maps/MapsContainer')
);

const Contact = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Map</div>}>
        <MapsContainer height="60rem" />
      </Suspense>
    </div>
  );
};

export default Contact;
