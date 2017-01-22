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
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [this.props.mapCenter.place.lng, this.props.mapCenter.place.lat],
      attributionControl: false,
      zoom: 11,
      pitch: 30
    };
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
      this.displayMarkerCollection(this.props.places);
    }
  }

  initializeMap() {
    this.map = new mapboxgl.Map(this.mapOptions);
    this.addControls();
  }

  flyToCoords(coords) {
    this.map.jumpTo({ center: [coords.lng, coords.lat] });
  }

  addControls() {
    this.map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    this.map.addControl((new mapboxgl.AttributionControl({
        compact: true
    })), 'top-left');
  }

  markerEl() {
    return (
      <div className="mbglmarker" />
    );
  }

  displayMarkerCollection(places) {
    places.forEach((place) => {
      const markerCoords = {
        lat: place.loc.coordinates[1],
        lng: place.loc.coordinates[0]
      };
      this.displayMarker(markerCoords, place.id);
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
