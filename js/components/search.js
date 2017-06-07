const Search  = (update) => {
  const row = $('<div class="row">');
  const col = $('<div class="input-field col s12">');
  const input = $('<input id="search" type="search" placeholder="Ingrese su distrito a buscar" required>');
  const label = $('<label class="label-icon" for="search"><i class="fa fa-search"></i></label>');

  col.append(input,label);
  row.append(col);
  console.log(state.stations);

  input.on('keyup',(e)=>{
    var array = state.stations;
    if (input.val().trim() !== "") {
        array = filterByDistrict(state.stations, input.val());
     }
     reRender(array, $('#result'),$('#map'));
  });

  return row;
}
