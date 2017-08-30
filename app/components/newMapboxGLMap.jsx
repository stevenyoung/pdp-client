import React from 'react';
import mapboxgl from 'mapbox-gl';

const mapElem = 'mbglmap';

class MapboxGLMap extends React.Component {
  static propTypes = {
    accessToken: React.PropTypes.string,
    mapCenter: React.PropTypes.object,
    places: React.PropTypes.array
  }

  constructor(props) {
    super(props);
    this.mapOptions = {
      container: mapElem,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [this.props.mapCenter.place.lng, this.props.mapCenter.place.lat],
      attributionControl: false,
      zoom: 11,
      pitch: 30
    };
    this.sourceIds = [];
    this.markerSourceId = 'pdpresults';
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
      this.displayFeatures(this.props.places);
    }
  }

  getIconLayer() {
    return {
      type: 'symbol',
      layout: {
        'icon-image': 'library-15',
        'icon-padding': 0,
        'icon-allow-overlap': true
      }
    };
  }

  addControls() {
    return true;
    // this.map.addControl(new mapboxgl.GeolocateControl());
    // this.map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    // this.map.addControl((new mapboxgl.AttributionControl({
    //     compact: true
    // })), 'bottom-left');
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

  initializeMap() {
    this.map = new mapboxgl.Map(this.mapOptions);
    this.map.addSource(this.markerSourceId);
    this.addControls();
  }

  jitter() {
    return (Math.random() - 0.5) * 0.02 * this.map.getZoom();
  }

  addIcon(coords, place) {
    const layerId = `icon-layer-${place.id}`;
    const layer = {
      id: layerId,
      source: place.id,
      type: 'symbol',
      layout: {
        'icon-image': 'library-15',
        'icon-padding': 0,
        'icon-allow-overlap': true
      }
    };
    this.map.addLayer(layer);
  }

  displayFeatures(places) {
    const layer = { type: 'geojson' };
    const collectionData = {
      type: 'FeatureCollection',
      features: []
    };
    places.forEach((place) => {
      const marker = this.getIconLayer();
      marker.id = place.id;
      marker.source = this.ma;
      marker.data = {
        type: 'Point',
        coordinates: [place.lng, place.lat]
      };
      collectionData.features.push(marker);
    });
    layer.data = collectionData;
    console.log(layer)
    // this.map.addSource(source, layer);
  }

  addCircleMarker(coords, place, color = '#000') {
    const layerId = `circle-layer-${place.id}`;
    const layer = {
      id: layerId,
      // source: place.id,
      type: 'circle',
      paint: {
        'circle-radius': 15,
        'circle-color': color,
        'circle-opacity': 0.3
      }
    };
    this.map.addLayer(layer);
  }

  displayMarkerCollection(places) {
    places.forEach((place) => {
      if (this.sourceIds.indexOf(place.id) === -1) {
        this.sourceIds.push(place.id);
        const markerCoords = {
          lat: place.loc.coordinates[1],
          lng: place.loc.coordinates[0]
        };
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
