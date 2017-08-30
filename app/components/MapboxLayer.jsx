import React from 'react';
import PropTypes from 'prop-types';

const MapboxLayer = ({ layerData, layerLabel }) => {
  const buildFeatureLayer = (places) => {
    const features = [];
    places.forEach((place) => {
      const feature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [place.lng, place.lat]
        },
        properties: {
          title: place.name,
          icon: 'library'
        }
      };
      features.push(feature);
    });
    return features;
  };

  const layer = {
    id: null,
    type: 'symbol',
    source: null,
    layout: null
  };

  if (layerLabel !== '') {
    layer.id = layerLabel;
  } else {
    layer.id = 'nearby';
  }

  const layerSource = {
    type: 'geojson',
    data: null
  };

  const layerLayout = {
    'icon-image': '{icon}-15',
    'text-field': '{title}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
    'text-size': 12
  };

  const featureLayer = {
    type: 'FeatureCollection',
    features: null
  };

  featureLayer.features = buildFeatureLayer(layerData);
  layerSource.data = featureLayer;
  layer.source = layerSource;
  layer.layout = layerLayout;
  console.log('layer', layer);
  // this.map.addLayer(layer);
  return ({ layer });
};

MapboxLayer.propTypes = {
  place: PropTypes.object
};

export default MapboxLayer;