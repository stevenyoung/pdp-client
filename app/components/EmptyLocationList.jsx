import React from 'react';
import GeolocationButton from './GeolocationButton';

const EmptyLocationList = () =>
  (
    <div className="locationlist">
      <div className="emptylocationlist">No items found.</div>
      <GeolocationButton />
    </div>
  );

export default EmptyLocationList;
