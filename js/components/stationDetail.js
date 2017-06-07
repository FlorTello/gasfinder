'use strict';

const stationsItem = (station,update) => {
  const row = $('<div class="row">');
  const col = $('<div class="col s12 m12">');
  const card = $('<div class="card-panel grey lighten-2">');
  const name = $(`<h5>${station.name}</h5>`);
  const address = $(`<p>${station.address}</p>`);
  const district = $(`<p>${station.district}</p>`);
  const button = $('<span class="right"><i class="fa fa-map" aria-hidden="true"></i></span>')

  card.append(button, name, address, district );

  col.append(card);
  row.append(col);

  district.on('click',(e) => {
    console.log($('#result'));
    e.preventDefault();
    console.log($(e.currentTarget).html());
    state.selectedStation = filterByDistrict(state.stations,$(e.currentTarget).html())[0];
    console.log(state.selectedStation[0]);
    $('#result').empty();
    console.log(state.selectedStation);
    ShowMap(state.selectedStation);
    $('#detalle').append(stationsProducts(state.selectedStation));
  })
  return row;
};

const stationsProducts = (station) => {
  console.log(station);
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12 m6 l12">');
  const name = $(`<h5>${station.name}</h5>`);
  const distancia = $(`<div id ="distancia" class = "right"></div>`);
  const products = $('<div class="products"></div>');
  station.products.forEach(e=>{
    products.append("<a class='btn-floating btn-large waves-effect waves-light red'>"+e+"</a>");
  });

  col.append(distancia);
  col.append(name);
  col.append(products);

  row.append(col);
  container.append(row);

  return container;
};
