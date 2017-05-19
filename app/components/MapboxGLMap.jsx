import React from 'react';
import mapboxgl from 'mapbox-gl';

const mapElem = 'mbglmap';

class MapboxGLMap extends React.Component {
  static propTypes = {
    accessToken: React.PropTypes.string,
    mapCenter: React.PropTypes.object,
    places: React.PropTypes.array
  }

  componentDidMount() {
    mapboxgl.accessToken = this.props.accessToken;
    this.initializeMap();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mapCenter !== this.props.mapCenter) {
      this.flyToCoords(nextProps.mapCenter.place);
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.places !== this.props.places) {
      // this.displayMarkerCollection(this.props.places);
      // this.addLabeledLayer('label', this.props.places);
      this.displayFeatureLayer(this.props.places);
    }
  }

  mapOptions = {
    container: mapElem,
    style: 'mapbox://styles/mapbox/light-v9',
    center: [this.props.mapCenter.place.lng, this.props.mapCenter.place.lat],
    attributionControl: false,
    zoom: 11,
    pitch: 30
  };

  markerIds = []

  initializeMap() {
    this.map = new mapboxgl.Map(this.mapOptions);
    // this.map.addSource('scenes', { type: 'geojson', data: this.props.places });
    this.addControls();
  }

  jitter() {
    return (Math.random() - 0.5) * 0.02 * this.map.getZoom();
  }

  flyToCoords(coords) {
    const nearbyCoords = {
      center: [
        coords.lng + this.jitter(),
        coords.lat + this.jitter()
      ]
    };
    this.map.jumpTo(nearbyCoords);
    this.map.flyTo({ center: [coords.lng, coords.lat] });
  }

  addControls() {
    return true;
    // this.map.addControl(new mapboxgl.GeolocateControl());
    // this.map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    // this.map.addControl((new mapboxgl.AttributionControl({
    //     compact: true
    // })), 'bottom-left');
  }

  addIcon(coords, place) {
    const layerId = `icon-layer-${place.id}`;
    const layer = {
      id: layerId,
      source: `${place.id}`,
      type: 'symbol',
      layout: {
        'icon-image': 'library-15',
        'icon-padding': 0,
        'icon-allow-overlap': true
      }
    };
    this.map.addLayer(layer);
  }


  addCircleMarker(coords, place, color = '#000') {
    const layerId = `circle-layer-${place.id}`;
    const sourceId = `${place.id}`;
    const layer = {
      id: layerId,
      source: sourceId,
      type: 'circle',
      paint: {
        'circle-radius': 15,
        'circle-color': color,
        'circle-opacity': 1.0
      }
    };
    console.log('circle layer', layer);
    this.map.addLayer(layer);
  }

  addLabeledLayer(label, places) {
    const placeList = [];
    places.forEach((place) => {
      const placeData = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [place.loc.coordinates[0], place.loc.coordinates[0]]
        },
        id: place.id
      };
      const placeCircle = {
        id: `circle-layer-${place.id}`,
        source: place.id,
        type: 'circle',
        paint: {
          'circle-radius': 15,
          'circle-color': '#000',
          'circle-opacity': 0.3
        }
      };
      placeList.push(placeData);
      placeList.push(placeCircle);
    });

    this.map.addSource(label, {
      type: 'geojson',
      data: placeList
    });
    // this.map.addLayer(placeList);
  }

  displayFeatureLayer(places) {
    const layer = {
      id: null,
      type: 'symbol',
      source: null,
      layout: null
    };
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
    featureLayer.features = this.featureLayer(places);
    layerSource.data = featureLayer;
    layer.source = layerSource;
    layer.layout = layerLayout;
    layer.id = 'placesdotpress';
    this.map.addLayer(layer);
  }

  featureLayer(places) {
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
  }

  displayMarkerCollection(places) {
    // this.map.addSource
    // const circleLayers = [];
    // const iconLayers = [];
    places.forEach((place) => {
      const markerCoords = {
        lat: place.loc.coordinates[1],
        lng: place.loc.coordinates[0]
      };
      if (this.markerIds.indexOf(place.id) < 0) {
        this.map.addSource(place.id, {
          type: 'geojson',
          data:
          {
            type: 'Point',
            coordinates: [markerCoords.lng, markerCoords.lat]
          }
        });
        this.addCircleMarker(markerCoords, place);
        this.addIcon(markerCoords, place);
        this.markerIds.push(place.id);
      }
    });
  }

  render() {
    return (
      <div className="mbglmapcontainer" >
        <div id={mapElem} />
      </div>
    );
  }
}

export default MapboxGLMap;
