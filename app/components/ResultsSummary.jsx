import React from 'react';

const ResultsSummary = ({ results }) => {
  let listNodeContent;
  if (results.length > 0) {
    listNodeContent = (
      <div className="locationlist w-dyn-items" id="locations-list">
        <div className="location-list-items w-dyn-item">
          {results.map((place) =>
            <div className="locationitem">
              <a href="/location" >
                <span className="location-work-title">{place.scenelocation}</span>
                &nbsp;<span className="location-work-name">{place.title}</span>
                &nbsp;by&nbsp;
                <span className="location-work-artist">{place.author}</span>
              </a>
            </div>
            )
          }
        </div>
      </div>);
  } else {
    listNodeContent = (
      <div className="locationlist">
        <div className="emptylocationlist">No items found.</div>
        <a className="more-locations w-button" href="/nearby">more nearby locations...</a>
      </div>
    );
  }
  return <div className="resultssummary w-dyn-list">{listNodeContent}</div>;
};

ResultsSummary.propTypes = {
  results: React.PropTypes.array
};

ResultsSummary.defaultProps = {
  results: []
};

export default ResultsSummary;
