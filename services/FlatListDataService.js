import React, { Component } from 'react';
const apiGetAllFlatListData =
  'http://localhost:3000/flatlistData?_sort=id&_order=desc';
const apiPostAllFlatListData = 'http://localhost:3000/flatlistData';
const apiPutAllFlatListData = 'http://localhost:3000/flatlistData';
const apiDeleteAllFlatListData = 'http://localhost:3000/flatlistData';
import { db } from './../config';
 

let flatListDataRef = db.ref('/flatListData');
// export const getAllFlatListData = function() {
//   return fetch(apiGetAllFlatListData)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       return data;
//     });
// };

//no need as firebase api 

export const getAllFlatListData =  () => {
  try {
    flatListDataRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
       
      return items;
    });
  } catch (error) {
    console.log(error);
  }
};

//insert a new one
export const insertNewFlatListData = async (params) => {
  try {
    //console.log(params);
    //console.log(123);
    
    db.ref('/flatListData').child(
      params.id
    ).set(params);
    // let response = await fetch(apiPostAllFlatListData, {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(params),
    // });
    // let responseJson = await response.json();
    // return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export const updateFlatListData = async (params) => {

  try {
     
    //console.log((+params.id+1).toString());
    db.ref('/flatListData'+ '/'  + params.id).set(params);
    // let response = await fetch(apiPutAllFlatListData + '/' + params.id, {
    //   method: 'put',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(params),
    // });
    // let responseJson = await response.json();
    // return responseJson;

  } catch (error) {
    console.log(error);
  }
};

export const deleteFlatListData = async (params) => {
  try {
    db.ref('/flatListData'+ '/'  + (params.id)).remove();
    // let response = await fetch(apiDeleteAllFlatListData + '/' + params.id, {
    //   method: 'delete'
    // });
    // let responseJson = await response.json();
    return {delete:'data delete', status: 200};
  } catch (error) {
    console.log(error);
  }
};