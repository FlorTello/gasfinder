'use strict';

const filterByDistrict = (stations,query) => {
  // var index = stations.map(e=>e.district.toLowerCase()).indexOf(query.toLowerCase());
  var a = stations.filter((e)=>{
    if(e.district.toLowerCase().indexOf(query.toLowerCase()) !== -1){
      return e;
    }
  });
  return a;
  // return stations.filter(e => e.district.toLowerCase().indexOf(query.toLowerCase() !== -1 ? e:"no encontrado" ));
}

const Details = (update) => {
  // console.log(state.selectedStation.name);
  // const row = $('<div class="row">');
  // const col = $('<div class="col s12 m12">');
  // const card = $('<div class="card-panel grey lighten-2">');
  // const name = $(`<h5>${state.selectedStation.name}</h5>`);
  // const address = $(`<p>${state.selectedStation.address}</p>`);
  // const district = $(`<p>${state.selectedStation.district}</p>`);
  // const button = $('<span class="right"><i class="fa fa-map" aria-hidden="true"></i></span>')
  //
  // card.append(button);
  // card.append(name);
  // card.append(address);
  // card.append(district);
  //
  // col.append(card);
  // row.append(col);
  //
  // button.on('click',(e) => {
  //   e.preventDefault();
  //   state.selectedMovie = null;
  //   update();
  //   ShowMap();
  // })
  //
  // return row;
}

const ShowMap = () =>{
  const map = new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
  })
  var myLatLng = {lat: -12.043333, lng: -77.028333};

  GMaps.geolocate({
  success: function(position) {
    map.setCenter(position.coords.latitude, position.coords.longitude);
    map.setZoom(13);
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: "position actual",
        click: function(e) {
          alert('stations');
        }
      });
      map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [state.selectedStation.lat, state.selectedStation.long],
        travelMode: 'driving',
      });
      map.addMarker({
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long,
        title: state.selectedStation.name +"\n"+ state.selectedStation.address,
        click: function(e) {
          alert('stations');
        }
      });
    },
  });

};
