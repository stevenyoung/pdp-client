import React from 'react';
import GeolocationButton from './GeolocationButton';

const EmptyLocationList = () =>
  (
    <div className="locationlist">
      <span className="emptylocationlist">No items found.</span>
      <GeolocationButton />
    </div>
  );

export default EmptyLocationList;
