'use strict';

const stationsItem = (station,update) => {
  // console.log(state.selectedStation.name);
  const row = $('<div class="row">');
  const col = $('<div class="col s12 m12">');
  const card = $('<div class="card-panel grey lighten-2">');
  const name = $(`<h5>${station.name}</h5>`);
  const address = $(`<p>${station.address}</p>`);
  const district = $(`<p>${station.district}</p>`);
  const button = $('<span class="right"><i class="fa fa-map" aria-hidden="true"></i></span>')

  card.append(button);
  card.append(name);
  card.append(address);
  card.append(district);

  col.append(card);
  row.append(col);

  district.on('click',(e) => {
    console.log($('#result'));
    e.preventDefault();
    console.log($(e.currentTarget).html());
    state.selectedStation = filterByDistrict(state.stations,$(e.currentTarget).html())[0];
    console.log(state.selectedStation[0]);
    update();
    $('#result').empty();
    ShowMap(state.selectedStation[0]);
  })
  return row;
};

const reRender = (station, result) => {
  // console.log(result);
  result.empty();
  station.forEach((e) => {
    // result.append(stationsItem(station,result));
    result.append(stationsItem(e, _ =>{reRender(station, result); }));
  });

  // return movieContainer;
}
