'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const container = Header();
  container.append(Search());
  wrapper.append(container);
  root.append(wrapper);
}

// const reRender = (todoList, completedList) => {
//   todoList.empty();
//   completedList.empty();
//   state.stations.forEach(todo=>{
//     if(!todo.completed){
//       todoList.append(TodoItem(todo, _ => {reRender(todoList,completedList); }));
//     }else {
//       completedList.append(TodoItem(todo, _ => { reRender(todoList, completedList);}));
//     }
//   });
// };

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

    // $('input').on('keyup',(e)=>{
    //   const selected = filterByDistrict(state.stations,$(e.target).val());
    //   state.selectedStation = selected;
    //   // console.log(selected);
    //   $('.resul').append(Details());
    // });
  });


});
