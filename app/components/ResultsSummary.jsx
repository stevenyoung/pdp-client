import React from 'react';

const ResultsSummary = ({ results, searchTerm }) => {
  let listNodeContent;
  if (results.length > 0) {
    listNodeContent = (
      <div className="locationlist w-dyn-items" id="locations-list">
        <div className="location-list-items w-dyn-item">
          {results.map((place) =>
            <div
              className="locationitem"
              key={place.id}
            >
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

  return (
    <div>
      <div className="resultssummary w-dyn-list">?...<em>{searchTerm}</em></div>
      <div className="resultssummary w-dyn-list">{listNodeContent}</div>
    </div>
  );
};

ResultsSummary.propTypes = {
  results: React.PropTypes.array,
  searchTerm: React.PropTypes.string
};

ResultsSummary.defaultProps = {
  results: []
};

export default ResultsSummary;
