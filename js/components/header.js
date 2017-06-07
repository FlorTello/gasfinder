'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  header.append(title);

  return header;
}
const Search  = (update) => {
  const row = $('<div class="row">');
  const col = $('<div class="input-field col s12">');
  const input = $('<input id="search" type="search" placeholder="Ingrese su distrito a buscar" required>');
  const label = $('<label class="label-icon" for="search"><i class="fa fa-search"></i></label>');

  col.append(input);
  col.append(label);
  row.append(col);

  input.on('keypress',(e)=>{

  });

  return row;
}
