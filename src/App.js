import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import placeData from './placeData';
mapboxgl.accessToken =
  'pk.eyJ1IjoidmFzYW50aDIxaXMiLCJhIjoiY2xiZHdod3NqMDVmYzNybWZsbnNmOGc3cSJ9.md9pIegNYpx1lr-Fk62c1Q';

function App() {
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [76.9988557, 11.0706797],
      zoom: zoom,
    });
    map.current.on('load', () => {
      map.current.addSource('places', placeData);
      map.current.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': ['get', 'icon'],
          'icon-allow-overlap': true,
        },
      });

      map.current.on('click', 'places', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map.current);
      });

      map.current.on('mouseenter', 'places', () => {
        map.current.getCanvas().style.cursor = 'pointer';
      });

      map.current.on('mouseleave', 'places', () => {
        map.current.getCanvas().style.cursor = '';
      });
    });
  });

  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lng, setLng] = useState(76.99);
  // const [lat, setLat] = useState(11.07);
  const [zoom, setZoom] = useState(15);

  return (
    <div className='App'>
      <header className='App-header'>
        <div ref={mapContainer} className='map-container' />
      </header>
    </div>
  );
}

export default App;
