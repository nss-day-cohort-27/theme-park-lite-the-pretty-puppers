"use strict";

//create initial object to hold all the 'db' methods
//holds all functions
let dbCalls = {};

// hold on to the data locally within this module - may need it again.
let parkInfo = {};
let attractions = {};
let attractionTypes = {};
let areaTypes = {};

let testArray = [];

testArray.push(parkInfo);

console.log("test", testArray);

// let parseData = (data) => {
//   data..forEach((element) => {
//      legoItems.push(element);
//   });
//   return legoItems;
// };


dbCalls.fetchParkInfo = () => {
    return fetch("https://external-data-56670.firebaseio.com/park-info.json")
      .then(res => res.json())
      .then((result) => {
        // console.log(typeof result);
        console.log(result);
        parkInfo = result;
        return parkInfo;
      },
      (error) => {
         return error;
      });
};

dbCalls.fetchAttractions = () => {
  return fetch("https://external-data-56670.firebaseio.com/attractions.json")
    .then(res => res.json())
    .then((result) => {
      // console.log(typeof result);
      attractions = result;
      return attractions;
    },
    (error) => {
       return error;
    });
};

dbCalls.fetchTypes = () => {
  return fetch("https://external-data-56670.firebaseio.com/attraction_types.json")
    .then(res => res.json())
    .then((result) => {
      // console.log(typeof result);
      attractionTypes = result;
      return attractionTypes;
    },
    (error) => {
       return error;
    });
};

dbCalls.fetchAreas = () => {
  return fetch("https://external-data-56670.firebaseio.com/areas.json")
    .then(res => res.json())
    .then((result) => {
      // console.log(typeof result);
      areaTypes = result;
      return areaTypes;
    },
    (error) => {
       return error;
    });
};

dbCalls.getParkInfo = () => {
  return parkInfo;
};

dbCalls.getTypes = () => {
 return attractionTypes;
};

dbCalls.getAreas = () => {
  return areaTypes;
}


console.log("test2:", parkInfo);

module.exports = dbCalls;
