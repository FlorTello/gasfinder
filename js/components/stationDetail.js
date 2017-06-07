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

  row.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = station;
    console.log(station);
    $('#result').empty();
    ShowMap(state.selectedStation);
    // reRender($('#detalle'),$('#result'),$('#detalle'));
    $('#detalle').append(stationsProducts(state.selectedStation));
  })
  return row;
};

const stationsProducts = (station) => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12 m6 l12">');
  const name = $(`<h5>${station.name}</h5>`);
  const distancia = $(`<span id ="distancia" class = "right"></span>`);
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
