
const Details = () => {

  const row = $('<div class="row">');
  const col = $('<div class="col s12 m12">');
  const card = $('<div class="card-panel grey lighten-2">');
  const name = $(`<h5>${state.stations.name}</h5>`);
  const address = $(`<p>${state.stations.address}</p>`);
  const district = $(`<p>${state.stations.district}</p>`);
  const button = $('<button><i class="fa fa-map" aria-hidden="true"></i></button>')

  card.append(name);
  card.append(address);
  card.append(district);

  col.append(card);
  row.append(col);

  button.on('click',(e) => {
    // e.preventDefault();
    // state.selectedMovie = null;
    // update();
    alert('detalle');
  })

  return row;
}
