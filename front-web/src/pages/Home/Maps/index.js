import React, { useEffect, useState } from 'react';

const MapsHome = ({ placesAll, location }) => {

  const google = window.google || {};

  const [map, setMap] = useState(null);

  useEffect(() => {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: location.latitude || -23.5208461, lng: location.longitude || -46.8207078 },
      zoom: 15
    });

    setMap(map);
  }, []);

  useEffect(() => {
    if (placesAll.length !== 0) {
      handleMarker(placesAll)
    }
  }, [placesAll]);

  const handleMarker = (array) => {
    array.forEach(places => {
      places.items.forEach(card => {

        var contentString = `<div className="content">${card.name}</div>`;

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        let marker = new google.maps.Marker({
          position: card.geometry.location,
          map: map
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      })
    })
  }

  return (
    <div id="map" style={{ width: "100%", height: "100%" }}>

    </div>
  );
};

export default MapsHome;
