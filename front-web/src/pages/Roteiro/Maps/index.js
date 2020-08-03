import React, { useEffect, useState } from 'react';

function MapsRoad({ initial, location }) {
    const google = window.google || {};

    const [directionsRenderer, setDirectionsRenderer] = useState(new google.maps.DirectionsRenderer()); 
    const [directionsService, setDirectionsService] = useState(new google.maps.DirectionsService());

    useEffect(() => {
      let map = new google.maps.Map(document.getElementById('map'), {
        center: initial,
        zoom: 18
      });

      let marker = new google.maps.Marker({
        position: initial,
        map: map,
      });

      directionsRenderer.setMap(map);
    }, []);

    useEffect(() => {

      if(location) {
        const originLocation = new google.maps.LatLng(initial.lat, initial.lng);
        const destinationLocation = new google.maps.LatLng(location.lat, location.lng);
    
        var request = {
          origin: originLocation,
          destination: destinationLocation,
          travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          }
        });
      }

    }, [location]);
  
    return (
      <div id="map" style={{ width: "100%", height: "100%" }}>
  
      </div>
    )
}

export default MapsRoad;