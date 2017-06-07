'use strict';

const filterByDistrict = (stations,query) => {
  // var index = stations.map(e=>e.district.toLowerCase()).indexOf(query.toLowerCase());
  return stations.filter((e)=>{
    if(e.district.toLowerCase().indexOf(query.toLowerCase()) !== -1){
      return e;
    }
  });
  // return stations.filter(e => e.district.toLowerCase().indexOf(query.toLowerCase() !== -1 ? e:"no encontrado" ));
}
