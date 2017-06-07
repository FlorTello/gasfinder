'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const result = $('<div id="result"></div>');
  const map = $('<div id="map"></div>');
  const detalle = $('<div id="detalle"></div>');
  const container = Header();
  container.append(Search());
  wrapper.append(container);
  wrapper.append(result);
  wrapper.append(map);
  wrapper.append(detalle);
  root.append(wrapper);

}

const reRender = (station, result,update) => {
  update.empty();
  result.empty();
  station.forEach((e) => {
    result.append(stationsItem(e, _ =>{reRender(station, result , update); }));
  });

}

var  state = {
  stations: null,
  selectedStation: null
};

$( _ => {
  getJSON('stations.json', (err, json) => {
    if (err) { return alert(err.message);}
    state.stations = json;
    const root = $('.root');
    render(root);
  });


});
