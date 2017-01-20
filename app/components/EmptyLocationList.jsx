import React from 'react';

const EmptyLocationList = () =>
  (
    <div className="locationlist">
      <div className="emptylocationlist">No items found.</div>
      <a className="more-locations w-button" href="/nearby">more nearby locations...</a>
    </div>
  );

export default EmptyLocationList;
