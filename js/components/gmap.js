const ShowMap = (station) =>{
  var distance;
  const map = new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
  })
  // var myLatLng = {lat: -12.043333, lng: -77.028333};

  GMaps.geolocate({
  success: function(position) {
    map.setCenter(position.coords.latitude, position.coords.longitude);
    map.setZoom(13);
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: "position actual",
        click: function(e) {
          alert('Position actual');
        }
      });
      map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [station.lat, station.long],
        travelMode: 'driving',
      });
      map.addMarker({
        lat: station.lat,
        lng: station.long,
        title: station.name +"\n"+ station.address,
        click: function(e) {
          alert('stations');
        }
      });
      map.getRoutes({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [station.lat, station.long],
        callback: function(result,status){
             distance = result[0].legs[0].distance.text;
             $('#distancia').before($(`<p class = "right">${distance}</p>`));
        }
      });
    },
  });
};
