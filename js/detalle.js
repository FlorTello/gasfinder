'use strict';


const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  root.append(wrapper);

}
const state = {
  todos: []
};
$(_ => {
  new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
  });
  const root = $('.root');
  render(root);
});
