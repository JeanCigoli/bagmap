import React from 'react';
import { useEffect } from 'react';


const MapsGoogle = ({ initial, zoom, ...props }) => {

  const google = window.google || {};

  useEffect(() => {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: initial,
      zoom: zoom || 15
    });
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "100%" }}>

    </div>
  )
};

export default MapsGoogle;
